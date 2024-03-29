// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Terminal ID field
 * @description Terminal logical identifier on which the 
 * transaction will be made.
 */
export class TerminalIDField extends HeaderField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Terminal ID", FieldFormat.VGS, { min: 8, max: 8 });

        // Set default data
        this.setData(Array(8).fill(null).map((_) => " ").join(""));
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