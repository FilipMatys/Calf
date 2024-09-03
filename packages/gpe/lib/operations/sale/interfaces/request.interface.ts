/**
 * Sale request
 * @description Interface for sale request
 */
export interface ISaleRequest {

    /**
     * Amount
     * @description Total amount including tip (if present)
     */
    amount: number;

    /**
     * Tip
     * @description Tip amount
     */
    tip?: number;

    /**
     * Reference number
     * @description Optional reference number of the
     * transaction
     */
    referenceNumber?: string;
}