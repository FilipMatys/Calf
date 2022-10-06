// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * CRC16 field
 * @description CRC16 of message data part.
 */
export class CRC16Field extends HeaderField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("CRC16", FieldFormat.AN, { min: 4, max: 4 });
    }

    public setValue(...args: any[]): void {
        throw new Error("Method not implemented.");
    }

    public getValue(): any {
        throw new Error("Method not implemented.");
    }
}