/**
 * Refund request
 * @description Interface for refund request
 */
export interface IRefundRequest {

    /**
     * Amount
     * @description Amount to refund
     */
    amount: number;

    /**
     * Reference number
     * @description Optional reference number of the
     * transaction
     */
    referenceNumber?: string;
}