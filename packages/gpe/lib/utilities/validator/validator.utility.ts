// Interfaces
import { IFieldLength } from "../../interfaces/field-length.interface";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Validator
 */
export abstract class Validator {

    /**
     * Check whether buffer is valid
     * @param format 
     * @param length
     * @param buffer 
     */
    public static isValid(format: FieldFormat, length: IFieldLength, buffer: Uint8Array): boolean {
        // Check value length
        if (buffer.length < length.min || buffer.length > length.max) {
            return false;
        }

        // Validate based on 
        // format
        switch (format) {
            // Format A
            case FieldFormat.A:
                return this.isValidA(buffer);

            // Format N
            case FieldFormat.N:
                return this.isValidN(buffer);

            // Format AN
            case FieldFormat.AN:
                return this.isValidAN(buffer);

            // Format YN
            case FieldFormat.YN:
                return this.isValidYN(buffer);

            // Variable formats
            case FieldFormat.V:
            case FieldFormat.VGS:
            case FieldFormat.VCR:
                return true;

            // Unknown format
            default:
                return false;
        }
    }

    /**
     * Is valid A
     * @param buffer 
     * @returns 
     */
    private static isValidA(buffer: Uint8Array): boolean {
        return buffer.every((x) => (x >= 65 && x <= 90) || (x >= 97 && x <= 122));
    }

    /**
     * Is valid N
     * @param buffer
     * @returns 
     */
    private static isValidN(buffer: Uint8Array): boolean {
        return buffer.every((x) => (x >= 48 && x <= 57));
    }

    /**
     * Is valid AN
     * @param buffer 
     * @returns 
     */
    private static isValidAN(buffer: Uint8Array): boolean {
        return buffer.every((x) => (x >= 65 && x <= 90) || (x >= 97 && x <= 122) || (x >= 48 && x <= 57));
    }

    /**
     * Is valid YN
     * @param buffer 
     * @returns 
     */
    private static isValidYN(buffer: Uint8Array): boolean {
        return buffer.every((x) => x === 89 || x === 78);
    }
}