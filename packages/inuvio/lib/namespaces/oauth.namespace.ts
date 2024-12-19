/**
 * OAuth
 * @description Namespace for OAuth
 */
export namespace OAuth {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Grant type
         * @description Enum for Grant type
         */
        export enum GrantType {
            Password = "password",
            RefreshToken = "refresh_token"
        }

        /**
         * Token type
         * @description Enum for Token type
         */
        export enum TokenType {
            AccessToken = "access_token",
            RefreshToken = "refresh_token"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Grant access token request
         * @description Interface for Grant access token request
         */
        export interface IGrantAccessTokenRequest {
            grant_type: Enums.GrantType;
            username?: string;
            password?: string;
            token?: string;
            windowsAuthentication?: boolean;
            pathHelios?: string;
            clientId?: string;
            appRoleEnabled?: boolean;
            appDbName?: string;
        }

        /**
         * Grant access token response
         * @description Interface for Grant access token response
         */
        export interface IGrantAccessTokenResponse {
            access_token?: string;
            token_type?: Enums.TokenType;
            expires_in?: string;
            refresh_token?: string;
            scope?: string;
            state?: string;
        }

        /**
         * Revoke access token request
         * @description Interface for Revoke access token request
         */
        export interface IRevokeAccessTokenRequest {
            token?: string;
            token_type_hint?: Enums.TokenType;
        }

        /**
         * Revoke access token response
         * @description Interface for Revoke access token response
         */
        export interface IRevokeAccessTokenResponse { }
    }
}