/**
 * Receipt item
 * @description Interface for Receipt item
 */
export interface IReceiptItem {
    name: string;
    price: string;
    taxName?: string;
    quantity?: string;
}