// Interfaces
import { IAmount } from "./amount.interface";
import { IBalanceDate } from "./balance-date.interface";
import { IBalanceType } from "./balance-type.interface";

/**
 * Balance
 * @description Interface for Balance
 */
export interface IBalance {
    creditDebitIndicator?: "CRDT" | "DBIT";
    amount?: IAmount;
    date?: IBalanceDate;
    type?: IBalanceType;
}