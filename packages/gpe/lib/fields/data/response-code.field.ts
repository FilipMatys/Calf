// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";
import { ResponseCode } from "../../enums/response-code.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Response code field
 * @description The field informs about processing result of transaction or message.
 */
export class ResponseCodeField extends DataField<ResponseCode> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Response Code", "R", FieldFormat.N, { min: 3, max: 3 });
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get normalized value
        const normalized = `${this._data || 0}`.padStart(3, "0");

        // Assign count to value
        this._buffer = DataArray.fromString(normalized);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get normalized value
        const normalized = DataArray.toString(this._buffer);

        // Get code
        const code = parseInt(normalized);

        // Assign code
        this._data = (code > 0 && code < 10) ? ResponseCode.Accepted : code;
    }
}