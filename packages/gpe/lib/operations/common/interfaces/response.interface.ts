// Enums
import { ResponseCode } from "../../../enums/response-code.enum";

/**
 * Common response
 * @description Interface for common operations response
 */
export interface ICommonResponse {
    responseCode?: ResponseCode;
    timestamp: Date;
    isConfirmed?: boolean;
}