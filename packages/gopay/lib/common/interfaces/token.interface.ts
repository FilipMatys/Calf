/**
 * Authorization token
 * @description Interface for authorization token
 */
export interface IAuthorizationToken {
    /**
     * Access token
     * @description Token for access
     */
    accessToken?: string;

    /**
     * Access token expires at
     * @description Expiration time for access token
     */
    accessTokenExpiresAt?: Date;

    /**
     * Refresh token
     * @description Token for refresh
     */
    refreshToken?: string;
}