// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";
import { TransactionType } from "../../enums/transaction-type.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Transaction type
 * @description Defines the type of transaction that is to be processed.
 */
export class TransactionTypeField extends DataField<TransactionType> {

    /**
     * Constructor
     * @param data
     */
    constructor(data?: TransactionType) {
        // Call super
        super("Transaction type", "T", FieldFormat.N, { min: 2, max: 2 }, data);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get normalized value
        const normalized = `${this._data || 0}`.padStart(2, "0");

        // Get data array from normalized string
        this._buffer = DataArray.fromString(normalized);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get normalized string from buffer
        const normalized = DataArray.toString(this._buffer);

        // Assign data
        this._data = parseInt(normalized);
    }
}