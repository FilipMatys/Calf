// Interfaces
import { IRelatedParty } from "./related-party.interface";

/**
 * Related parties
 * @description Interface for Related parties
 */
export interface IRelatedParties {
    creditor?: IRelatedParty;
    creditorAccount?: any;
    debtor?: IRelatedParty;
    debtorAccount?: any;
}