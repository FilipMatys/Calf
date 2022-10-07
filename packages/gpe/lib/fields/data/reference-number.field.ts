// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Reference number field
 * @description Alphanumeric information sent by ECR to identify each transaction
 * by adding identifier.
 */
export class ReferenceNumberField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Reference number (transaction identifier)", "N", FieldFormat.AN, { min: 1, max: 20 });
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