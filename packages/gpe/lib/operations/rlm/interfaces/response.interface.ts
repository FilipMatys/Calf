// Interfaces
import { ICommonResponse } from "../../common/interfaces/response.interface";

// Enums
import { TransactionType } from "../../../enums/transaction-type.enum";

/**
 * Repeat last message response
 * @description Interface for repeat last message response
 */
export interface IRepeatLastMessageResponse extends ICommonResponse {
    authorizationCode?: string;
    transactionType?: TransactionType;

    /**
     * Amount
     * @description Actual charged amount
     */
    amount?: number;

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