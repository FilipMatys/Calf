// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Transaction ID field
 * @description Fixed 12 numeric unique identifier of the financial transaction.
 */
export class TransactionIDField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Transaction ID", "n", FieldFormat.N, { min: 12, max: 12 });
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