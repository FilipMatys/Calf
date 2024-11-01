// Enums
import { OperatorType } from "../enums/operator-type.enum";

// Interfaces
import { IStatement } from "../interfaces/statement.interface";

/**
 * Submit
 * @description Namespace for Submit
 */
export namespace Submit {

    /**
     * Submit request data
     * @description Interface for Submit request data
     */
    export interface IRequestData {
        operatorType?: OperatorType;
        statement?: IStatement;
    }

    /**
     * Submit response data
     * @description Interface for Submit response data
     */
    export interface IResponseData {
        identifier?: string;
    }
}