// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";
import { TransactionType } from "../../enums/transaction-type.enum";

/**
 * Transaction type
 * @description Defines the type of transaction that is to be processed.
 */
export class TransactionTypeField extends DataField<TransactionType> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Transaction type", "T", FieldFormat.N, { min: 2, max: 2 });
    }

    /**
     * Set value
     * @param type 
     */
    public setValue(type: TransactionType): void {
        // Get normalized value
        const value = `${type}`.padStart(2, "0");

        // Validate value
        this.validate(value);

        // Assign value
        this._value = value;
    }

    /**
     * Get value
     */
    public getValue(): TransactionType {
        // Get code
        return parseInt(this._value);
    }
}