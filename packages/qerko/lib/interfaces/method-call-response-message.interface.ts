// Interfaces
import { IWebSocketMessage } from "./web-socket-message.interface";
import { IError } from "./error.interface";

// Enums
import { WebSocketMessageMethod } from "../enums/web-socket-message-method.enum";

/**
 * Method call response web socket message
 * @description Interface for Method call response web socket message
 */
export interface IMethodCallResponseWebSocketMessage<TResult> extends IWebSocketMessage {
    uuid: string;
    result?: TResult;
    error?: IError;
    calledMethod?: WebSocketMessageMethod;
}