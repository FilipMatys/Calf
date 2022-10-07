// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.class";

/**
 * Cashback amount field
 * @description Gives the amount which the customer wishes to withdraw.
 */
export class CashbackAmountField extends DataField<number> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Cashback amount", "b", FieldFormat.N, { min: 1, max: 18 });
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