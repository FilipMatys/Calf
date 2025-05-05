// Namespaces
import { Common } from "./common.namespace";

/**
 * Reconciliation
 * @description Namespace for Reconciliation
 */
export namespace Reconciliation {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Reconciliation type
         * @description Enum for Reconciliation type
         */
        export enum ReconciliationType {
            AcquirerSynchronisation = "AcquirerSynchronisation",
            SaleReconciliation = "SaleReconciliation",
        }

        /**
         * Transaction type
         * @description Enum for Transaction type
         */
        export enum TransactionType {
            Credit = "Credit",
            Debit = "Debit"
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
            ReconciliationRequest?: IReconciliationRequest;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse extends Common.Interfaces.ISaleToPOIResponse {
            ReconciliationResponse?: IReconciliationResponse;
        }

        /**
         * Reconciliation request
         * @description Interface for Reconciliation request
         */
        export interface IReconciliationRequest {
            ReconciliationType?: Enums.ReconciliationType;
            ProprietaryTags?: Common.Interfaces.IProprietaryTags;
        }

        /**
         * Reconciliation response
         * @description Interface for Reconciliation response
         */
        export interface IReconciliationResponse {
            POIReconciliationID?: number;
            ReconciliationType?: Enums.ReconciliationType;
            ProprietaryTags?: Common.Interfaces.IProprietaryTags;
            TransactionTotals?: ITransactionTotal[];
            Response?: Common.Interfaces.IResponse;
        }

        /**
         * Transaction total
         * @description Interface for Transaction total
         */
        export interface ITransactionTotal {
            PaymentCurrency?: string;
            PaymentTotals?: IPaymentTotal[];
        }

        /**
         * Payment total
         * @description Interface for Payment total
         */
        export interface IPaymentTotal {
            TransactionAmount?: number;
            TransactionCount?: number;
            TransactionType?: Enums.TransactionType;
        }
    }
}