// External modules
import fetch from "node-fetch";

// Interfaces
import { IAccessTokenRequest } from "../../authentication/interfaces/access-token-request.interface";
import { IAccessTokenResponse } from "../../authentication/interfaces/access-token-response.interface";
import { IErrorResponse } from "../interfaces/error-response.interface";
import { ICallbackFn } from "../interfaces/callback-fn.interface";
import { IAuthorizationToken } from "../interfaces/token.interface";

// Enums
import { Scope } from "../enums/scope.enum";

// Services
import { Config } from "../classes/config.class";

/**
 * Token service
 * @description Service to 
 */
export class TokenService {

    // Token
    private static _token: IAuthorizationToken;

    // Token updating flag
    private static _isTokenUpdating: boolean = false;

    /**
     * Get access token
     */
    public static async getAccessToken(): Promise<string> {
        // Make sure token is up to date
        await this.update();

        // Get access token
        return this._token.accessToken as string;
    }

    /**
     * Get token
     * @param payload 
     */
    public static async getToken(payload: IAccessTokenRequest, callback?: ICallbackFn<IAccessTokenResponse>): Promise<IAccessTokenResponse | IErrorResponse> {
        try {
            // Get url
            const url = new URL([Config.host, "oauth2", "token"].join("/"));

            // Make request
            const response = await fetch(url, {
                // Set method
                method: "post",
                // Set body
                body: Object.entries(payload).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&"),
                // Set headers
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Basic ${Buffer.from(Config.clientId + ":" + Config.clientSecret).toString("base64")}`
                }
            });

            // Get result
            const result = await response.json();

            // Check for callback
            callback && callback(undefined, response, result);

            // Return result
            return result;
        }
        catch (error) {
            // Check for callback
            callback && callback(error, undefined, undefined);

            // Rethrow error
            throw error;
        }
    }

    /**
     * Update
     * @description Make sure current token is up to date
     */
    private static async update(): Promise<void> {
        // Check if another update is already processed
        if (this._isTokenUpdating) {
            // Await update
            return this.awaitUpdate();
        }

        // Validate current token
        if (await this.isCurrentTokenValid()) {
            // No need to do anything
            return;
        }

        // Set updating flag
        this._isTokenUpdating = true;

        // Start loop to get token
        for (; ;) {
            try {
                // Get token
                const response = await this.getToken({ grant_type: "client_credentials", scope: Scope.PAYMENT_ALL });

                // Check for errors
                if ("errors" in response) {
                    // Throw error
                    throw response.errors;
                }

                // Assign token data
                this._token = {
                    // Access token
                    accessToken: response.access_token,
                    // Refresh token
                    refreshToken: response.refresh_token,
                    // Calculate token expiration
                    accessTokenExpiresAt: new Date(new Date().getTime() + (response.expires_in * 1000))
                };

                // Break loop
                break;
            }
            catch (error) {
                // Log error
                console.error(error);

                // Delay to try again
                await this.delay(200);

                // Skip to next try
                continue;
            }
        }

        // Reset updating flag
        this._isTokenUpdating = false;

        // Log success
        console.log(`[@calf/gopay]: Client token acquired.`);
    }

    /**
     * Is current token valid
     * @description Check whether current token is valid
     */
    private static async isCurrentTokenValid(): Promise<boolean> {
        // Check if token exists
        if (!this._token || !this._token.accessToken || !this._token.accessTokenExpiresAt) {
            // No token to validate
            return false;
        }

        // Get expiration date
        const expiresAt = new Date(this._token.accessTokenExpiresAt);

        // Shift it a bit just to be safe
        expiresAt.setMinutes(expiresAt.getMinutes() - 1);

        // Check expiration
        return new Date().getTime() < expiresAt.getTime();
    }

    /**
     * Await update
     * @description Wait while update flag is set
     */
    private static async awaitUpdate(): Promise<void> {
        // Wait as long as we are updating
        while (this._isTokenUpdating) {
            // Delay next check
            await this.delay(200);
        }
    }

    /**
     * Delay execution
     * @param duration 
     */
    private static async delay(duration: number): Promise<void> {
        // Create new promise
        return new Promise<void>((resolve) => setTimeout(() => resolve(), duration));
    }
}