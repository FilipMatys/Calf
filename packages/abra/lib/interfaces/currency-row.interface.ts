/**
 * Currency row
 * @description Interface for abra currency row
 */
export interface ICurrencyRow {
     ID: string,
     ObjVersion: number,
     Parent_ID: string,
     DateOfChange$DATE: string,
     Denomination: boolean,
     Currency_ID: string,
     Coef: string
}