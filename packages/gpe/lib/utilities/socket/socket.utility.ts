// External modules
import { Observable, Subject } from "rxjs";

/**
 * TCP socket
 * @description Wrapper utility for TCP socket
 */
export abstract class TCPSocket {

    /**
     * Data subject
     * @description Data subject to emit received data from socket
     */
    protected readonly _dataSubject: Subject<Uint8Array> = new Subject<Uint8Array>();

    /**
     * Data observable
     * @description Observable data of the socket
     */
    public readonly data$: Observable<Uint8Array> = this._dataSubject.asObservable();

    /**
     * Error subject
     * @description Error subject to emit socket errors
     */
    protected readonly _errorSubject: Subject<any> = new Subject<any>();

    /**
     * Error observable
     * @description Observable error of the socket
     */
    public readonly error$: Observable<any> = this._errorSubject.asObservable();

    /**
     * Close subject
     * @description Close subject to emit when connection is closed
     */
    protected readonly _closeSubject: Subject<void> = new Subject<void>();

    /**
     * Close observable
     * @description Observable close event
     */
    public readonly close$: Observable<void> = this._closeSubject.asObservable();

    /**
     * Connect
     * @description Connect to client
     * @param url 
     * @param port 
     */
    public abstract connect(url: string, port: number): Promise<void>;

    /**
     * Write
     * @description Write data to stream
     * @param data 
     */
    public abstract write(data: Uint8Array): void;

    /**
     * Shutdown
     * @description Close connection while cleaning the stream
     */
    public abstract shutdown(): Promise<void>;
}