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
        for (let index = 0, offset = 0; index < arrays.length; index++, offset = arrays[index - 1].length) {
            // Add processed array to result
            result.set(arrays[index], offset);
        }

        // Return result
        return result;
    }
}