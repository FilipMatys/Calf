// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Authorization code
 */
export class AuthorizationCodeField extends DataField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Authorization code", "F", FieldFormat.V, { min: 8, max: 8 });
    }

    public setValue(...args: any[]): void {
        throw new Error("Method not implemented.");
    }

    public getValue(): any {
        throw new Error("Method not implemented.");
    }
}