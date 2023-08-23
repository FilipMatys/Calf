/**
 * Security user
 * @description Security user
 */
export interface ISecurityUser {
     Address_ID: string,
     AskToNPS: boolean,
     BIAccess: boolean,
     BI_GID: string,
     DPBypass: boolean,
     ID: string,
     Locked: boolean,
     LoginName: string,
     Name: string,
     Note: string,
     ObjVersion: number,
     OfferToLogin: boolean,
     PortalLoginName: string,
     PortalSecPassword: string,
     SecPassword: string,
     SecToken: string,
     SecTokenFastLogin: boolean,
     ShortName: string,
     WebAPIAccess: boolean
}