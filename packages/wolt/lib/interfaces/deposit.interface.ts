// Interfaces
import { IPrice } from "./price.interface";

/**
 * Deposit
 * @description Interface for Deposit
 */
export interface IDeposit {
    gross_price?: IPrice;
    net_price?: IPrice;
    vat_percentage?: number;
}