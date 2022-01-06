import { ErrorCode } from "../enums/error-code.enum";
import { ErrorScope } from "../enums/error-scope.enum";

/**
 * Error
 * @description Error object
 */
export interface IError {

    /**
     * Scope
     * @description Error range
     */
    scope?: ErrorScope;

    /**
    * Field
    * @description Which parameter is affected by the error, unless it is a global error
    */
    field?: string;

    /**
    * Error code
    * @description Numeric designation of the error type
    */
    error_code?: ErrorCode;


    /**
    * Error name
    * @description Technical description of the error
    */
    error_name?: string;

    /**
    * Message
    * @description Localized message. Localization based on Accept-Language in the header. It is set to en-US by default.
    */
    message?: string;

    /**
    * Description
    * @description Technical description of the error
    */
    description?: string;
}