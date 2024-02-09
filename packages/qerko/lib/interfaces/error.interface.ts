// Enums
import { ErrorCode } from "../enums/error-code.enum";

/**
 * Error
 * @description Interface for Error
 */
export interface IError {
    message?: string;
    code?: ErrorCode;
}