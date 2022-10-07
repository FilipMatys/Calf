/**
 * Binary
 */
export abstract class Binary {

    /**
     * Shift left
     * @param value 
     * @param bits 
     */
    public static shiftLeft(value: number, length: number, bits: number): number {
        // Get value using the operator
        const subResult = value << bits;

        // Normalize result
        return parseInt(subResult.toString(2).slice(-length), 2);
    }

    /**
     * Shift right
     * @param value 
     * @param length 
     * @param bits 
     */
    public static shiftRight(value: number, length: number, bits: number): number {
        return (value >>> bits);
    }
}