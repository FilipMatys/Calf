// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

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

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Extra Text", "q", FieldFormat.V, { min: 1, max: 100 });
    }

    /**
     * Set value
     * @param data 
     */
    public setValue(data: IExtraTextFieldData): void {
        // Process data
        const value = data.map((x) => `${x.id}:${x.text}`).join(";");

        // Validate
        this.validate(value);

        // Assign value
        this._value = value;
    }

    /**
     * Get value
     */
    public getValue(): IExtraTextFieldData {
        // Parse value
        const data = this._value.split(";").map((x) => {
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

        // Return data
        return data;
    }
}