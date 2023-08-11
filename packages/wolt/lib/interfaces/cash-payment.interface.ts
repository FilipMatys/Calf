// Interfaces
import { IPrice } from "./price.interface";

/**
 * Cash payment
 * @description Interface for Cash payment
 */
export interface ICashPayment {
    cash_amount?: IPrice;
    cash_to_expected?: IPrice;
}