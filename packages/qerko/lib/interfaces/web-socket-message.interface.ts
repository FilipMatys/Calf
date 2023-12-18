// Enums
import { WebSocketMessageType } from "../enums/web-socket-message-type.enum";

/**
 * Web socket message
 * @description Interface for web socket message
 */
export interface IWebSocketMessage {
    type: WebSocketMessageType;
}