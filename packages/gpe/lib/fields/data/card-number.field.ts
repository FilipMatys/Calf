// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Card number field
 * @description Masked card number.
 * 
 */
export class CardNumberField extends DataField<string> {

    // Set identifier
    public static Identifier = "P";

    /**
     * Constructor
     * @param number 
     */
    constructor(number?: string) {
        // Call super
        super("Card number (PAN)", CardNumberField.Identifier, FieldFormat.V, { min: 9, max: 19 }, number);
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