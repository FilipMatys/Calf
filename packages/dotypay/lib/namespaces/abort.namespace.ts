// Namespaces
import { Common } from "./common.namespace";

/**
 * Abort
 * @description Namespace for Abort
 */
export namespace Abort {

    /**
     * Interfaces 
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Request data
         * @description Interface for Request data
         */
        export interface IRequestData extends Common.Interfaces.IMessageReference {
            AbortReason?: string;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse extends Common.Interfaces.IResponse { }

        /**
         * Request
         * @description Interface for Request
         */
        export interface IRequest extends Common.Interfaces.ISaleToPOIRequest {
            AbortRequest?: IAbortRequest;
        }

        /**
         * Abort request
         * @description Interface for Abort request
         */
        export interface IAbortRequest {
            MessageReference?: Common.Interfaces.IMessageReference;
            AbortReason?: string;
        }
    }
}