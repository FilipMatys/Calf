/**
 * Discount offer
 * @description Interface for Discount offer
 */
export interface IDiscountOffer<TAdditionalData = any> {
    name: string;
    percent: string;
    additionalData?: TAdditionalData;
}