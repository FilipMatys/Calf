// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Transaction data field data
 * @description Interface for transaction data field.
 */
export interface ITransactionDataFieldData {
    TID?: string;
    PAN?: string;
    sequenceNumber?: string;
    date: string;
}

/**
 * Transaction data field
 * @description Added data needed for transaction.
 */
export class TransactionDataField extends DataField<ITransactionDataFieldData> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Transaction data", "d", FieldFormat.AN, { min: 21, max: 32 });
    }

    public setValue(...args: any[]): void {
        throw new Error("Method not implemented.");
    }

    public getValue(): any {
        throw new Error("Method not implemented.");
    }
}