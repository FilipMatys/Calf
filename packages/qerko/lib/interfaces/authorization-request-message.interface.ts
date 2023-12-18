// Interfaces
import { IWebSocketMessage } from "./web-socket-message.interface";

/**
 * Authorization request web socket message
 * @description Interface for Authorization web socket message
 */
export interface IAuthorizationRequestWebSocketMessage extends IWebSocketMessage {
    posId: string;
    apiKey: string;
    locale?: string;
}