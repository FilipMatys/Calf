// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Tags field data
 * @description Interface for tags field data
 */
export interface ITagsFieldData {
    ecrSupportsDeviceMessages?: boolean;
    ecrSupportsPartialApproval?: boolean;
    checkForCardHoldersSignature?: boolean;
}

/**
 * Tags field
 * @description Field with tags of additional parameters
 */
export class TagsField extends HeaderField<ITagsFieldData> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Tags", FieldFormat.AN, { min: 4, max: 4 });
    }

    /**
     * Set value
     * @param data 
     */
    public setValue(data: ITagsFieldData): void {
        // Initialize two bytes
        const flags: number[] = Array(16).fill(null).map((_) => 0);

        // Update flags based on passed arguments
        flags[0] = data.checkForCardHoldersSignature ? 1 : 0;
        flags[1] = data.ecrSupportsPartialApproval ? 1 : 0;
        flags[8] = data.ecrSupportsDeviceMessages ? 1 : 0;

        // Revert and parse as hex
        const value = parseInt(flags.reverse().join(""), 2).toString(16).toUpperCase().padStart(4, "0");

        // Validate value
        this.validate(value);

        // Assign parsed flags to value
        this._value = value;
    }

    /**
     * Get value
     */
    public getValue(): ITagsFieldData {
        // Convert hex to flags
        const flags = parseInt(this._value, 16).toString(2).padStart(16, "0").split("").reverse().map((x) => Number(x));

        // Now init data
        const data: ITagsFieldData = {};

        // Set data values
        data.checkForCardHoldersSignature = !!flags[0];
        data.ecrSupportsPartialApproval = !!flags[1];
        data.ecrSupportsDeviceMessages = !!flags[8];

        // Return data
        return data;
    }
}