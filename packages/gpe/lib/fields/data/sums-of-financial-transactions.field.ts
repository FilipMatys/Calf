// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Sums of financial transactions field
 * @description Field is a summary of transactions made since the last
 * transaction close day.
 */
export class SumsOfFinancialTransactionsField extends DataField<any> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Sums of financial transactions", "L", FieldFormat.V, { min: 75, max: 75 });
    }

    public setValue(...args: any[]): void {
        throw new Error("Method not implemented.");
    }

    public getValue(): any {
        throw new Error("Method not implemented.");
    }
}