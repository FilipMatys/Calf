/**
 * Strings utility
 */
export abstract class Strings {

    /**
     * Pad start
     * @param value 
     * @param targetLength 
     * @param padString 
     */
    public static padStart(value: string, targetLength: number, padString?: string): string {
        // Normalize values
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');

        // Check length
        if (value.length > targetLength) {
            return value;
        }

        // Set target length
        targetLength = targetLength - value.length;

        // Create pad string from length
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
        }

        // Append padding to original value
        return padString.slice(0, targetLength) + value;
    }
}