// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Client ID field
 * @description Field allows to add additional information related to
 * transaction.
 */
export class ClientIDField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Client ID", "n", FieldFormat.N, { min: 12, max: 10 });
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