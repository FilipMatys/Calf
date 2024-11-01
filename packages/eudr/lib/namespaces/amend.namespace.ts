// Interfaces
import { IStatement } from "../interfaces/statement.interface";

/**
 * Amend
 * @description Namespace for Amend
 */
export namespace Amend {

    /**
     * Amend request data
     * @description Interface for Amend request data
     */
    export interface IRequestData {
        identifier?: string;
        statement?: IStatement;
    }

    /**
     * Amend response data
     * @description Interface for Amend response data
     */
    export interface IResponseData {
    }
}