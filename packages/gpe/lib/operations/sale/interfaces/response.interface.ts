// Interfaces
import { ICommonResponse } from "../../common/interfaces/response.interface";

/**
 * Sale response
 * @description Interface for sale response
 */
export interface ISaleResponse extends ICommonResponse {

    /**
     * Authorization code
     * @description Authorization code of given transaction
     */
    authorizationCode?: string;

    /**
     * Amount
     * @description Actual charged amount
     */
    amount?: number;
}