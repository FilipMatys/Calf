/**
 * Creditor reference information wrapper
 * @description Interface for Creditor reference information wrapper
 */
interface ICreditorReferenceInformationWrapper {
    constantSymbol?: number;
    specificSymbol?: number;
    value?: string;
    variableSymbol?: string;
}

/**
 * Creditor reference information
 * @description Interface for Creditor reference information
 */
export interface ICreditorReferenceInformation {
    reference?: ICreditorReferenceInformationWrapper;
}