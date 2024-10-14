// Interfaces
import { ISaleToPOIResponse } from "./sale-to-poi-response.interface";

// Enums
import { ResultCode } from "../enums/result-code.enum";

/**
 * Message response 
 * @description Interface for Message response
 */
export interface IMessageResponse<TResponse extends ISaleToPOIResponse> {
    ResultCode?: ResultCode;
    SaleToPOIResponse?: TResponse;
}