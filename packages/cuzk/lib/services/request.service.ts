// External modules
import fetch from "node-fetch";

// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { ICuzkConfig } from "../interfaces/config.interface";

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
    constructor(config: ICuzkConfig) {
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
            const response = await fetch(url as any, {
                // Set method
                method: "get",
                // Set headers
                headers: {
                    "Content-type": "application/json",
                    "ApiKey": this.key
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