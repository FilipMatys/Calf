// External modules
import { retry, timeout } from "rxjs/operators";

// Enums
import { ResponseCode } from "../../enums/response-code.enum";

// Classes
import { Message } from "../../classes/message.class";

// Utilities
import { TCPSocket } from "../../utilities/socket/socket.utility";

/**
 * Common operation
 * @default Common operation class
 */
export abstract class CommonOperation<TRequest, TResponse> {

    /**
     * Socket
     * @description Socket utility for communication
     */
    protected _socket: TCPSocket;

    /**
     * Url
     * @default Url for communication
     */
    protected _url: string;

    /**
     * Port
     * @description Port for communication
     */
    protected _port: number;

    /**
     * Constructor
     * @param socket 
     * @param url
     * @param port
     */
    constructor(socket: TCPSocket, url: string, port: number) {
        // Assign values
        this._socket = socket;
        this._url = url;
        this._port = port;
    }

    /**
     * Execute
     * @description Execute given operation
     * @param request 
     */
    public abstract execute(request?: TRequest): Promise<TResponse>;

    /**
     * Process request
     * @param message 
     * @returns 
     */
    protected async processRequest(message: Message): Promise<Message> {
        // Init retry counter
        let retryCnt: number = 1;

        // Create new promise
        return new Promise<Message>((resolve, reject) => {
            // Set time out to retry the message
            let retryTimeout = setTimeout(() => this._socket.write(message.toBuffer()), 15000);

            // Subscribe to received data
            const subscription = this._socket.data$.pipe(timeout(15000), retry(1)).subscribe((data) => {
                // Clear retry timeout
                clearTimeout(retryTimeout);

                // Parse data response
                const response = Message.fromBuffer(data);

                // Check for transport layer error
                if (response.isTransportLayerErrorMessage() && !!retryCnt--) {
                    // Set time out to retry the message
                    retryTimeout = setTimeout(() => this._socket.write(message.toBuffer()), 12000);

                    // Do nothing else
                    return;
                }

                // Check if message is valid response
                if (!message.isValidResponse(response)) {
                    // Check retry count
                    if (!retryCnt--) {
                        // Unsubscribe from further messages
                        subscription && subscription.unsubscribe();

                        // Reject further processing
                        return reject();
                    }

                    // Send error message and do nothing else
                    return this._socket.write(message.toErrorMessage(response, ResponseCode.ErrorInMessageFormat).toBuffer());
                }

                // Now check crc16
                if (!response.isCRC16Valid()) {
                    // Check retry count
                    if (!retryCnt--) {
                        // Unsubscribe from further messages
                        subscription && subscription.unsubscribe();

                        // Reject further processing
                        return reject();
                    }

                    // Send error message and do nothing else
                    return this._socket.write(message.toErrorMessage(response, ResponseCode.ErrorInMessageCRC).toBuffer());
                }

                // Check for activity message
                if (response.isActivityMessage()) {
                    // Reset retry count
                    retryCnt = 1;

                    // Do nothing else
                    return;
                }

                // Unsubscribe from further messages
                subscription && subscription.unsubscribe();

                // Resolve the confirmation message
                return resolve(response);
            }, (error) => reject(error));

            // Write message to stream
            this._socket.write(message.toBuffer());
        });
    }

    /**
     * Process response
     * @param message 
     * @param requiredFields
     */
    protected async processResponse(message: Message, requiredFields: string[] = []): Promise<Message> {
        // Init retry counter
        let retryCnt: number = 1;

        // Create new promise
        return new Promise<Message>((resolve, reject) => {
            // Subscribe to received data
            const subscription = this._socket.data$.pipe(timeout(60000)).subscribe((data) => {
                // Parse data response
                const response = Message.fromBuffer(data);

                // Check if message is valid response
                if (!message.isValidResponse(response)) {
                    // Check retry count
                    if (!retryCnt--) {
                        // Unsubscribe from further messages
                        subscription && subscription.unsubscribe();

                        // Reject further processing
                        return reject();
                    }

                    // Send error message and do nothing else
                    return this._socket.write(message.toErrorMessage(response, ResponseCode.ErrorInMessageFormat).toBuffer());
                }

                // Now check crc16
                if (!response.isCRC16Valid()) {
                    // Check retry count
                    if (!retryCnt--) {
                        // Unsubscribe from further messages
                        subscription && subscription.unsubscribe();

                        // Reject further processing
                        return reject();
                    }

                    // Send error message and do nothing else
                    return this._socket.write(message.toErrorMessage(response, ResponseCode.ErrorInMessageCRC).toBuffer());
                }

                // Check if is activity message
                if (response.isActivityMessage()) {
                    // Reset retry count
                    retryCnt = 1;

                    // Do nothing
                    return;
                }

                // Now check if is error message
                if (!response.isErrorMessage() && !response.hasValidData(requiredFields)) {
                    // Check retry count
                    if (!retryCnt--) {
                        // Unsubscribe from further messages
                        subscription && subscription.unsubscribe();

                        // Reject further processing
                        return reject();
                    }

                    // Send error message and do nothing else
                    return this._socket.write(message.toErrorMessage(response, ResponseCode.ErrorInMessageFormat).toBuffer());
                }

                // Unsubscribe from further messages
                subscription && subscription.unsubscribe();

                // Send confirmation
                this._socket.write(message.toConfirmationMessage(response).toBuffer());

                // Resolve the response
                return resolve(response);
            }, (error) => reject(error));
        });
    }
}