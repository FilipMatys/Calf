/**
 * Price definition
 * @description Interface for abra Price definition
 */
export interface IPriceDefinition {
     ID: string,
     ObjVersion: number,
     Hidden: boolean,
     Code: number,
     Name: string,
     Note: string,
     Currency_ID: string,
     PriceWithVAT: boolean,
     Basic: boolean
}