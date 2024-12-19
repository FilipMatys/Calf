import { Common } from "./common.namespace";

/**
 * Browses
 * @description Namespace for Browses 
 */
export namespace Browses {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Browse type
         * @description Enum for Browse type
         */
        export enum BrowseType {
            Internal = 0,
            Defined = 1,
            UserTable = 2,
            MultiRelation = 3
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Data params
         * @description Interface for Data params
         */
        export interface IDataQueryParams {
            select?: string[];
            filter?: any;
            orderby?: string[];
            top?: number;
            skip?: number;
            rowVersion?: string;
        }

        /**
         * Data response
         * @description Interface for Data response
         */
        export interface IDataResponse<TRow> {
            count?: number;
            rows?: IDataResponseRow<TRow>[];
            rowVersionMax?: string;
        }

        /**
         * Data response row
         * @description Interface for Data response row
         */
        export interface IDataResponseRow<TRow> {
            row?: TRow;
        }

        /**
         * List params
         * @description Interface for List params
         */
        export interface IListParams extends Common.Interfaces.IRequestParams { }

        /**
         * List query params
         * @description Interface for List query params
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
            browses?: IBrowse[];
        }

        /**
         * Browse
         * @description Interface for Browse
         */
        export interface IBrowse {
            browseIdent?: string;
            browseCaption?: string;
            browseTable?: string;
            browseCreateImplemented?: boolean;
            browseReadImplemented?: boolean;
            browseUpdateImplemented?: boolean;
            browseDeleteImplemented?: boolean;
            browsePrintImplemented?: boolean;
            browseUserRightCreate?: boolean;
            browseUserRightRead?: boolean;
            browseUserRightUpdate?: boolean;
            browseUserRightDelete?: boolean;
            browseUserRightPrint?: boolean;
            browseType?: Enums.BrowseType;
            browseLicensed?: boolean;
        }

        /**
         * Meta params
         * @description Interface for Meta params
         */
        export interface IMetaParams extends Common.Interfaces.IRequestParams {
            browseIdent?: string;
        }

        /**
         * Meta response
         * @description Interface for Meta response
         */
        export interface IMetaResponse {
            syspars?: ISysParam[];
            table?: ITable;
            details?: any[];
        }

        /**
         * Table
         * @description Interface for Table
         */
        export interface ITable {
            browseCaption?: string;
            tableName?: string;
            tableFields?: ITableField[];
        }

        /**
         * Table field
         * @description Interface for Table field
         */
        export interface ITableField {
            fieldSysName?: string;
            fieldType?: string;
            fieldFormat?: string;
            fieldLength?: number;
            fieldDisplayName?: string;
            fieldShortDisplayName?: string;
            fieldDescription?: string;
            fieldConversion?: string;
            fieldNullable?: boolean;
            fieldVisible?: boolean;
            fieldDisplayMask?: string;
            fieldIsImage?: boolean;
            fieldIsColor?: boolean;
            fieldIsRTF?: boolean;
            fieldIsHyperlink?: boolean;
            fieldIsState?: boolean;
            fieldRequiredForCreate?: boolean;
            fieldDisabledForCreate?: boolean;
            fieldDisabledForUpdate?: boolean;
            fieldForeignKey?: string;
        }

        /**
         * Sys param
         * @description Interface for System parameter
         */
        export interface ISysParam {
            sysparQueryName?: string;
            sysparIdent?: string;
            sysparCaption?: string;
            sysparType?: string;
            sysparCondition?: number;
            sysparConditionCaption?: string;
        }
    }
}