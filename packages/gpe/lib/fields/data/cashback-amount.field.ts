// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

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
     * Set value
     * @param amount
     */
    public setValue(amount: number): void {
        // Get value
        const sAmount = `${parseInt(((amount || 0) * 100) as any)}`;

        // Validate value
        this.validate(sAmount);

        // Assign amount to value
        this._value = sAmount;
    }

    /**
     * Get value
     * @returns 
     */
    public getValue(): number {
        // Get value
        return (parseInt(this._value) || 0) / 100;
    }
}