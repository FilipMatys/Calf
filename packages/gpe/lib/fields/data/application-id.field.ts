// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Application ID field
 * @description Field contains information of chip application with leading information.
 */
export class ApplicationIDField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Application ID (AID)", "a", FieldFormat.AN, { min: 12, max: 24 });
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