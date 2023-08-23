import { ICurrencyRow } from "./currency-row.interface";
import { ICurrencyValue } from "./currency-value.interface";

/**
 * Currency
 * @description Interface for abra currency
 */
export interface ICurrency {
     ID: string,
     ObjVersion: 5,
     Rows: ICurrencyRow[],
     Hidden: false,
     Code: string,
     Name: string,
     Symbol: string,
     Rounding: number,
     Values: ICurrencyValue[],
     BankCode: string,
     DocRounding: number,
     DocCashRounding: number,
     DocVATRounding: number
}