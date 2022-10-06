// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Code of region field
 * @description Field contains code defining the transport region. 
 */
export class CodeOfRegionField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Code of Region", "U", FieldFormat.AN, { min: 4, max: 4 });
    }

    /**
     * Set value
     * @param code
     */
    public setValue(code: string): void {
        // Validate
        this.validate(code);

        // Assign value
        this._value = code;
    }

    /**
     * Get value
     * @returns 
     */
    public getValue(): string {
        // Return value
        return this._value;
    }
}