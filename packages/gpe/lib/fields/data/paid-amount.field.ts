// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Paid amount field
 * @description Transaction amount defines the value of transaction.
 */
export class PaidAmountField extends DataField<number> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Paid amount", "B", FieldFormat.N, { min: 1, max: 18 });
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