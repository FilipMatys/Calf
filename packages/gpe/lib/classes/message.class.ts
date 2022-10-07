// Classes
import { DataField } from "./data-field.class";
import { Header } from "./header.class";

/**
 * Message
 * @description Protocol message
 */
export class Message {

    /**
     * Header
     * @description Message header
     */
    private _header: Header = new Header();

    /**
     * Data
     * @description Message data
     */
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

    /**
     * Finalize
     * @description Fills automated values
     * and validates all fields.
     */
    public finalize(): void {

    }

    /**
     * To buffer
     * @description Convert message to buffer
     * that can be sent through available connection.
     */
    public toBuffer(): Uint8Array {
        return new Uint8Array();
    }
}