// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Application ID field
 * @description Field contains information of chip application with leading information.
 */
export class ApplicationIDField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Application ID (AID)", "a", FieldFormat.AN, { min: 12, max: 24 });
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