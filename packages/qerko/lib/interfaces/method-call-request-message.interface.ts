// Interfaces
import { IWebSocketMessage } from "./web-socket-message.interface";

// Enums
import { WebSocketMessageMethod } from "../enums/web-socket-message-method.enum";

/**
 * Method call request web socket message
 * @description Interface for Method call request web socket message
 */
export interface IMethodCallRequestWebSocketMessage extends IWebSocketMessage {
    uuid: string;
    method: WebSocketMessageMethod;
    args: any[];
}