// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";
import { Strings } from "../../utilities/strings/strings.utility";

/**
 * CRC16 field
 * @description CRC16 of message data part.
 */
export class CRC16Field extends HeaderField<number> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("CRC16", FieldFormat.AN, { min: 4, max: 4 });
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get hexadecimal value with 4 places
        const hex = Strings.padStart(this._data.toString(16), 4, "0").toUpperCase();

        // Get data array from hex string
        this._buffer = DataArray.fromString(hex);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get string from buffer
        const hex = DataArray.toString(this._buffer);

        // Assign data
        this._data = parseInt(hex, 16);
    }
}