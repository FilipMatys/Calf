// Interfaces
import { IRemittanceInformation } from "./remittance-information.interface";
import { IRelatedParties } from "./related-parties.interface";
import { IReferences } from "./references.interface";
import { IPurpose } from "./purpose.interface";

/**
 * Transaction details
 * @description Interface for Transaction details
 */
export interface ITransactionDetails {
    additionalTransactionInformation?: string;
    purpose?: IPurpose;
    references?: IReferences;
    remittanceInformation?: IRemittanceInformation;
    relatedParties?: IRelatedParties;
}