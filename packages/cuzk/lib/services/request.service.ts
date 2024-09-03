// External modules
import fetch, { Response } from "node-fetch";

// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { ICuzkServiceConfig } from "../interfaces/service-config.interface";

/**
 * Request service
 */
export abstract class RequestService {

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
     * Headers
     * @description Request headers
     */
    protected headers: { [key: string]: string };

    /**
     * Constructor
     * @param config 
     */
    constructor(config: ICuzkServiceConfig) {
        // Assign host and key
        this.host = config.host;
        this.key = config.key;
        this.headers = config.headers;
    }

    /**
     * Parse response
     * @param response 
     */
    protected abstract parseResponse<TResult>(response: Response): Promise<TResult>;

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

            // Init headers
            const headers: any = Object.assign({}, this.headers);

            // Check for key
            this.key && (headers["ApiKey"] = this.key);

            // Make get request
            const response = await fetch(url as any, {
                // Set method
                method: "get",
                // Set headers
                headers
            });

            // Get result
            const result = await this.parseResponse<TResult>(response);

            // Check for callback
            callback && callback(undefined, response as any, result);

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