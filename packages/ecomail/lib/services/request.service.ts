// External modules
import fetch from "node-fetch";
import { ICallbackFn } from "../interfaces/callback.interface";

// Interfaces
import { IEcomailConfig } from "../interfaces/config.interface";

/**
 * Request service
 */
export class RequestService {

    /**
     * Host
     * @description Request target host
     */
    private host: string;

    /**
     * Key
     * @description Request key
     */
    protected key: string;

    /**
     * Constructor
     * @param config 
     */
    constructor(config: IEcomailConfig) {
        // Assign host and key
        this.host = config.host;
        this.key = config.key;
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
                    "key": `${this.key}`
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

    /**
     * Delete
     * @description Make get request
     * @param path 
     * @param payload 
     * @param callback
     */
    protected async delete<TPayload, TResult>(path: string[], payload: TPayload, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...path].join("/"));

            // Make delete request
            const response = await fetch(url, {
                // Set method
                method: "delete",
                // Set body 
                body: JSON.stringify(payload),
                // Set headers
                headers: {
                    "Content-type": "application/json",
                    "key": `${this.key}`
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

    /**
     * Post
     * @description Make post request
     * @param path 
     * @param payload 
     * @param callback
     */
    protected async post<TPayload, TResult>(path: string[], payload: TPayload, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...path].join("/"));

            // Make post request
            const response = await fetch(url, {
                // Set method
                method: "post",
                // Set body 
                body: JSON.stringify(payload),
                // Set headers
                headers: {
                    "Content-type": "application/json",
                    "key": `${this.key}`
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

    /**
     * Put
     * @description Make put request
     * @param path 
     * @param payload 
     * @param callback
     */
    protected async put<TPayload, TResult>(path: string[], payload: TPayload, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...path].join("/"));

            // Make put request
            const response = await fetch(url, {
                // Set method
                method: "put",
                // Set body 
                body: JSON.stringify(payload),
                // Set headers
                headers: {
                    "Content-type": "application/json",
                    "key": `${this.key}`
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