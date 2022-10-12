// Interfaces
import { IFieldLength } from "../interfaces/field-length.interface";

// Enums
import { FieldFormat } from "../enums/field-format.enum";

/**
 * Invalid field value
 * @description Error raised when invalid field value
 * is being set.
 */
export class InvalidFieldValueError extends Error {

    // Additional info fields
    public field: string;
    public format: FieldFormat;
    public length: IFieldLength;
    public value: any;

    /**
     * Constructor
     * @param field 
     * @param format 
     * @param length 
     * @param value
     */
    constructor(field: string, format: FieldFormat, length: IFieldLength, value: any) {
        // Call super
        super(`Invalid field value for [${field}].`);

        // Set name
        this.name = `InvalidFieldValueError`;

        // Set additional information
        this.field = field;
        this.format = format;
        this.length = length;
        this.value = value;
    }
}