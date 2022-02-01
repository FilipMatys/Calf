// Interfaces
import { ICallbackFn } from "../../common/interfaces/callback-fn.interface";
import { IAccessTokenRequest } from "../interfaces/access-token-request.interface";
import { IAccessTokenResponse } from "../interfaces/access-token-response.interface";
import { IErrorResponse } from "../../common/interfaces/error-response.interface";

// Services
import { RequestService } from "../../common/services/request.service";
import { TokenService } from "../../common/services/token.service";

/**
 * Authentication service
 * @description GoPay uses REST API for authorization of the access to API principal OAuth2.0.
 */
export class AuthenticationService extends RequestService {

    /**
     * Token
     * @description The basic element of all communication via REST API is an access token that is created by using the access data in the form of <ClientID>:<ClientSecret>. 
     * A token is set as an authorization parameter in HTTP request header through Authorization: Bearer <Access-Token>. This token is set for every requirement for API. 
     * Token expires after 30 minutes. After expiry of the token, it is necessary to create a new access token.
     * @param payload 
     * @param callback 
     */
    public async token(payload: IAccessTokenRequest, callback?: ICallbackFn<IAccessTokenResponse>): Promise<IAccessTokenResponse | IErrorResponse> {
        // Get token 
        return TokenService.getToken(payload, callback);
    }
}