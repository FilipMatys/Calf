// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Code of region field
 * @description Field contains code defining the transport region. 
 */
export class CodeOfRegionField extends DataField<string> {

    /**
     * Constructor
     * @param code
     */
    constructor(code?: string) {
        // Call super
        super("Code of Region", "U", FieldFormat.AN, { min: 4, max: 4 }, code);
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