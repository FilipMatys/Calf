// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Transport data field
 * @description Field containing addition information/data related to transport. 
 */
export class TransportDataField extends DataField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Transport data", "D", FieldFormat.AN, { min: 0, max: 1000 });
    }

    /**
     * Set value
     * @param data
     */
    public setValue(data: string): void {
        // Validate value
        this.validate(data);

        // Assign data to value
        this._value = data;
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