// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { Currency } from "../../enums/currency.enum";
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Currency field
 * @description Currency of a transaction.
 */
export class CurrencyField extends DataField<Currency> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Currency", "I", FieldFormat.N, { min: 3, max: 3 });
    }

    /**
     * Set value
     * @param code 
     */
    public setValue(code: Currency): void {
        // Get value
        const value = `${code}`;

        // Validate value
        this.validate(value);

        // Assign value
        this._value = `${code}`;
    }

    /**
     * Get value
     * @returns 
     */
    public getValue(): Currency {
        // Parse value
        return parseInt(this._value);
    }
}