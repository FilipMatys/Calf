/**
 * Firm office
 * @description Interface for abra firm office
 */
export interface IFirmPerson {
     ID: string,
     ObjVersion: number,
     Parent_ID: string,
     PosIndex: number,
     FirmOffice_ID: string,
     Person_ID: string,
     CommonWorkPosition_ID: string,
     Note: string,
     Address_ID: string
}