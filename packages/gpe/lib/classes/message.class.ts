// Constants
import { Controls } from "../constants/controls.constant";

// Classes
import { DataField } from "./data-field.class";
import { Header } from "./header.class";

// Utilities
import { DataArray } from "../utilities/data-array/data-array.class";
import { CRC16 } from "../utilities/crc/crc-16.utility";

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
     * @description Fill automated values
     * and validate all fields.
     */
    public finalize(): void {
        // Validate each field
        this._data.forEach((field) => field.validate());

        // Init data queue
        const dataQueue: Uint8Array[] = [];

        // Iterate data
        this._data.forEach((field) => dataQueue.push(new Uint8Array(Controls.FS), field.buffer));

        // Now concat data into one buffer
        const dataBuffer = DataArray.concat(dataQueue);

        // Assign length of the data into header field
        this._header.lengthOfData.data = dataBuffer.length;

        // Check data length
        if (!this._data.length) {
            // Assign default value for empty message
            this._header.CRC16.data = 0xA5A5;
        }
        else {
            // Calculate crc16 from data
            this._header.CRC16.data = CRC16.calculate(dataBuffer);
        }

        // Now validate header fields
        this._header.protocolType.validate();
        this._header.protocolVersion.validate();
        this._header.terminalID.validate();
        this._header.dateTime.validate();
        this._header.tags.validate();
        this._header.lengthOfData.validate();
        this._header.CRC16.validate();
    }

    /**
     * To buffer
     * @description Convert message to buffer
     * that can be sent through available connection.
     */
    public toBuffer(): Uint8Array {
        // Init queue
        const queue: Uint8Array[] = [new Uint8Array(Controls.STX)];

        // Add header fields
        queue.push(this._header.protocolType.buffer);
        queue.push(this._header.protocolVersion.buffer);
        queue.push(this._header.terminalID.buffer);
        queue.push(this._header.dateTime.buffer);
        queue.push(this._header.tags.buffer);
        queue.push(this._header.lengthOfData.buffer);
        queue.push(this._header.CRC16.buffer);

        // Add data fields
        this._data.forEach((field) => queue.push(new Uint8Array(Controls.FS), field.buffer));

        // Close queue
        queue.push(new Uint8Array(Controls.ETX));

        // Return final array
        return DataArray.concat(queue);
    }

    /**
     * From buffer
     * @description Create message from buffer 
     * @param buffer 
     */
    public static fromBuffer(buffer: Uint8Array): void {
        // TODO
    }
}