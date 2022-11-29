// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Indication of card product field
 */
export class IndicationOfCardProductField extends DataField<string> {

    // Set identifier
    public static Identifier = "J";

    /**
     * Constructor
     * @param identification
     */
    constructor(identification?: string) {
        // Call super
        super("Indication of card product", IndicationOfCardProductField.Identifier, FieldFormat.V, { min: 2, max: 10 }, identification);
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