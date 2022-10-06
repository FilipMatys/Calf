// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Protocol type
 * @description Information on protocol type.
 */
export class ProtocolTypeField extends HeaderField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Protocol type", FieldFormat.AN, { min: 2, max: 2 });
    }

    /**
     * Set value
     * @param type 
     */
    public setValue(type: string): void {
        // Validate value
        this.validate(type);

        // Assign type to value
        this._value = type;
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