// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Sequence number
 * @description Fix 9 numeric unique identifier of each transaction.
 */
export class SequenceNumberField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Sequence number", "i", FieldFormat.N, { min: 9, max: 9 });
    }

    /**
     * Set value
     * @param sequence 
     */
    public setValue(sequence: string): void {
        // Validate sequence
        this.validate(sequence);

        // Assign value
        this._value = sequence;
    }

    /**
     * Get value
     */
    public getValue(): string {
        // Get sequence
        return this._value;
    }
}