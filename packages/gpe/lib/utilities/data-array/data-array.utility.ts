import { ControlCharactersMap } from "../../maps/control-characters.map";

/**
 * Data array
 * @description Data array representing raw 
 * data.
 */
export abstract class DataArray {

    /**
     * From string
     * @description Generate data array from string
     * @param text 
     * @returns 
     */
    public static fromString(text: string): Uint8Array {
        // Init array of integers
        const array: number[] = [];

        // Iterate text
        for (let index = 0; index < (text || "").length; index++) {
            // Add code to array
            array.push(text.charCodeAt(index));
        }

        // Return data array
        return new Uint8Array(array);
    }

    /**
     * To string
     * @param array 
     */
    public static toString(array: Uint8Array): string {
        // Get array length
        const length: number = array.length;

        // Init index and result
        let index: number = 0;
        let result: string = "";

        // Iterate array
        while (index < length) {
            // Get code
            const code = array[index++];

            // Append character to result
            result += String.fromCharCode(code);
        }

        // Return result
        return result;
    }

    /**
     * To readable string
     * @param array 
     */
    public static toReadableString(array: Uint8Array): string {
        // Get array length
        const length: number = array.length;

        // Init index and result
        let index: number = 0;
        let result: string = "";

        // Iterate array
        while (index < length) {
            // Get code
            const code = array[index++];

            // Check if code is device control
            if ((code >= 0 && code <= 31) || code === 127) {
                // Map code to control character
                result += `<${ControlCharactersMap[code]}>`;
            }
            else {
                // Append character to result
                result += String.fromCharCode(code);
            }
        }

        // Return result
        return result;
    }

    /**
     * Concat
     * @description Creates new array from passed arrays
     * @param arrays 
     * @returns 
     */
    public static concat(arrays: Uint8Array[]): Uint8Array {
        // First get final length
        const length = arrays.reduce((prev, next) => prev + next.length, 0);

        // Init new array
        const result = new Uint8Array(length);

        // Iterate arrays
        for (let index = 0, offset = 0; index < arrays.length; index++, offset += arrays[index - 1].length) {
            // Add processed array to result
            result.set(arrays[index], offset);
        }

        // Return result
        return result;
    }

    /**
     * Split array
     * @param array 
     * @param splitter 
     * @returns 
     */
    public static split(array: Uint8Array, splitter: number): Uint8Array[] {
        // Init result
        const result: Uint8Array[] = [];

        // Init item
        let item: number[] = [];

        // Iterate array
        for (let index = 0; index < array.length; index++) {
            // Get value
            const value = array[index];

            // Check if value is splitter
            if (value === splitter) {
                // Add item to result
                item.length && result.push(new Uint8Array(item));

                // Reset item
                item = [];

                // Skip value
                continue;
            }

            // Add value to item
            item.push(value);
        }

        // Add item to result if there is some data
        item.length && result.push(new Uint8Array(item));

        // Return result
        return result;
    }
}