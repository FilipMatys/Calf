// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Multi-ID field
 * @description List of Multi-ID names.
 */
export class MultiIDField extends DataField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Multi-ID", "M", FieldFormat.VGS, { min: 4, max: 480 });
    }

    public setValue(...args: any[]): void {
        throw new Error("Method not implemented.");
    }

    public getValue(): any {
        throw new Error("Method not implemented.");
    }
}