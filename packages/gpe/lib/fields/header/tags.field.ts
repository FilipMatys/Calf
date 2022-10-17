// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";
import { Strings } from "../../utilities/strings/strings.utility";

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
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Initialize two bytes
        const flags: number[] = Array(16).fill(null).map((_) => 0);

        // Update flags based on passed arguments
        flags[0] = this._data.checkForCardHoldersSignature ? 1 : 0;
        flags[1] = this._data.ecrSupportsPartialApproval ? 1 : 0;
        flags[8] = this._data.ecrSupportsDeviceMessages ? 1 : 0;

        // Revert and parse as hex
        const value = Strings.padStart(parseInt(flags.reverse().join(""), 2).toString(16).toUpperCase(), 4, "0");

        // Assign parsed flags to value
        this._buffer = DataArray.fromString(value);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get hex from buffer
        const hex = DataArray.toString(this._buffer);

        // Convert hex to flags
        const flags = Strings.padStart(parseInt(hex, 16).toString(2), 16, "0").split("").reverse().map((x) => Number(x));

        // Now init data
        const data: ITagsFieldData = {};

        // Set data values
        data.checkForCardHoldersSignature = !!flags[0];
        data.ecrSupportsPartialApproval = !!flags[1];
        data.ecrSupportsDeviceMessages = !!flags[8];

        // Assign data
        this._data = data;
    }
}