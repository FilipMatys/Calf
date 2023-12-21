// Interfaces
import { IBillItem } from "./bill-item.interface";
import { IDiscountOffer } from "./discount-offer.interface";

// Enums
import { Currency } from "../enums/currency.enum";
import { SubscriptionType } from "../enums/subscription-type.enum";

/**
 * Bill
 * @description Interface for Bill
 */
export interface IBill<TAdditionalData = any> {
    id: string;
    name?: string;
    created?: string;
    currency: Currency;
    discountOffer?: IDiscountOffer;
    denyDiscounts?: boolean;
    allowTip?: boolean;
    allowPartialPayment?: boolean;
    items: IBillItem[];
    additionalData?: TAdditionalData;
    receiptBcc?: string[];
    subscriptionType?: SubscriptionType;
}