/**
 * Period
 * @description Interface for abra Period
 */
export interface IPeriod {
     ID: string,
     ObjVersion: number,
     Code: boolean,
     Name:string,
     DateFrom$DATE: string,
     DateTo$DATE: string,
     Closing: boolean,
     Beginnings: boolean,
     SequenceNumber: number
}