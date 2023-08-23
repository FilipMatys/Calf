import { IPriceListRounding } from "../abra"
import { IPriceListValidity } from "./price-list-validity.interface"

/**
 * Price list
 * @description Interface for abra price list
 */
export interface IPriceList {
     ID: string,
     ObjVersion: 1,
     Rows: IPriceListValidity[],
     Hidden: boolean,
     Code: string,
     Name: string,
     Note: string,
     ManagedBy_ID: string,
     CreationDate$DATE: string,
     DealerDiscountExcluded: boolean,
     IndividualDiscountExcluded: boolean,
     FinancialDiscountExcluded: boolean,
     QuantityDiscountExcluded: boolean,
     DocumentDiscountExcluded: boolean,
     PriceListRoundings: IPriceListRounding[]
}