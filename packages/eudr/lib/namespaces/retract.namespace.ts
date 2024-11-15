/**
 * Retract
 * @description Namespace for Retract
 */
export namespace Retract {

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Retract request data
         * @description Interface for Retract request data
         */
        export interface IRequestData {
            identifier?: string;
        }

        /**
         * Retract response data
         */
        export interface IResponseData {
            status?: any;
        }
    }
}