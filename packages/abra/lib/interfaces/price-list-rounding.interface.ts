/**
 * Price list rounding
 * @description Interface for abra price list rounding
 */
export interface IPriceListRounding {
     AmountTo: number,
     ConstantToAdd: number,
     Currency_ID: string,
     ID: string,
     ObjVersion: number,
     Parent_ID: string,
     PosIndex: number,
     PriceRounding: number
}