// Interfaces
import { ITransaction } from "./transaction.interface";

/**
 * Transaction result response
 * @description Interface for transaction result response
 */
export interface ITransactionResultResponse extends ITransaction {

    /**
     * Date time server
     * @description Date and time on server when was the result made
     */
    dateTimeServer?: string;

    /**
     * Date time terminal
     * @description Date and time on terminal when was the result made
     */
    dateTimeTerminal?: string;

    /**
     * Response code
     * @description Code of the response
     */
    responseCode?: string;

    /**
     * Response message
     * @description Message of the response
     */
    responseMessage?: string;

    /**
     * Transaction type
     * @description Type of the transaction
     */
    transactionType?: string;

    /**
     * Amount
     * @description Paid amount
     */
    amount?: number;

    /**
     * Tip amount
     * @description Tip amount of the transaction
     */
    tipAmount?: number;
}