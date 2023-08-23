/**
 * Store
 * @description Store
 */
export interface IStore {
     ID: string,
     ObjVersion: 85,
     Hidden: false,
     Address_ID: string,
     Name: string,
     Code: string,
     Account_ID: string,
     PriceList_ID: string,
     InventoryState: number,
     MachineName: string,
     InvStartedBy_ID: string,
     RefundStore_ID: string,
     FirstOpenPeriod_ID: string,
     LastOpenPeriod_ID: string,
     FIFO: boolean,
     ToAccount: boolean,
     OutOfStockDelivery: number,
     OutOfStockBatchDelivery: number,
     IntrastatInputStatistic_ID: string,
     IntrastatOutputStatistic_ID: string,
     IntrastatRegion_ID: string,
     IsLogistic: boolean,
     IsLogisticFromDate$DATE: string,
     RegisterBusOrders: boolean,
     IgnoreSCOutOfStockDelivery: boolean
}