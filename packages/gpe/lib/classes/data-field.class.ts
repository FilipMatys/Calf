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

    /**
     * Constructor
     * @param name 
     * @param identifier 
     * @param format 
     * @param length 
     */
    constructor(name: string, identifier: string, format: FieldFormat, length: IFieldLength) {
        // Call super
        super(name, format, length);

        // Assign identifier
        this._identifier = identifier;
    }
}