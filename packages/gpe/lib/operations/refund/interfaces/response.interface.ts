// Interfaces
import { ICommonResponse } from "../../common/interfaces/response.interface";

/**
 * Refund response
 * @description Interface for refund response
 */
export interface IRefundResponse extends ICommonResponse {
    authorizationCode?: string;
}