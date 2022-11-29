// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Reference number field
 * @description Alphanumeric information sent by ECR to identify each transaction
 * by adding identifier.
 */
export class ReferenceNumberField extends DataField<string> {

    // Set identifier
    public static Identifier = "N";

    /**
     * Constructor
     * @param number
     */
    constructor(number?: string) {
        // Call super
        super("Reference number (transaction identifier)", ReferenceNumberField.Identifier, FieldFormat.AN, { min: 1, max: 20 }, number);
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