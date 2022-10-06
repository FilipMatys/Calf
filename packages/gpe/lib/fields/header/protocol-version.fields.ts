// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Protocol version field
 * @description Information on protocol version.
 */
export class ProtocolVersionField extends HeaderField<string> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Protocol version", FieldFormat.N, { min: 2, max: 2 });
    }

    /**
     * Set value
     * @param version
     */
    public setValue(version: string): void {
        // Validate value
        this.validate(version);

        // Assign version to value
        this._value = version;
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