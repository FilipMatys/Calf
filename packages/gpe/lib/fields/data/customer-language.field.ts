// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Customer language field
 * @description Optional field designed for Unattended POS.
 */
export class CustomerLanguageField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Customer Language", "A", FieldFormat.A, { min: 2, max: 2 });
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