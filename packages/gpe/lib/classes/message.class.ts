// Constants
import { Controls } from "../constants/controls.constant";

// Classes
import { DataField } from "./data-field.class";
import { Header } from "./header.class";

// Maps
import { DataFieldMap } from "../maps/data-field.map";

// Utilities
import { DataArray } from "../utilities/data-array/data-array.utility";
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
     * Append data
     * @param field 
     */
    public appendDataField(field: DataField<any>): void {
        // Add data field
        this._data.push(field);
    }

    /**
     * Clear data
     */
    public clearData(): void {
        // Clear data
        this._data = [];
    }

    /**
     * Get header
     * @returns 
     */
    public getHeader(): Header {
        // Return header
        return this._header;
    }

    /**
     * Get data field by identifier
     * @param identifier 
     */
    public getDataFieldByIdentifier<TField extends DataField<any>>(identifier: string): TField | undefined {
        // Iterate fields until the one we are looking for is found
        for (let index = 0; index < this._data.length; index++) {
            // Get field
            const field = this._data[index];

            // Check identifiers
            if (field.getIdentifier() === identifier) {
                // Return field
                return field as TField;
            }
        }

        // Return undefined
        return undefined;
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
        this._data.forEach((field) => dataQueue.push(new Uint8Array(Controls.FS), DataArray.fromString(field.getIdentifier()), field.getBuffer()));

        // Now concat data into one buffer
        const dataBuffer = DataArray.concat(dataQueue);

        // Assign length of the data into header field
        this._header.lengthOfData.setData(dataBuffer.length);

        // Check data length
        if (!this._data.length) {
            // Assign default value for empty message
            this._header.CRC16.setData(0xA5A5);
        }
        else {
            // Calculate crc16 from data
            this._header.CRC16.setData(CRC16.calculate(dataBuffer));
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
     * Clone
     * @description Clone message
     */
    public clone(): Message {
        // Create new message
        const message = new Message();

        // Set header values
        message.getHeader().protocolType.setData(this._header.protocolType.getData());
        message.getHeader().protocolVersion.setData(this._header.protocolVersion.getData());
        message.getHeader().terminalID.setData(this._header.terminalID.getData());
        message.getHeader().dateTime.setData(this._header.dateTime.getData());
        message.getHeader().tags.setData(this._header.tags.getData());
        message.getHeader().lengthOfData.setData(this._header.lengthOfData.getData());
        message.getHeader().CRC16.setData(this._header.CRC16.getData());

        // Iterate data
        this._data.forEach((field) => message.appendDataField(field));

        // Return message
        return message;
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
        queue.push(this._header.protocolType.getBuffer());
        queue.push(this._header.protocolVersion.getBuffer());
        queue.push(this._header.terminalID.getBuffer());
        queue.push(this._header.dateTime.getBuffer());
        queue.push(this._header.tags.getBuffer());
        queue.push(this._header.lengthOfData.getBuffer());
        queue.push(this._header.CRC16.getBuffer());

        // Add data fields
        this._data.forEach((field) => queue.push(new Uint8Array(Controls.FS), DataArray.fromString(field.getIdentifier()), field.getBuffer()));

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
        message.getHeader().protocolType.setBuffer(headerBuffer.slice(0, 2));
        message.getHeader().protocolVersion.setBuffer(headerBuffer.slice(2, 4));
        message.getHeader().terminalID.setBuffer(headerBuffer.slice(4, 12));
        message.getHeader().dateTime.setBuffer(headerBuffer.slice(12, 24));
        message.getHeader().tags.setBuffer(headerBuffer.slice(24, 28));
        message.getHeader().lengthOfData.setBuffer(headerBuffer.slice(28, 32));
        message.getHeader().CRC16.setBuffer(headerBuffer.slice(32, 36));

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
            field.setBuffer(data);

            // Add field to data array
            message.appendDataField(field);
        }

        // Return message
        return message;
    }
}