import { IPriceListStorePricePrice } from "./price-list-store-price-price.interface";

/**
 * Price list store price
 * @description Interface for abra Price list store price
 */
export interface IPriceListStorePrice {
     ID: string,
     ObjVersion: number,
     StoreCard_ID: string,
     PriceRows: IPriceListStorePricePrice[],
     PriceList_ID: string,
     PriceListValidity_ID: string,
     DeletedFromPriceList: boolean
}