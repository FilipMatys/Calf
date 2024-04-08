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

    /**
     * Tip
     */
    tip?: number;

    /**
     * Is signature required
     * @description Whether customer signature is required
     */
    isSignatureRequired?: boolean;

    /**
     * Sequence number
     * @description Sequence number of the transaction
     */
    sequenceNumber?: string;

    /**
     * Card number
     * @description Masked number of the card (PAN)
     */
    cardNumber?: string;
}