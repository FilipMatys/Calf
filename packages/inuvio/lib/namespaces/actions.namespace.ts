import { Common } from "./common.namespace";

/**
 * Actions
 * @description Namespace for Actions
 */
export namespace Actions {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Action type
         * @description Enum for Action type
         */
        export enum ActionType {
            ExternalProcedure = 0,
            Plugin = 3,
            InternalAction = 99
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * List params
         * @description Interface for List params
         */
        export interface IListParams extends Common.Interfaces.IRequestParams {
            browseIdent?: string;
        }

        /**
         * List params
         * @description Interface for List params
         */
        export interface IListQueryParams {
            filter?: any;
            orderby?: string[];
        }

        /**
         * List response
         * @description Interface for List response
         */
        export interface IListResponse {
            count?: number;
            actions?: IAction[];
        }

        /**
         * Meta params
         * @description Interface for Meta params
         */
        export interface IMetaParams extends Common.Interfaces.IRequestParams { 
            browseIdent?: string;
            actionIdent?: string;
        }

        /**
         * Meta query params
         * @description Interface for Meta query params
         */
        export interface IMetaQueryParams {
            recordId?: string;
        }

        /**
         * Action
         * @description Interface for Action
         */
        export interface IAction {
            actionIdent?: string;
            actionCaption?: string;
            actionHint?: string;
            actionIsVisible?: boolean;
            actionIsEnabled?: boolean;
            actionType?: Enums.ActionType;
        }
    }
}