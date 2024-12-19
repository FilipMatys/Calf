/**
 * Databases
 * @description Namespace for Databases
 */
export namespace Databases {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Database type
         * @description Enum for Database type
         */
        export enum DatabaseType {
            Production = 0,
            Consolidation = 1,
            DataStorage = 2,
            Archive = 3,
            Training = 4
        }
    }


    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Database
         * @description Interface for Database
         */
        export interface IDatabase {
            dbNumber?: number;
            dbSysName?: string;
            dbCaption?: string;
            dbType?: Enums.DatabaseType;
            dbHasDBAccess?: boolean;
            dbAutoClose?: boolean;
            dbIsOnline?: boolean;
            dbNotifications?: boolean;
        }

        /**
         * List response
         * @description Interface for List response
         */
        export interface IListResponse {
            count?: number;
            databases?: IDatabase[];
        }
    }
}