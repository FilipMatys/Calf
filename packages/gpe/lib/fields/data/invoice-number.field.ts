// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Invoice number field
 * @description Allows to add additional identifier related to each 
 * transaction, which will appear in a transaction report.
 */
export class InvoiceNumberField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Invoice number", "S", FieldFormat.N, { min: 1, max: 10 });
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