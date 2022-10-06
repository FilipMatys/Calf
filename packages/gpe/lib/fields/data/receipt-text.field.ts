// Classes
import { DataField } from "../../classes/data-field.class";

// Constants
import { Controls } from "../../constants/controls.constant";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Receipt text field
 * @description Field contains preformatted text for the printing
 * of the transaction receipt by the ECR. 
 */
export class ReceiptTextField extends DataField<string[]> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Text for printing of receipt", "t", FieldFormat.AN, { min: 1, max: 3072 });
    }

    /**
     * Set value
     * @param lines 
     */
    public setValue(lines: string[]): void {
        // Get line separator code
        const separator = String.fromCharCode(Controls.LF);

        // Assign value
        this._value = lines.join(separator) + separator;
    }

    /**
     * Get value
     */
    public getValue(): string[] {
        // Get line separator code
        const separator = String.fromCharCode(Controls.LF);

        // Return lines
        return this._value.split(separator).slice(0, -1);
    }
}