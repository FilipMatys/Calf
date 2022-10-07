// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Count field
 * @description Maximum number of transactions processed by operation.
 */
export class CountField extends DataField<number> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Count", "C", FieldFormat.N, { min: 3, max: 3 });
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get normalized value
        const normalized = `${this._data || 0}`.padStart(3, "0");

        // Assign count to value
        this._buffer = DataArray.fromString(normalized);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get normalized value
        const normalized = DataArray.toString(this._buffer);

        // Assign data
        this._data = (parseInt(normalized) || 0);
    }
}