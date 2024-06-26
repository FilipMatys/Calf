// Interfaces
import { IAccount } from "./account.interface";
import { IBalance } from "./balance.interface";
import { ITransaction } from "./transaction.interface";

/**
 * Accounts
 * @description Namespace for Accounts service
 */
export namespace Accounts {

    /**
     * Balance
     * @description Namespace for Balance method
     */
    export namespace Balance {

        /**
         * Interface for Params
         */
        export interface IParams {
            currency?: string;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse {
            balances?: IBalance[];
        }
    }

    /**
     * Transactions
     * @description Namespace for Transactions method
     */
    export namespace Transactions {

        /**
         * Interface for Params
         */
        export interface IParams {
            fromDate?: string;
            order?: "ASC" | "DESC";
            page?: number;
            size?: number;
            sort?: string;
            toDate?: string;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse {
            transactions?: ITransaction[];
            nextPage?: number;
            pageCount?: number;
            pageNumber?: number;
            pageSize?: number;
        }
    }

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
            accounts?: IAccount[];
            nextPage?: number;
            pageCount?: number;
            pageNumber?: number;
            pageSize?: number;
        }
    }
}