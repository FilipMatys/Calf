// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Sums of financial transactions field
 * @description Field is a summary of transactions made since the last
 * transaction close day.
 */
export class SumsOfFinancialTransactionsField extends DataField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Sums of financial transactions", "L", FieldFormat.V, { min: 75, max: 75 });
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