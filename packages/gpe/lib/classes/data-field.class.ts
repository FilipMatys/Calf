// Classes
import { Field } from "./field.class";

// Interfaces
import { IFieldLength } from "../interfaces/field-length.interface";

// Enums
import { FieldFormat } from "../enums/field-format.enum";

/**
 * Data field
 * @description Field for data part of the message
 */
export abstract class DataField<TData> extends Field<TData> {

    /**
     * Identifier
     * @description Field identifier
     */
    protected _identifier: string;

    public get identifier(): string { return this._identifier }

    /**
     * Constructor
     * @param name 
     * @param identifier 
     * @param format 
     * @param length 
     * @param data
     */
    constructor(name: string, identifier: string, format: FieldFormat, length: IFieldLength, data?: TData) {
        // Call super
        super(name, format, length);

        // Assign identifier
        this._identifier = identifier;

        // Check if data is defined
        if (typeof data !== "undefined") {
            // Assign data
            this.data = data;
        }
    }
}