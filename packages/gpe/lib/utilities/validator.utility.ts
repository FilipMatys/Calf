// Interfaces
import { IFieldLength } from "../interfaces/field-length.interface";

// Enums
import { FieldFormat } from "../enums/field-format.enum";

/**
 * Validator
 */
export abstract class Validator {

    /**
     * Check whether value is valid
     * @param format 
     * @param length
     * @param value 
     */
    public static isValid(format: FieldFormat, length: IFieldLength, value: string): boolean {
        // Check value length
        if (value.length < length.min || value.length > length.max) {
            return false;
        }

        // Validate based on 
        // format
        switch (format) {
            // Format A
            case FieldFormat.A:
                return this.isValidA(value);

            // Format N
            case FieldFormat.N:
                return this.isValidN(value);

            // Format AN
            case FieldFormat.AN:
                return this.isValidAN(value);

            // Format YN
            case FieldFormat.YN:
                return this.isValidYN(value);

            // Unknown format
            default:
                return false;
        }
    }

    /**
     * Is valid A
     * @param value 
     * @returns 
     */
    private static isValidA(value: string): boolean {
        return !!value.match(/^[a-z]+$/i);
    }

    /**
     * Is valid N
     * @param value
     * @returns 
     */
    private static isValidN(value: string): boolean {
        return !!value.match(/^[0-9]+$/);
    }

    /**
     * Is valid AN
     * @param value 
     * @returns 
     */
    private static isValidAN(value: string): boolean {
        return !!value.match(/^[0-9a-z]+$/i);
    }

    /**
     * Is valid V
     * @param value 
     * @returns 
     */
    private static isValidYN(value: string): boolean {
        // Check allowed values
        return value === "Y" || value === "N";
    }
}