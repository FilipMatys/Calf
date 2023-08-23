/**
 * Firm nace
 * @description Interface for abra firm nace
 */
export interface IFirmNace {
     ID: string,
     ObjVersion: number,
     Parent_ID: string,
     PosIndex: number,
     Nace_ID: string,
     NACEUpdateMode: number,
     ChangeDate$DATE: Date
}