// Interfaces
import { IFieldLength } from "../interfaces/field-length.interface";

// Enums
import { FieldFormat } from "../enums/field-format.enum";

// Errors
import { InvalidFieldValueError } from "../errors/invalid-field-value.error";

// Utilities
import { Validator } from "../utilities/validator/validator.utility";

/**
 * Field
 * @description Protocol message field
 */
export abstract class Field<TData> {

    protected _name: string;

    protected _format: FieldFormat;

    protected _length: IFieldLength;

    protected _value: string;

    /**
     * Value getter
     * @description Returns raw field value. Use getValue
     * to get parsed end user-friendly value.
     */
    public get value(): string { return this._value }

    /**
     * Value setter
     * @description Assigns raw value. Use setValue
     * when working with the field as an end user.
     */
    public set value(value: string) { this._value = value }

    /**
     * Constructor
     * @param name
     * @param format 
     * @param length 
     */
    constructor(name: string, format: FieldFormat, length: IFieldLength) {
        // Assign values
        this._name = name;
        this._format = format;
        this._length = length;
    }

    /**
     * Set value
     * @description Set value of the field.
     * @param data
     */
    public abstract setValue(data: TData): void;

    /**
     * Get value
     * @description Get parsed of value of the field.
     */
    public abstract getValue(): TData;

    /**
     * Validate
     * @description Validated given value. If value 
     * was not provided, validate current value instead.
     * @param value 
     */
    public validate(value?: string): void {
        // Validate value
        if (!Validator.isValid(this._format, this._length, value || this._value)) {
            // Throw invalid field value error
            throw new InvalidFieldValueError(this._name, this._format, this._length, value || this._value);
        }
    }
}