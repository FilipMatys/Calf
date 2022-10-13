// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Multi-ID field
 * @description List of Multi-ID names.
 */
export class MultiIDField extends DataField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Multi-ID", "M", FieldFormat.VGS, { min: 4, max: 480 });
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