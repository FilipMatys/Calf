// Constants
import { Controls } from "../constants/controls.constant";

// Classes
import { DataField } from "./data-field.class";
import { Header } from "./header.class";

// Maps
import { DataFieldMap } from "../maps/data-field.map";

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
        this._data.forEach((field) => queue.push(new Uint8Array(Controls.FS), DataArray.fromString(field.identifier), field.buffer));

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
    public static fromBuffer(buffer: Uint8Array): Message {
        // Get header buffer
        const headerBuffer = buffer.slice(1, 37);

        // Get data buffer
        const dataBuffer = buffer.slice(37, -1);

        // Init new message
        const message = new Message();

        // Fill message header
        message.header.protocolType.buffer = headerBuffer.slice(0, 2);
        message.header.protocolVersion.buffer = headerBuffer.slice(2, 4);
        message.header.terminalID.buffer = headerBuffer.slice(4, 12);
        message.header.dateTime.buffer = headerBuffer.slice(12, 24);
        message.header.tags.buffer = headerBuffer.slice(24, 28);
        message.header.lengthOfData.buffer = headerBuffer.slice(28, 32);
        message.header.CRC16.buffer = headerBuffer.slice(32, 36);

        // Now process data buffer, so split it into chunks
        const bufferChunks = DataArray.split(dataBuffer, Controls.FS[0]);

        // Now process buffer chunks
        for (let index = 0; index < bufferChunks.length; index++) {
            // Get chunk
            const chunk = bufferChunks[index];

            // Get identifier part
            const identifier = DataArray.toString(chunk.slice(0, 1));
            // Get data part
            const data = chunk.slice(1);

            // Check if identifier is present in the map
            if (!(identifier in DataFieldMap)) {
                // Skip chunk 
                // or make user function to call to process unknown chunks...?
                // or raise an error...?
                continue;
            }

            // Initialize data field
            const field = new DataFieldMap[identifier]();

            // Assign data part of the chunk
            field.buffer = data;

            // Add field to data array
            message.appendData(field);
        }

        // Return message
        return message;
    }
}