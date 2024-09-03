// Interfaces
import { INameAndAddress } from "./name-and-address.interface";
import { IReferenceNumber } from "./reference-number.interface";

/**
 * Operator
 * @description Interface for Operator
 */
export interface IOperator {
    nameAndAddress?: INameAndAddress;
    referenceNumbers?: IReferenceNumber[];
    email?: string;
    phone?: string;
}
