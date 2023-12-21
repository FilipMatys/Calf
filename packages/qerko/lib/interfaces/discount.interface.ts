// Enums
import { DiscountSource } from "../enums/discount-source.enum";

/**
 * Discount
 * @description Interface for Discount
 */
export interface IDiscount<TAdditionalData = any> {
    source: DiscountSource;
    name: string;
    value: string;
    additionalData?: TAdditionalData;
}