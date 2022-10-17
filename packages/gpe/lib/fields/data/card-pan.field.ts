// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Token, HASH of Card PAN
 * @description Field containing hash of enciphered PAN (SHA-256).
 */
export class CardPANField extends DataField<string> {

    /**
     * Constructor
     * @param pan 
     */
    constructor(pan?: string) {
        // Call super
        super("Token, HASH of Card PAN", "H", FieldFormat.V, { min: 16, max: 66 }, pan);
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