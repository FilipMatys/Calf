// Namespaces
import { Common } from "./common.namespace";
import { Payment } from "./payment.namespace";

/**
 * Transaction report
 * @description Namespace for Transaction report
 */
export namespace TransactionReport {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {


        /**
         * Search operator
         * @description Enum for Search operator
         */
        export enum SearchOperator {
            Equal = "EQ",
            LessThan = "LT",
            LessOrEqual = "LE",
            GreaterThan = "GT",
            GreaterOrEqual = "GE"
        }

        /**
         * Search target
         * @description Enum for Search target
         */
        export enum SearchTarget {
            CreationDate = "CREATION_DATE",
            Uuid = "UUID",
            MaskedPan = "MASKED_PAN",
            ServiceID = "SERVICE_ID"
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
            TransactionReportRequest?: ITransactionReportRequest;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse extends Common.Interfaces.ISaleToPOIResponse {
            TransactionReportResponse?: ITransactionReportResponse;
        }

        /**
         * Transaction report request
         * @description Interface for Transaction report request
         */
        export interface ITransactionReportRequest {
            BlockStart?: number;
            BlockStop?: number;
            DescendingOrder?: boolean;
            SearchCriterias?: ISearchCriterias;
            ProprietaryTags?: IRequestProprietaryTags;
        }

        /**
         * Transaction report response
         * @description Interface for Transaction report response
         */
        export interface ITransactionReportResponse {
            BlockStart?: number;
            BlockStop?: number;
            ReportFullSize?: number;
            TransactionReport?: Payment.Interfaces.IPaymentResponse[];
        }

        /**
         * Request proprietary tags
         * @description Interface for Request proprietary tags
         */
        export interface IRequestProprietaryTags {
            IncludePaymentReceipts?: boolean;
        }

        /**
         * Search criterias
         * @description Interface for Search criterias
         */
        export interface ISearchCriterias {
            SearchOR?: ISearchCriterias[] | ISearchCriteria[];
            SearchAND?: ISearchCriterias[] | ISearchCriteria[];
        }

        /**
         * Search criteria
         * @description Interface for Search criteria
         */
        export interface ISearchCriteria {
            Target?: Enums.SearchTarget;
            Operator?: Enums.SearchOperator;
            Value?: string;
        }
    }
}