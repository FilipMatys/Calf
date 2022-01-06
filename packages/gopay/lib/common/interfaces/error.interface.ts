import { ErrorCode } from "../enums/error-code.enum";
import { ErrorScope } from "../enums/error-scope.enum";

/**
 * Error
 * @description Error object
 */
export interface IError {

    /**
     * Scope
     * @description 
     */
    scope?: ErrorScope;

    /**
    * Field
    * @description 
    */
    field?: string;

    /**
    * Error code
    * @description 
    */
    error_code?: ErrorCode;


    /**
    * Error name
    * @description 
    */
    error_name?: string;

    /**
    * Message
    * @description 
    */
    message?: string;

    /**
    * Description
    * @description 
    */
    description?: string;
}