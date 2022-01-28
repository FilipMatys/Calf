// External modules
import fetch from "node-fetch";
import { HeadersInit } from "node-fetch";

// Interfaces
import { ICallbackFn } from "../interfaces/callback-fn.interface";
import { IGoPayConfig } from "../interfaces/config.interface";
import { IErrorResponse } from "../interfaces/error-response.interface";

/**
 * Request service
 */
export class RequestService {

    /**
     * Host
     * @description Request target host
     */
    protected _host: string;

    /**
     * Client id
     */
    protected _clientId: string;

    /**
     * Client secret
     */
    protected _clientSecret: string;

    /**
     * Token
     * @description Authorization token
     */
    protected _token: string;

    /**
     * Constructor
     * @param config 
     */
    constructor(config: IGoPayConfig) {
        // Assign host and client config
        this._host = config.host;
        this._clientId = config.clientId;
        this._clientSecret = config.clientSecret;
    }

    /**
     * Set token
     * @description Set authorization token
     * @param token 
     */
    public setToken(token: string): void {
        // Set token
        this._token = token;
    }

    /**
     * Get
     * @description Make get request
     * @param path 
     * @param payload 
     * @param callback
     */
    protected async get<TParams, TResult>(path: string[], params?: TParams, callback?: ICallbackFn<TResult>): Promise<TResult | IErrorResponse> {
        try {
            // Create new url
            const url = new URL([this._host, ...path].join("/"));

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
                headers: this.getRequestHeaders()
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
     * @param callback
     */
    protected async delete<TPayload, TResult>(path: string[], payload: TPayload, callback?: ICallbackFn<TResult | IErrorResponse>): Promise<TResult | IErrorResponse> {
        try {
            // Create new url
            const url = new URL([this._host, ...path].join("/"));

            // Make delete request
            const response = await fetch(url, {
                // Set method
                method: "delete",
                // Set body 
                body: JSON.stringify(payload),
                // Set headers
                headers: this.getRequestHeaders()
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
     * @param callback
     */
    protected async post<TPayload, TResult>(path: string[], payload: TPayload, callback?: ICallbackFn<TResult | IErrorResponse>): Promise<TResult | IErrorResponse> {
        try {
            // Create new url
            const url = new URL([this._host, ...path].join("/"));

            // Make post request
            const response = await fetch(url, {
                // Set method
                method: "post",
                // Set body 
                body: JSON.stringify(payload),
                // Set headers
                headers: this.getRequestHeaders()
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
     * @description Make put request
     * @param path 
     * @param payload 
     * @param callback
     */
    protected async put<TPayload, TResult>(path: string[], payload: TPayload, callback?: ICallbackFn<TResult | IErrorResponse>): Promise<TResult | IErrorResponse> {
        try {
            // Create new url
            const url = new URL([this._host, ...path].join("/"));

            // Make put request
            const response = await fetch(url, {
                // Set method
                method: "put",
                // Set body 
                body: JSON.stringify(payload),
                // Set headers
                headers: this.getRequestHeaders()
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
    protected getRequestHeaders(...args: any[]): HeadersInit {
        // Create request headers
        return {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this._token}`
        }
    }
}