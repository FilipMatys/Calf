// Constants
import { Controls } from "../constants/controls.constant";

// Classes
import { DataField } from "./data-field.class";
import { Header } from "./header.class";

// Enums
import { ResponseCode } from "../enums/response-code.enum";

// Maps
import { DataFieldMap } from "../maps/data-field.map";

// Fields
import { ResponseCodeField } from "../fields/data/response-code.field";

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
     * Get data
     * @returns 
     */
    public getData(): DataField<any>[] {
        // Return data
        return this._data;
    }

    /**
     * Is confirmation message
     * @description Check whether message is confirmation
     * @returns 
     */
    public isConfirmationMessage(): boolean {
        return !(this._data || []).length && this._header.CRC16.getData() === 0xa5a5;
    }

    /**
     * Is activity message
     * @description Check whether message is activity message
     * @returns 
     */
    public isActivityMessage(): boolean {
        return !(this._data || []).length && this._header.CRC16.getData() === 0;
    }

    /**
     * Is error message
     * @returns 
     */
    public isErrorMessage(): boolean {
        // Check if message has data
        if (!this.hasData()) {
            // No response code
            return false;
        }

        // Now try to get response code field
        const field = this.getDataFieldByIdentifier<ResponseCodeField>("R");

        // Check if field was found
        if (!field) {
            // No response code
            return false;
        }

        // Check  field value
        return field.getData() >= ResponseCode.GeneralProcessingError;
    }

    /**
     * Has data
     * @description Checks whether message contains any data
     * @returns 
     */
    public hasData(): boolean {
        return !!(this._data || []).length;
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
     * Has valid data
     * @param requiredFields 
     * @returns 
     */
    public hasValidData(requiredFields: string[]): boolean {
        try {
            // Validate each field
            this._data.forEach((field) => field.validate());
        }
        catch (_) {
            // Return false
            return false;
        }

        // Get data fields identifiers
        const dataFieldsIdentifiers: string[] = this._data.map((field) => field.getIdentifier());

        // Try to find field that is not present
        return !requiredFields.some((required) => dataFieldsIdentifiers.indexOf(required) === -1);
    }

    /**
     * Is valid response
     * @description Check whether the response is valid
     * @param response 
     */
    public isValidResponse(response: Message): boolean {
        try {
            // First validate header and fields
            response.getHeader().protocolType.validate();
            response.getHeader().protocolVersion.validate();
            response.getHeader().terminalID.validate();
            response.getHeader().dateTime.validate();
            response.getHeader().tags.validate();
            response.getHeader().lengthOfData.validate();
            response.getHeader().CRC16.validate();
        }
        catch (e) {
            console.log(e);
            // Return false
            return false;
        }


        // Now compare header values
        if (!response.getHeader().terminalID.getData().trim()) {
            console.log("invalid terminal id");
            // Return false
            return false;
        }

        // Compare timestamp
        if (!this._header.dateTime.isEqual(response.getHeader().dateTime.getData())) {
            console.log("invalid dates");
            // Return false
            return false;
        }

        // Now compare protocol
        if (!this._header.protocolType.isEqual(response.getHeader().protocolType.getData())) {
            console.log("invalid protocol type");
            // Return false
            return false;
        }

        // Now compare protocol version
        if (!this._header.protocolVersion.isEqual(response.getHeader().protocolVersion.getData())) {
            console.log("invalid protocol version");
            // Return false
            return false;
        }

        // Return true
        return true;
    }

    /**
     * Is CRC16 valid
     * @description Check whether CRC16 is valid
     */
    public isCRC16Valid(): boolean {
        // Check for confirmation or activity message
        if (this.isConfirmationMessage() || this.isActivityMessage()) {
            // Return true
            return true;
        }

        // Init data queue
        const dataQueue: Uint8Array[] = [];

        // Iterate data
        this._data.forEach((field) => dataQueue.push(new Uint8Array(Controls.FS), DataArray.fromString(field.getIdentifier()), field.getBuffer()));

        // Now concat data into one buffer
        const dataBuffer = DataArray.concat(dataQueue);

        // Compare CRC16
        if (this._header.CRC16.getData() !== CRC16.calculate(dataBuffer)) {
            // Return false
            return false;
        }

        // Return true
        return true;
    }

    /**
     * To error message
     * @description Use message header to create new
     * error message
     * @param response
     * @param error 
     */
    public toErrorMessage(response: Message, error: ResponseCode): Message {
        // Clone message
        const message = this.clone();

        // Clear data
        message.clearData();

        // Set terminal id
        message._header.terminalID.setData(response.getHeader().terminalID.getData());

        // Append error response code
        message.appendDataField(new ResponseCodeField(error));

        // Finalize message
        message.finalize();

        // Return message
        return message;
    }

    /**
     * To confirmation message
     * @default Use message header and response to generate
     * new confirmation message
     * @param response 
     */
    public toConfirmationMessage(response: Message): Message {
        // Clone message
        const message = this.clone();

        // Clear data
        message.clearData();

        // Set terminal id
        message._header.terminalID.setData(response.getHeader().terminalID.getData());

        // Finalize message
        message.finalize();

        // Return message
        return message;
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