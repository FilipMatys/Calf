// Enums
import { ResponseCode } from "../../../enums/response-code.enum";

/**
 * Sale response
 * @description Interface for sale response
 */
export interface ISaleResponse {
    code?: ResponseCode;
    authorizationCode?: string;
}