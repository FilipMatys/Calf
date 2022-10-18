// External modules
import { retry, timeout } from "rxjs/operators";

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
    public abstract execute(request: TRequest): Promise<TResponse>;

    /**
     * Process request
     * @param message 
     * @returns 
     */
    protected async processRequest(message: Message): Promise<Message> {
        // Create new promise
        return new Promise<Message>((resolve, reject) => {
            // Set time out to retry the message
            const retryTimeout = setTimeout(() => this._socket.write(message.toBuffer()), 15000);

            // Subscribe to received data
            const subscription = this._socket.data$.pipe(timeout(15000), retry(1)).subscribe((data) => {
                // Clear retry timeout
                clearTimeout(retryTimeout);

                // Parse data response
                const response = Message.fromBuffer(data);

                // Check for activity message
                if (response.isActivityMessage()) {
                    // Do nothing
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
     */
    protected async processResponse(message: Message): Promise<Message> {
        // Create new promise
        return new Promise<Message>((resolve, reject) => {
            // Subscribe to received data
            const subscription = this._socket.data$.pipe(timeout(60000)).subscribe((data) => {
                // Parse data response
                const response = Message.fromBuffer(data);

                // Check if is activity message
                if (response.isActivityMessage()) {
                    // Do nothing
                    return;
                }

                // Unsubscribe from further messages
                subscription && subscription.unsubscribe();

                // Generate confirmation message
                const confirmation = response.clone();
                confirmation.clearData();
                confirmation.finalize();

                // Send confirmation
                this._socket.write(confirmation.toBuffer());

                // Resolve the response
                return resolve(response);
            }, (error) => reject(error));
        });
    }
}