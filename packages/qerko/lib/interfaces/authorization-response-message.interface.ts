// Interfaces
import { IError } from "./error.interface";
import { IWebSocketMessage } from "./web-socket-message.interface";

/**
 * Authorization response web socket message
 * @description Interface for Authorization response web socket message
 */
export interface IAuthorizationResponseWebSocketMessage extends IWebSocketMessage {
    authorized: boolean;
    error?: IError;
}