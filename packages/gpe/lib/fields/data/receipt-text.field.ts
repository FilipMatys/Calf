// Classes
import { DataField } from "../../classes/data-field.class";

// Constants
import { Controls } from "../../constants/controls.constant";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

/**
 * Receipt text field
 * @description Field contains preformatted text for the printing
 * of the transaction receipt by the ECR. 
 */
export class ReceiptTextField extends DataField<string[]> {

    /**
     * Constructor
     * @param lines
     */
    constructor(lines?: string[]) {
        // Call super
        super("Text for printing of receipt", "t", FieldFormat.V, { min: 1, max: 3072 }, lines);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Init array of buffers
        const buffers: Uint8Array[] = [];

        // Iterate lines
        (this._data || []).forEach((x) => buffers.push(DataArray.fromString(x), new Uint8Array(Controls.LF)));

        // Assign to buffer
        this._buffer = DataArray.concat(buffers);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        throw new Error("Method not implemented.");
    }
}