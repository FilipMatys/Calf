// Enums
import { DdsStatusType } from "../enums/dds-status-type.enum";

/**
 * Info
 * @description Namespace for Info
 */
export namespace Info {

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Info request data
         * @description Interface for Info request data
         */
        export interface IRequestData {
            identifiers?: string[];
        }

        /**
         * Info response data
         * @description Interface for Info response data
         */
        export interface IResponseData {
            identifier?: string;
            referenceNumber?: string;
            verificationNumber?: string;
            status?: DdsStatusType;
        }
    }
}