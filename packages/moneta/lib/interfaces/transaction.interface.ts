// Interfaces
import { ITransactionDate } from "./transaction-date.interface";
import { IEntryDetails } from "./entry-details.interface";
import { IAmount } from "./amount.interface";

/**
 * Transaction
 * @description Interface for Transaction
 */
export interface ITransaction {
    creditDebitIndicator?: "CRDT" | "DBIT";
    amount?: IAmount;
    entryReference?: string;
    reversalIndicator?: boolean;
    status?: "BOOK" | "PDNG";
    bookingDate?: ITransactionDate;
    enteredDate?: ITransactionDate;
    valueDate?: ITransactionDate;
    entryDetails?: IEntryDetails;
}