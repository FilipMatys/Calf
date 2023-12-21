// Interfaces
import { IPaymentPart } from "./payment-part.interface";
import { IDiscount } from "./discount.interface";
import { IBillItem } from "./bill-item.interface";

// Enums
import { Currency } from "../enums/currency.enum";
import { PaymentState } from "../enums/payment-state.enum";

/**
 * Payment
 * @description Interface for Payment
 */
export interface IPayment<TAdditionalData = any> {
    idCustomer: string;
    id: string;
    idBill: string;
    currency: Currency;
    discount?: IDiscount;
    state: PaymentState;
    tipBrutto: string;
    tipNetto: string;
    additionalData?: TAdditionalData;
    items: IBillItem[];
    parts: IPaymentPart[];
}