// Namespaces
import { Common } from "./common.namespace";

/**
 * Transaction status
 * @description Namespace for Transaction status
 */
export namespace TransactionStatus {

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Request data
         * @description Interface for Request data
         */
        export interface IRequestData {
            MessageCategory?: Common.Enums.MessageCategory;
            SaleID?: string;
            ServiceID?: string;
        }

        /**
         * Request
         * @description Interface for Request
         */
        export interface IRequest extends Common.Interfaces.ISaleToPOIRequest {
            TransactionStatusRequest?: ITransactionStatusRequest;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse<TBody> extends Common.Interfaces.ISaleToPOIResponse {
            TransactionStatusResponse?: ITransactionStatusResponse<TBody>;
        }

        /**
         * Transaction status response
         * @description Interface for Transaction status response
         */
        export interface ITransactionStatusResponse<TBody> {
            ResultCode?: Common.Enums.ResultCode;
            Response?: Common.Interfaces.IResponse;
            RepeatedMessageResponse?: IRepeatedMessageResponse<TBody>;
        }

        /**
         * Transaction status request
         * @description Interface for Transaction status request
         */
        export interface ITransactionStatusRequest {
            MessageReference?: Common.Interfaces.IMessageReference;
        }

        /**
         * Repeated message response
         * @description Interface for Repeated message response
         */
        export interface IRepeatedMessageResponse<TBody> extends Common.Interfaces.ISaleToPOIResponse {
            RepeatedResponseMessageBody?: TBody;
        }
    }
}