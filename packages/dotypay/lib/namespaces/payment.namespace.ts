// Namespaces
import { Common } from "./common.namespace";

/**
 * Payment
 * @description Namespace for Payment
 */
export namespace Payment {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Payment type
         * @description Enum for Payment type
         */
        export enum PaymentType {
            Normal = "Normal",
            Refund = "Refund",
            OneTimeReservation = "OneTimeReservation",
            Completion = "Completion"
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
            PaymentRequest?: IPaymentRequest;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse extends Common.Interfaces.ISaleToPOIResponse {
            PaymentResponse?: IPaymentResponse;
        }

        /**
         * Request
         * @description Interface for Request
         */
        export interface IPaymentRequest {
            PaymentData?: IPaymentData;
            PaymentTransaction?: IPaymentTransaction;
            SaleData?: ISaleData;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IPaymentResponse {
            PaymentData?: IPaymentData;
            PaymentResult?: IPaymentResult;
            POIData?: Common.Interfaces.IPOIData;
            Response?: Common.Interfaces.IResponse;
        }

        /**
         * Amount request
         * @description Interface for Amount request
         */
        export interface IAmountsRequest {
            Currency?: string;
            RequestedAmount?: number;
        }

        /**
         * Amount response
         * @description Interface for Amount response
         */
        export interface IAmountsResponse {
            AuthorizedAmount?: number;
            TipAmount?: number;
            Currency?: string;
        }

        /**
         * Payment result
         * @description Interface for Payment result
         */
        export interface IPaymentResult {
            AmountsResp?: IAmountsResponse;
            ProprietaryTags?: Common.Interfaces.IProprietaryTags;
            PaymentInstrumentData?: Common.Interfaces.IPaymentInstrumentData;
        }

        /**
         * Payment data
         * @description Interface for Payment data
         */
        export interface IPaymentData {
            PaymentType?: Enums.PaymentType;
        }

        /**
         * Payment transaction
         * @description Interface for Payment transaction
         */
        export interface IPaymentTransaction {
            AmountsReq?: IAmountsRequest;
            ProprietaryTags?: Common.Interfaces.IProprietaryTags;
            OriginalPOITransaction?: Common.Interfaces.IPOIData;
        }

        /**
         * Sale data
         * @description Interface for Sale data
         */
        export interface ISaleData {
            SaleTransactionID?: Common.Interfaces.ITransactionID;
        }
    }
}