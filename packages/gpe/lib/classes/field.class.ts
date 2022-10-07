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

    protected _data: TData;

    protected _buffer: Uint8Array;

    /**
     * Buffer setter
     * @description Sets field buffer
     */
    public set buffer(buffer: Uint8Array) {
        // Assign buffer
        this._buffer = buffer;

        // Update data from buffer
        this.updateDataFromBuffer();
    }

    /**
     * Buffer getter
     * @description Gets field buffer
     */
    public get buffer(): Uint8Array { return this._buffer; }

    /**
     * Data setter
     * @description Sets field data
     */
    public set data(data: TData) {
        // Assign data
        this._data = data;

        // Update buffer from data
        this.updateBufferFromData();
    }

    /**
     * Data getter
     * @description Gets field data
     */
    public get data(): TData { return this._data; }

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
     * Validate
     * @description Validated given value. If value 
     * was not provided, validate current value instead.
     * @param buffer 
     */
    public validate(buffer?: Uint8Array): void {
        // Validate value
        if (!Validator.isValid(this._format, this._length, buffer || this._buffer)) {
            // Throw invalid field value error
            throw new InvalidFieldValueError(this._name, this._format, this._length, buffer || this._buffer);
        }
    }

    /**
     * Update buffer from data
     * @description Update current buffer value from
     * data
     */
    protected abstract updateBufferFromData(): void;

    /**
     * Update data from buffer
     * @description Update current data value from
     * buffer
     */
    protected abstract updateDataFromBuffer(): void;
}