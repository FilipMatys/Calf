/**
 * Exchange rate
 * @description Interface for Exchange rate
 */
export interface IExchangeRate {
    date?: Date;
    number?: number;
    country?: string;
    currency?: string;
    amount?: number;
    value?: number;
}