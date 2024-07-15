/**
 * Retrieval
 * @description Namespace for Retrieval
 */
export namespace Retrieval {

    /**
     * Retrieval request data
     * @description Interface for Retrieval request data
     */
    export interface IRequestData {
        identifier?: string;
    }

    /**
     * Retrieval response data
     * @description Interface for Retrieval response data
     */
    export interface IResponseData {
        identifier?: string;
        referenceNumber?: string;
        verificationNumber?: string;
        status?: string;
    }
}