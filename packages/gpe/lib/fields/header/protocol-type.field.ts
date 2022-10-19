// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Protocol type
 * @description Information on protocol type.
 */
export class ProtocolTypeField extends HeaderField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Protocol type", FieldFormat.AN, { min: 2, max: 2 });
    }

    /**
     * Is equal
     * @param value 
     * @returns 
     */
    public isEqual(value: string): boolean {
        return value === this._data;
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