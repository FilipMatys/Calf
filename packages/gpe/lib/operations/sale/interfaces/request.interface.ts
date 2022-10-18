/**
 * Sale request
 * @description Interface for sale request
 */
export interface ISaleRequest {

    /**
     * Amount
     * @description Amount to be paid
     */
    amount: number;

    /**
     * Reference number
     * @description Optional reference number of the
     * transaction
     */
    referenceNumber?: string;
}