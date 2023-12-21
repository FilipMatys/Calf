/**
 * Tax info
 * @description Interface for Tax info
 */
export interface ITaxInfo {
    rate: string;
    base: string;
    tax: string;
    price?: string;
    name?: string;
}