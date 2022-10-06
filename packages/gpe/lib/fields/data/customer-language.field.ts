// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Customer language field
 * @description Optional field designed for Unattended POS.
 */
export class CustomerLanguageField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Customer Language", "A", FieldFormat.A, { min: 2, max: 2 });
    }

    /**
     * Set value
     * @param language
     */
    public setValue(language: string): void {
        // Validate value
        this.validate(language);

        // Assign language to value
        this._value = language;
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