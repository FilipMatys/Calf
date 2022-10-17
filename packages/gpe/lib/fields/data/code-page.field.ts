// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Code page field
 * @description This code page is used for receipt printing.
 */
export class CodePageField extends DataField<string> {

    /**
     * Constructor
     * @param page
     */
    constructor(page?: string) {
        // Call super
        super("CodePage", "f", FieldFormat.AN, { min: 10, max: 10 }, page);
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