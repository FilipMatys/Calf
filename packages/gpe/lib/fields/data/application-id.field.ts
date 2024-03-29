// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Application ID field
 * @description Field contains information of chip application with leading information.
 */
export class ApplicationIDField extends DataField<string> {

    // Set identifier
    public static Identifier = "a";

    /**
     * Constructor
     * @param identifier 
     */
    constructor(identifier?: string) {
        // Call super
        super("Application ID (AID)", ApplicationIDField.Identifier, FieldFormat.AN, { min: 12, max: 24 }, identifier);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get data array string
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