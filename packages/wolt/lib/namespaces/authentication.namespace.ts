/**
 * Authentication
 * @description Namespace for Authentication
 */
export namespace Authentication {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Type
         * @description Enum for Type
         */
        export enum Type {
            None = "none",
            ApiKey = "api_key",
            Basic = "basic"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Api key authentication
         * @description Interface for Api key authentication
         */
        export interface IApiKeyAuthentication {
            apiKey?: string;
        }

        /**
         * Basic authentication
         * @description Interface for Basic authentication
         */
        export interface IBasicAuthentication {
            username?: string;
            password?: string;
        }

        /**
         * Authentication
         * @description Interface for Authentication
         */
        export interface IAuthentication extends IBasicAuthentication, IApiKeyAuthentication {
            type?: Enums.Type;
        }
    }
}