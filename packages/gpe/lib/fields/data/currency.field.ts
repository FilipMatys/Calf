// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { Currency } from "../../enums/currency.enum";
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";
import { Strings } from "../../utilities/strings/strings.utility";

/**
 * Currency field
 * @description Currency of a transaction.
 */
export class CurrencyField extends DataField<Currency> {

    /**
     * Constructor
     * @param currency
     */
    constructor(currency?: Currency) {
        // Call super
        super("Currency", "I", FieldFormat.N, { min: 3, max: 3 }, currency);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get normalized value
        const normalized = Strings.padStart(`${this._data || 0}`, 3, "0");

        // Assign count to value
        this._buffer = DataArray.fromString(normalized);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get normalized value
        const normalized = DataArray.toString(this._buffer);

        // Assign data
        this._data = (parseInt(normalized) || 0);
    }
}