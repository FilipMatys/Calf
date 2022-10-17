// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Transaction ID field
 * @description Fixed 12 numeric unique identifier of the financial transaction.
 */
export class TransactionIDField extends DataField<string> {

    /**
     * Constructor
     * @param identifier
     */
    constructor(identifier?: string) {
        // Call super
        super("Transaction ID", "n", FieldFormat.N, { min: 12, max: 12 }, identifier);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get data array from hex string
        this._buffer = DataArray.fromString(this._data);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get string from buffer
        this._data = DataArray.toString(this._buffer);
    }
}