/**
 * Bill item
 * @description Interface for Bill item
 */
export interface IBillItem<TAdditionalData = any> {
    id?: string;
    name: string;
    quantity: string;
    price: string;
    minQuantity?: string;
    tags?: string[];
    additionalData?: TAdditionalData;
}