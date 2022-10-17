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

    /**
     * Constructor
     * @param number 
     */
    constructor(number?: string) {
        // Call super
        super("Card number (PAN)", "P", FieldFormat.V, { min: 9, max: 19 }, number);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get masked
        const masked: string = this._data.replace(this._data.substring(6, 12), "******");

        // Get data array from hex string
        this._buffer = DataArray.fromString(masked);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get string from buffer
        this._data = DataArray.toString(this._buffer);
    }
}