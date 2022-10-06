// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Indication of card product field
 */
export class IndicationOfCardProductField extends DataField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Indication of card product", "J", FieldFormat.V, { min: 2, max: 10 });
    }

    public setValue(...args: any[]): void {
        throw new Error("Method not implemented.");
    }

    public getValue(): any {
        throw new Error("Method not implemented.");
    }
}