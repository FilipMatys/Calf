/**
 * Country row
 * @description Interface for abra country row
 */
export interface ICountry {
     ID: string,
     ObjVersion: number,
     Rows: [],
     Hidden: boolean,
     Code: string,
     Name: string,
     Currency_ID: string,
     NumCode: string,
     AlternateCode: string
}