// Classes
import { DataField } from "./data-field.class";
import { Header } from "./header.class";

/**
 * Message
 * @description Protocol message
 */
export class Message {

    private _header: Header = new Header();

    private _data: DataField<any>[] = [];

    /**
     * Header
     * @description Message header
     */
    public get header(): Header { return this._header }

    /**
     * Append data
     * @param field 
     */
    public appendData(field: DataField<any>): void {
        // Add data field
        this._data.push(field);
    }
}