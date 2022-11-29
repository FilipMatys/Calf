// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Transport data field
 * @description Field containing addition information/data related to transport. 
 */
export class TransportDataField extends DataField<string> {

    // Set identifier
    public static Identifier = "D";

    /**
     * Constructor
     * @param data
     */
    constructor(data?: string) {
        // Call super
        super("Transport data", TransportDataField.Identifier, FieldFormat.AN, { min: 0, max: 1000 }, data);
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