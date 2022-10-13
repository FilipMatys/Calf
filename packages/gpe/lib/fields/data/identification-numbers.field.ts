// Classes
import { DataField } from "../../classes/data-field.class";

// Constants
import { Controls } from "../../constants/controls.constant";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

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
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Assign buffer
        this._buffer = DataArray.concat([
            new Uint8Array(Controls.GS),
            DataArray.fromString(this._data.variableSymbol || ""),
            new Uint8Array(Controls.GS),
            DataArray.fromString(this._data.specificSymbol || ""),
            new Uint8Array(Controls.GS),
            DataArray.fromString(this._data.constantSymbol || "")
        ]);
    }

    public updateDataFromBuffer(): IIdentificationNumbersFieldData {
        throw new Error("Method not implemented.");
    }
}