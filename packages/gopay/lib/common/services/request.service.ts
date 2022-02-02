// External modules
import fetch from "node-fetch";
import { BodyInit } from "node-fetch";

// Interfaces
import { ICallbackFn } from "../interfaces/callback-fn.interface";
import { IErrorResponse } from "../interfaces/error-response.interface";
import { IRequestHeaders } from "../interfaces/headers.interface";

// Enums
import { RequestContentType } from "../enums/request-content-type.enum";

// Classes
import { Config } from "../classes/config.class";

// Services
import { TokenService } from "./token.service";

/**
 * Request service
 */
export class RequestService {

    /**
     * Get
     * @description Make get request
     * @param path 
     * @param payload 
     * @param headers
     * @param callback
     */
    protected async get<TParams, TResult>(path: string[], params?: TParams, headers: IRequestHeaders = { "Accept": RequestContentType.ApplicationJson }, callback?: ICallbackFn<TResult>): Promise<TResult | IErrorResponse> {
        try {
            // Create new url
            const url = new URL([Config.host, ...path].join("/"));

            // Check for params
            if (params) {
                // Iterate params
                for (const [key, value] of Object.entries(params)) {
                    // Append search params
                    url.searchParams.append(key, value);
                }
            }

            // Make get request
            const response = await fetch(url, {
                // Set method
                method: "get",
                // Set headers
                headers: await this.appendAuthorizationToHeaders(headers) as any
            });

            // Get result
            const result = await response.json() as TResult;

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
     * Delete
     * @description Make get request
     * @param path 
     * @param payload 
     * @param headers
     * @param callback
     */
    protected async delete<TPayload, TResult>(path: string[], payload: TPayload, headers: IRequestHeaders, callback?: ICallbackFn<TResult | IErrorResponse>): Promise<TResult | IErrorResponse> {
        try {
            // Create new url
            const url = new URL([Config.host, ...path].join("/"));

            // Init body
            let body: BodyInit | undefined = undefined;

            // Check for payload
            if (payload) {
                // Check content type
                switch (headers["Content-Type"]) {
                    // application/json
                    case RequestContentType.ApplicationJson:
                        // Stringify object
                        body = JSON.stringify(payload);
                        break;

                    // application/x-www-form-urlencoded
                    case RequestContentType.ApplicationFormUrlencoded:
                        // Encode payload
                        body = Object.entries(payload).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
                        break;
                }
            }

            // Make delete request
            const response = await fetch(url, {
                // Set method
                method: "delete",
                // Set body 
                body: body,
                // Set headers
                headers: await this.appendAuthorizationToHeaders(headers) as any
            });

            // Get result
            const result = await response.json() as TResult;

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
     * Post
     * @description Make post request
     * @param path 
     * @param payload 
     * @param headers
     * @param callback
     */
    protected async post<TPayload, TResult>(path: string[], payload: TPayload, headers: IRequestHeaders, callback?: ICallbackFn<TResult | IErrorResponse>): Promise<TResult | IErrorResponse> {
        try {
            // Create new url
            const url = new URL([Config.host, ...path].join("/"));

            // Init body
            let body: BodyInit | undefined = undefined;

            // Check for payload
            if (payload) {
                // Check content type
                switch (headers["Content-Type"]) {
                    // application/json
                    case RequestContentType.ApplicationJson:
                        // Stringify object
                        body = JSON.stringify(payload);
                        break;

                    // application/x-www-form-urlencoded
                    case RequestContentType.ApplicationFormUrlencoded:
                        // Encode payload
                        body = Object.entries(payload).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
                        break;
                }
            }

            // Make post request
            const response = await fetch(url, {
                // Set method
                method: "post",
                // Set body 
                body: body,
                // Set headers
                headers: await this.appendAuthorizationToHeaders(headers) as any
            });

            // Get result
            const result = await response.json() as TResult;

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
     * Put
     * @param path 
     * @param payload 
     * @param headers 
     * @param callback 
     * @returns 
     */
    protected async put<TPayload, TResult>(path: string[], payload: TPayload, headers: IRequestHeaders, callback?: ICallbackFn<TResult | IErrorResponse>): Promise<TResult | IErrorResponse> {
        try {
            // Create new url
            const url = new URL([Config.host, ...path].join("/"));

            // Init body
            let body: BodyInit | undefined = undefined;

            // Check for payload
            if (payload) {
                // Check content type
                switch (headers["Content-Type"]) {
                    // application/json
                    case RequestContentType.ApplicationJson:
                        // Stringify object
                        body = JSON.stringify(payload);
                        break;

                    // application/x-www-form-urlencoded
                    case RequestContentType.ApplicationFormUrlencoded:
                        // Encode payload
                        body = Object.entries(payload).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
                        break;
                }
            }

            // Make put request
            const response = await fetch(url, {
                // Set method
                method: "put",
                // Set body 
                body: body,
                // Set headers
                headers: await this.appendAuthorizationToHeaders(headers) as any
            });

            // Get result
            const result = await response.json() as TResult;

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
     * Get request headers
     * @param args 
     */
    protected async appendAuthorizationToHeaders(headers: IRequestHeaders): Promise<IRequestHeaders> {
        // Add authorization to headers
        headers["Authorization"] = `Bearer ${await TokenService.getAccessToken()}`;

        // Return headers
        return headers;
    }
}