// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";
import { PrintedInformation } from "../../enums/printed-information.enum";

/**
 * Id of printed information field
 * @description 
 */
export class IdOfPrintedInformationField extends DataField<number> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Id of printed information", "K", FieldFormat.N, { min: 2, max: 2 });
    }

    /**
     * Set value
     * @param information 
     */
    public setValue(information: PrintedInformation): void {
        // Get value
        const value = `${information}`.padStart(2, "0");

        // Validate value
        this.validate(value);

        // Assign value
        this._value = value;
    }

    /**
     * Get value
     * @returns 
     */
    public getValue(): PrintedInformation {
        // Parse value
        return parseInt(this._value);
    }
}