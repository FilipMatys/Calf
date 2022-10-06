// Classes
import { DataField } from "../../classes/data-field.class";

// Constants
import { Controls } from "../../constants/controls.constant";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Identification numbers field data
 * @description Interface for identification numbers field data
 */
export interface IIdentificationNumbersFieldData {
    variableSymbol?: string;
    specificSymbol?: string;
    constantSymbol?: string;
}

/**
 * Identification numbers field
 * @description Additional numbers for identification of the transaction.
 */
export class IdentificationNumbersField extends DataField<IIdentificationNumbersFieldData> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Identification numbers", "Z", FieldFormat.VGS, { min: 3, max: 27 });
    }

    /**
     * Set value
     * @param data 
     */
    public setValue(data: IIdentificationNumbersFieldData): void {
        // Get group separator code
        const separator = String.fromCharCode(Controls.GS);

        // Assign value
        this._value = `${separator}${data.variableSymbol || ""}${separator}${data.specificSymbol || ""}${separator}${data.constantSymbol || ""}`;
    }

    public getValue(): IIdentificationNumbersFieldData {
        throw new Error("Method not implemented.");
    }
}