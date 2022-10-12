// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Paid amount field
 * @description Transaction amount defines the value of transaction.
 */
export class PaidAmountField extends DataField<number> {

    /**
     * Constructor
     * @param data
     */
    constructor(data?: number) {
        // Call super
        super("Paid amount", "B", FieldFormat.N, { min: 1, max: 18 }, data);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get normalized amount
        const normalized = `${parseInt(((this._data || 0) * 100) as any)}`;

        // Assign data to buffer
        this._buffer = DataArray.fromString(normalized);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get normalized from buffer
        const normalized = DataArray.toString(this._buffer);

        // Assign data
        this._data = (parseInt(normalized) || 0) / 100;
    }
}