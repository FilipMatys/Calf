// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Count field
 * @description Maximum number of transactions processed by operation.
 */
export class CountField extends DataField<number> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Count", "C", FieldFormat.N, { min: 3, max: 3 });
    }

    /**
     * Set value
     * @param count
     */
    public setValue(count: number): void {
        // Get value
        const sCount = `${count || 0}`.padStart(3, "0");

        // Validate value
        this.validate(sCount);

        // Assign count to value
        this._value = sCount;
    }

    /**
     * Get value
     * @returns 
     */
    public getValue(): number {
        // Get value
        return (parseInt(this._value) || 0);
    }
}