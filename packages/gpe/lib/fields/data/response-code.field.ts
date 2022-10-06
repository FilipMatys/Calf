// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";
import { ResponseCode } from "../../enums/response-code.enum";

/**
 * Response code field
 * @description The field informs about processing result of transaction or message.
 */
export class ResponseCodeField extends DataField<ResponseCode> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Response Code", "R", FieldFormat.N, { min: 3, max: 3 });
    }

    /**
     * Set value
     * @param code 
     */
    public setValue(code: ResponseCode): void {
        // Get normalized value
        const value = `${code}`.padStart(3, "0");

        // Validate value
        this.validate(value);

        // Assign value
        this._value = value;
    }

    /**
     * Get value
     */
    public getValue(): ResponseCode {
        // Get code
        const code = parseInt(this._value);

        // Return code
        return (code > 0 && code < 10) ? ResponseCode.Accepted : code;
    }
}