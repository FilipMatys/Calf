// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Sequence number
 * @description Fix 9 numeric unique identifier of each transaction.
 */
export class SequenceNumberField extends DataField<string> {

    /**
     * Constructor
     * @param number
     */
    constructor(number?: string) {
        // Call super
        super("Sequence number", "i", FieldFormat.N, { min: 9, max: 9 }, number);
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