/**
 * Payment type
 * @description Interface for abra Payment type
 */
export interface IPaymentType {
     ID: string,
     ObjVersion: number,
     Hidden: boolean,
     Code: string,
     Name: string,
     PaymentKind: number,
     CommentTitle: string,
     CommentRequired: boolean,
     AuthCodeRequired: boolean,
     SummarizeDisabled: boolean,
     PrintComment: boolean,
     MaximumGiveBackAmount: number,
     AnalyticalAccount: string,
     MaximumPaymentAmount: number,
     EET: boolean
}