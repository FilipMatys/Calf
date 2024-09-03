// Interfaces
import { IIdentification } from "./identification.interface";
import { IServicer } from "./servicer.interface";

/**
 * Account
 * @description Interface for Account
 */
export interface IAccount {
    currency?: string;
    feePlanI18N?: string;
    id?: string;
    nameI18N?: string;
    ownersNames?: string[];
    productI18N?: string;
    identification?: IIdentification;
    servicer?: IServicer;
}