// Namespaces
import { Common } from "./common.namespace";

/**
 * Reversal
 * @description Namespace for Reversal
 */
export namespace Reversal {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Reversal reason
         * @description Enum for Reversal reason
         */
        export enum ReversalReason {
            CustCancel = "CustCancel",
            MerchantCancel = "MerchantCancel",
            Malfunction = "Malfunction",
            Unable2Compl = "Unable2Compl"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Request
         * @description Interface for Request
         */
        export interface IRequest extends Common.Interfaces.ISaleToPOIRequest {
            ReversalRequest?: IReversalRequest;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse extends Common.Interfaces.ISaleToPOIResponse {
            ReversalResponse?: IReversalResponse;
        }

        /**
         * Reversal request
         * @description Interface for Reversal request
         */
        export interface IReversalRequest {
            OriginalPOITransaction?: Common.Interfaces.IPOIData;
        }

        /**
         * Reversal response
         * @description Interface for Reversal response
         */
        export interface IReversalResponse {
            POIData?: Common.Interfaces.IPOIData;
            Response?: Common.Interfaces.IResponse;
        }
    }
}