// External modules
import fetch, { HeadersInit } from "node-fetch";
import { Buffer } from "buffer";

// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { IWoltConfig } from "../interfaces/config.interface";

// Namespaces
import { Common } from "../namespaces/common.namespace";
import { Authentication } from "../namespaces/authentication.namespace";

/**
 * Request service
 * @description Basic service to handle requests
 */
export abstract class RequestService {

    /**
     * Host
     * @description Request target host
     */
    private host: string;

    /**
     * Constructor
     * @param config 
     */
    constructor(config: IWoltConfig) {
        // Assign host and token
        this.host = config.host;
    }

    /**
     * Post
     * @param options 
     * @param callback 
     * @returns 
     */
    protected async post<TPayload, TResult>(options: Common.Interfaces.IRequestOptions<TPayload>, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...options.path].join("/"));

            // Init headers
            const headers: HeadersInit = { "Content-type": "application/json" };

            // Check for authentication type
            switch (options.authentication?.type) {
                // Api key
                case Authentication.Enums.Type.ApiKey:
                    // Set api key
                    headers["Authorization"] = `WOLT-API-KEY ${options.authentication?.apiKey}`;
                    break;
                case Authentication.Enums.Type.Basic:
                    // Set basic authorization
                    headers["Authorization"] = `Basic ${Buffer.from(`${options.authentication?.username}:${options.authentication?.password}`).toString("base64")}`
                    break;
            }


            // Make get request
            const response = await fetch(url, {
                // Set method
                method: "post",
                // Set headers
                headers: headers,
                // Set body
                body: options.payload as any
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
     * Patch
     * @param options 
     * @param callback 
     * @returns 
     */
    protected async patch<TPayload, TResult>(options: Common.Interfaces.IRequestOptions<TPayload>, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...options.path].join("/"));

            // Init headers
            const headers: HeadersInit = { "Content-type": "application/json" };

            // Check for authentication type
            switch (options.authentication?.type) {
                // Api key
                case Authentication.Enums.Type.ApiKey:
                    // Set api key
                    headers["Authorization"] = `WOLT-API-KEY ${options.authentication?.apiKey}`;
                    break;
                case Authentication.Enums.Type.Basic:
                    // Set basic authorization
                    headers["Authorization"] = `Basic ${Buffer.from(`${options.authentication?.username}:${options.authentication?.password}`).toString("base64")}`
                    break;
            }


            // Make get request
            const response = await fetch(url, {
                // Set method
                method: "patch",
                // Set headers
                headers: headers,
                // Set body
                body: options.payload as any
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
     * @param options 
     * @param callback 
     * @returns 
     */
    protected async put<TPayload, TResult>(options: Common.Interfaces.IRequestOptions<TPayload>, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...options.path].join("/"));

            // Init headers
            const headers: HeadersInit = { "Content-type": "application/json" };

            // Check for authentication type
            switch (options.authentication?.type) {
                // Api key
                case Authentication.Enums.Type.ApiKey:
                    // Set api key
                    headers["Authorization"] = `WOLT-API-KEY ${options.authentication?.apiKey}`;
                    break;
                case Authentication.Enums.Type.Basic:
                    // Set basic authorization
                    headers["Authorization"] = `Basic ${Buffer.from(`${options.authentication?.username}:${options.authentication?.password}`).toString("base64")}`
                    break;
            }


            // Make get request
            const response = await fetch(url, {
                // Set method
                method: "put",
                // Set headers
                headers: headers,
                // Set body
                body: options.payload as any
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
     * Get
     * @description Make get request
     * @param path 
     * @param payload 
     * @param callback
     */
    protected async get<TParams, TResult>(options: Common.Interfaces.IRequestOptions<TParams>, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...options.path].join("/"));

            // Init headers
            const headers: HeadersInit = { "Content-type": "application/json" };

            // Check for authentication type
            switch (options.authentication?.type) {
                // Api key
                case Authentication.Enums.Type.ApiKey:
                    // Set api key
                    headers["Authorization"] = `WOLT-API-KEY ${options.authentication?.apiKey}`;
                    break;
                case Authentication.Enums.Type.Basic:
                    // Set basic authorization
                    headers["Authorization"] = `Basic ${Buffer.from(`${options.authentication?.username}:${options.authentication?.password}`).toString("base64")}`
                    break;
            }

            // Check for params
            if (options.payload) {
                // Iterate params
                for (const [key, value] of Object.entries(options.payload)) {
                    // Append search params
                    url.searchParams.append(key, value as string);
                }
            }

            // Make get request
            const response = await fetch(url, {
                // Set method
                method: "get",
                // Set headers
                headers: headers
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
}