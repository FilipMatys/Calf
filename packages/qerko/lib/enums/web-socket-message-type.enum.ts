/**
 * Web socket message type
 * @description 
 */
export enum WebSocketMessageType {
    AuthorizationRequest = "auth-request",
    AuthorizationResponse = "auth-response",
    MethodCallRequest = "method-call-request",
    MethodCallResponse = "method-call-response"
}