// Namespaces
import { Common } from "./common.namespace";

/**
 * Diagnosis
 * @description Namespace for Diagnosis
 */
export namespace Diagnosis {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Global status
         * @description Enum for Global status
         */
        export enum GlobalStatus {
            OK = "OK",
            Busy = "Busy",
            Maintenance = "Maintenance",
            Unreachable = "Unreachable"
        }

        /**
         * Printer status
         * @description Enum for Printer status
         */
        export enum PrinterStatus {
            OK = "OK",
            PaperLow = "PaperLow",
            NoPaper = "NoPaper",
            PaperJam = "PaperJam",
            OutOfOrder = "OutOfOrder"
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
            DiagnosisRequest?: IDiagnosisRequest;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse extends Common.Interfaces.ISaleToPOIResponse {
            DiagnosisResponse?: IDiagnosisResponse;
        }

        /**
         * Diagnosis request
         * @description Interface for Diagnosis request
         */
        export interface IDiagnosisRequest {
            HostDiagnosisFlag?: boolean;
        }

        /**
         * Diagnosis response
         * @description Interface for Diagnosis response
         */
        export interface IDiagnosisResponse {
            POIStatus?: IPOIStatus;
            HostStatus?: IHostStatus;
        }

        /**
         * POI status
         * @description Interface for POI status
         */
        export interface IPOIStatus {
            CommunicationOKFlag?: boolean;
            GlobalStatus?: Enums.GlobalStatus;
            PrinterStatusType?: Enums.PrinterStatus;
            SecurityOKFlag?: boolean;
        }

        /**
         * Host status
         * @description Interface for Host status
         */
        export interface IHostStatus {
            IsReachableFlag?: boolean;
        }

        /**
         * Host proprietary tags
         * @description Interface for Host proprietary tags
         */
        export interface IHostProprietaryTags {
            HostResponseMessage?: string;
            HostResponseOK?: boolean;
        }
    }
}