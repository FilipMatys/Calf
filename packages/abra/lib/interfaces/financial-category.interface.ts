/**
 * Financial category
 * @description Interface for abra Financial category
 */
export interface IFinancialCategory {

     ID: string,
     ObjVersion: number,
     Code: string,
     Name: string,
     Minimum: number,
     Maximum: number,
     MeanValue: number
}