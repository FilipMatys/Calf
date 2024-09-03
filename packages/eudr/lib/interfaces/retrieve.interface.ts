// Enums
import { DdsStatusType } from "../enums/dds-status-type.enum";

/**
 * Retrieve
 * @description Namespace for Retrieve
 */
export namespace Retrieve {

    /**
     * Retrieve request data
     * @description Interface for Retrieve request data
     */
    export interface IRequestData {
        identifiers?: string[];
    }

    /**
     * Retrieve response data
     * @description Interface for Retrieve response data
     */
    export interface IResponseData {
        identifier?: string;
        referenceNumber?: string;
        verificationNumber?: string;
        status?: DdsStatusType;
    }
}