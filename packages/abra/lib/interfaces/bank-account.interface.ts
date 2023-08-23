/**
 * Bank account
 * @description Interface for abra bank account
 */
export interface IBankAccount {
     address_id: string,
     bankaccount: string,
     bankcountry_id: string,
     id: string,
     name: string,
     objversion: number,
     parent_id: string,
     posinde: number,
     specsymbol: string,
     swiftcode: string
}