// Interfaces
import { ISaleToPOIRequest } from "./sale-to-poi-request.interface";

/**
 * Message request 
 * @description Interface for Message request
 */
export interface IMessageRequest<TRequest extends ISaleToPOIRequest> {
    SaleToPOIRequest?: TRequest;
}