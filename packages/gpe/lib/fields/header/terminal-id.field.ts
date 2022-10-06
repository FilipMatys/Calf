// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Terminal ID field
 * @description Terminal logical identifier on which the 
 * transaction will be made.
 */
export class TerminalIDField extends HeaderField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Terminal ID", FieldFormat.AN, { min: 8, max: 8 });
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