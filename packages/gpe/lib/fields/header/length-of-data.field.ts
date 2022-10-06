// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Length of data field
 * @description Length of message data part.
 */
export class LengthOfDataField extends HeaderField<number> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Length of data", FieldFormat.AN, { min: 4, max: 4 });
    }

    /**
     * Set value
     * @param length 
     */
    public setValue(length: number): void {
        // Parse as hex
        const value = length.toString(16).padStart(4, "0");

        // Validate
        this.validate(value);

        // Assign value
        this._value = value;
    }

    /**
     * Get value
     * @returns 
     */
    public getValue(): number {
        // Get value
        return parseInt(this._value, 16);
    }
}