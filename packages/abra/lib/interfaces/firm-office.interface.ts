/**
 * Firm office
 * @description Interface for abra firm office
 */
export interface IFirmOffice {
     address_id: string,
     checkcredit: boolean,
     credit: number,
     dealercategory_id: string,
     electronicaddress_id: string,
     hidden: boolean,
     id: string,
     masscorrespondence: boolean,
     name: string,
     objversion: number,
     officeidentnumber: string,
     officeunique_id: string,
     parent_id: string,
     posindex: number,
     store_id: string,
     synchronizeaddress: boolean
}