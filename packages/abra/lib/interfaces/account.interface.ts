/**
 * Abra account
 * @description Interface for abra account
 */
export interface IAccount {
     ID: string,
     ObjVersion: number,
     Hidden: boolean,
     Code: string,
     Name: string,
     AccountType: string,
     Taxable: boolean,
     Short: boolean,
     IsIncomplete: boolean,
     Transferable: boolean,
     IsCostForProjectControl: boolean,
     IsRevenueForProjectControl: boolean,
     TypeOfActivity: number,
     Parent_ID: string,
     Parent2_ID: string,
     BalanceAccount: boolean,
     VATIndex_ID: string,
     AccountTypeIndex: number,
     PrintToAcumulatedStatement: boolean
}