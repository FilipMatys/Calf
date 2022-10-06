// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Token, HASH of Card PAN
 * @description Field containing hash of enciphered PAN (SHA-256).
 */
export class CardPANField extends DataField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Token, HASH of Card PAN", "H", FieldFormat.V, { min: 16, max: 66 });
    }

    public setValue(...args: any[]): void {
        throw new Error("Method not implemented.");
    }

    public getValue(): any {
        throw new Error("Method not implemented.");
    }
}