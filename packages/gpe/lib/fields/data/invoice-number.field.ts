// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Invoice number field
 * @description Allows to add additional identifier related to each 
 * transaction, which will appear in a transaction report.
 */
export class InvoiceNumberField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Invoice number", "S", FieldFormat.N, { min: 1, max: 10 });
    }

    /**
     * Set value
     * @param identifier
     */
    public setValue(identifier: string): void {
        // Validate value
        this.validate(identifier);

        // Assign identifier to value
        this._value = identifier;
    }

    /**
     * Get value
     * @returns 
     */
    public getValue(): string {
        // Get value
        return this._value;
    }
}