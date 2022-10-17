// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";
import { Strings } from "../../utilities/strings/strings.utility";

/**
 * Protocol version field
 * @description Information on protocol version.
 */
export class ProtocolVersionField extends HeaderField<number> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Protocol version", FieldFormat.N, { min: 2, max: 2 });
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get normalized value
        const normalized = Strings.padStart(`${this._data || 0}`, 2, "0");

        // Get data array from normalized string
        this._buffer = DataArray.fromString(normalized);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get normalized string from buffer
        const normalized = DataArray.toString(this._buffer);

        // Assign data
        this._data = parseInt(normalized);
    }
}