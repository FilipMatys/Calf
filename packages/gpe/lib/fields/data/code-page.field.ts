// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Code page field
 * @description This code page is used for receipt printing.
 */
export class CodePageField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("CodePage", "f", FieldFormat.AN, { min: 10, max: 10 });
    }

    /**
     * Set value
     * @param code 
     */
    public setValue(code: string): void {
        // Validate code
        this.validate(code);

        // Assign value
        this._value = code;
    }

    /**
     * Get value
     */
    public getValue(): string {
        // Get code
        return this._value;
    }
}