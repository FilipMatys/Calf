/**
 * Cancellation request
 * @description Interface for cancellation request
 */
export interface ICancellationRequest {

    /**
     * Sequence number
     * @description Sequence number of the previous transaction
     */
    sequenceNumber?: string;

    /**
     * Amount
     * @description Amount to cancel
     */
    amount?: number;

    /**
     * Terminal ID
     * @description Identifier of the terminal the transaction
     * was executed on
     */
    terminalID?: string;

    /**
     * Date
     * @description Date of the original transaction
     */
    date?: { year: number, month: number, day: number };

    /**
     * Card number
     * @description 
     */
    cardNumber?: string;
}