// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Authorization code
 */
export class AuthorizationCodeField extends DataField<any> {

    // Set identifier
    public static Identifier = "F";

    /**
     * Constructor
     * @param code 
     */
    constructor(code?: string) {
        // Call super
        super("Authorization code", AuthorizationCodeField.Identifier, FieldFormat.V, { min: 6, max: 8 }, code);
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