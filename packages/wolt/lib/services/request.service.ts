// External modules
import fetch from "node-fetch";

// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { IWoltConfig } from "../interfaces/config.interface";

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
     * Token
     * @description Request token
     */
    protected token: string;

    /**
     * Constructor
     * @param config 
     */
    constructor(config: IWoltConfig) {
        // Assign host and token
        this.host = config.host;
        this.token = config.token;
    }

    /**
     * Put
     * @param path 
     * @param payload 
     * @param callback 
     */
    protected async put<TPayload, TResult>(path: string[], payload?: TPayload, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...path].join("/"));

            // Make get request
            const response = await fetch(url, {
                // Set method
                method: "put",
                // Set headers
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `WOLT-API-KEY ${this.token}`
                },
                // Set body
                body: payload as any
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
    protected async get<TParams, TResult>(path: string[], params?: TParams, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...path].join("/"));

            // Check for params
            if (params) {
                // Iterate params
                for (const [key, value] of Object.entries(params)) {
                    // Append search params
                    url.searchParams.append(key, value as string);
                }
            }

            // Make get request
            const response = await fetch(url, {
                // Set method
                method: "get",
                // Set headers
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `WOLT-API-KEY ${this.token}`
                }
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