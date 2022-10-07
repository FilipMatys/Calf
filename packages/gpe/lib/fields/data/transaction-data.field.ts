// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Transaction data field data
 * @description Interface for transaction data field.
 */
export interface ITransactionDataFieldData {
    TID?: string;
    PAN?: string;
    sequenceNumber?: string;
    date?: { year: number, month: number, day: number };
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
        super("Transaction data", "d", FieldFormat.V, { min: 21, max: 32 });
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get date string values
        const sYear = `${this._data.date?.year || 0}`.slice(-2).padStart(2, "0");
        const sMonth = `${this._data.date?.month || 0}`.slice(-2).padStart(2, "0");
        const sDay = `${this._data.date?.day || 0}`.slice(-2).padStart(2, "0");

        // Assign buffer
        this._buffer = DataArray.fromString([
            this._data.TID,
            this._data.PAN,
            this._data.sequenceNumber,
            `${sYear}${sMonth}${sDay}`
        ].join(";"));
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        throw new Error("Method not implemented.");
    }
}