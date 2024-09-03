// Interfaces
import { ICreditorReferenceInformation } from "./creditor-reference-information.interface";

/**
 * Structured remittance information
 * @description Interface for Structured remittance information
 */
interface IStructuredRemittanceInformation {
    creditorReferenceInformation?: ICreditorReferenceInformation;
}

/**
 * Remittance information
 * @description Interface for Remittance information 
 */
export interface IRemittanceInformation {
    structured?: IStructuredRemittanceInformation;
    unstructured?: string;
}