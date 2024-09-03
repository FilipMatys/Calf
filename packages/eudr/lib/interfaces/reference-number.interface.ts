// Enums
import { OperatorIdentifierType } from "../enums/operator-identifier-type.enum";

/**
 * Reference number
 * @description Interface for Reference number
 */
export interface IReferenceNumber {
    identifierType?: OperatorIdentifierType;
    identifierValue?: string;
}