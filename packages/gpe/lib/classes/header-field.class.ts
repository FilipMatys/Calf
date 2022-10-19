// Classes
import { Field } from "./field.class";

/**
 * Header field
 * @description Field for message header
 */
export abstract class HeaderField<TData> extends Field<TData> {

    /**
     * Is equal
     * @description Compares value to the field value
     * @param value 
     */
    public abstract isEqual(value: TData): boolean;
}