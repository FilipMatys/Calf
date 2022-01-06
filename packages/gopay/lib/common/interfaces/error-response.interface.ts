import { IError } from "./error.interface";

/**
 * Error response
 * @description Error response object
 */
export interface IErrorResponse {

    /**
     * Errors
     * @description Array of errors
     */
    errors: IError[];

    /**
    * Date issued
    * @description Date issued
    */
    date_issued: string;
}