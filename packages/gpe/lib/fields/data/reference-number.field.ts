// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Reference number field
 * @description Alphanumeric information sent by ECR to identify each transaction
 * by adding identifier.
 */
export class ReferenceNumberField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Reference number (transaction identifier)", "N", FieldFormat.AN, { min: 1, max: 20 });
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