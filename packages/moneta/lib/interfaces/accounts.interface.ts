/**
 * Accounts
 * @description Name space for Accounts
 */
export namespace Accounts {

    /**
     * List
     * @description Namespace for List method
     */
    export namespace List {

        /**
         * Params
         * @description Interface for Params
         */
        export interface IParams { 
            order?: "ASC" | "DESC";
            page?: number;
            size?: number;
            sort?: string;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse { 
            accounts?: any[];
            nextPage?: number;
            pageCount?: number;
            pageNumber?: number;
            pageSize?: number;
        }
    }
}