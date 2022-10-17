// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";
import { PrintedInformation } from "../../enums/printed-information.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Id of printed information field
 * @description 
 */
export class IdOfPrintedInformationField extends DataField<PrintedInformation> {

    /**
     * Constructor
     * @param identifier
     */
    constructor(identifier?: PrintedInformation) {
        // Call super
        super("Id of printed information", "K", FieldFormat.N, { min: 2, max: 2 }, identifier);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get normalized value
        const normalized = `${this._data || 0}`.padStart(2, "0");

        // Get data array from normalized string
        this._buffer = DataArray.fromString(normalized);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get normalized string from buffer
        const normalized = DataArray.toString(this._buffer);

        // Assign data
        this._data = parseInt(normalized);
    }
}