// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

export class CardNumberField extends DataField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Card number (PAN)", "P", FieldFormat.V, { min: 9, max: 19 });
    }

    public setValue(...args: any[]): void {
        throw new Error("Method not implemented.");
    }

    public getValue(): any {
        throw new Error("Method not implemented.");
    }
}