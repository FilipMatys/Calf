// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";

interface IExtraTextFieldItem {
    id?: string;
    text?: string;
}

/**
 * Extra text field data
 * @description Interface for extra text field data.
 */
export interface IExtraTextFieldData extends Array<IExtraTextFieldItem> { }

/**
 * Extra text field
 * @description Additional text information about response.
 */
export class ExtraTextField extends DataField<IExtraTextFieldData> {

    // Set identifier
    public static Identifier = "q";

    /**
     * Constructor
     * @param data
     */
    constructor(data?: IExtraTextFieldData) {
        // Call super
        super("Extra Text", ExtraTextField.Identifier, FieldFormat.V, { min: 1, max: 100 }, data);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Process data into single value
        const value = this._data.map((x) => `${x.id}:${x.text}`).join(";") + ";";

        // Get data array from the string
        this._buffer = DataArray.fromString(value);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get string from buffer
        const value = DataArray.toString(this._buffer);

        // Parse value into data
        this._data = value.split(";").map((x) => {
            // Init item
            const item: IExtraTextFieldItem = {};

            // Extract data
            const [id, text] = x.split(":");

            // Assign data
            item.id = id;
            item.text = text;

            // Return item
            return item;
        });
    }
}