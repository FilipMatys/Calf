// External modules
import fetch from "node-fetch";

// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { ISmartformConfig } from "../interfaces/config.interface";

/**
 * Request service
 * @description Basic request service
 */
export abstract class RequestService {

    /**
     * Host
     * @description Target host
     */
    private readonly host: string;

    /**
     * Username
     * @description Username for Basic authentication
     */
    private readonly username: string;

    /**
     * Password
     * @description Password for Basic authentication
     */
    private readonly password: string;

    /**
     * Is test
     * @description Test flag
     */
    private readonly isTest: boolean;

    /**
     * Constructor
     * @param config 
     */
    constructor(config: ISmartformConfig) {
        // Assign data from config
        this.host = config.host;
        this.username = config.username;
        this.password = config.password;
        this.isTest = !!config.isTest;
    }

    /**
     * Post
     * @param path 
     * @param body 
     * @param callback 
     */
    protected async post<TBody, TResult>(path: string[], body: TBody, callback?: ICallbackFn<TResult>): Promise<TResult> {
        try {
            // Create new url
            const url = new URL([this.host, ...path].join("/"));

            console.log(this.username, this.password);
            console.log(`Basic ${Buffer.from(this.username + ":" + this.password).toString("base64")}`);

            // Make post request
            const response = await fetch(url as any, {
                // Set method
                method: "post",
                // Set body
                body: JSON.stringify(body),
                // Set headers
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Basic ${Buffer.from(this.username + ":" + this.password).toString("base64")}`,
                    "test": this.isTest ? "true" : "false"
                }
            });

            // Get result
            const result = await response.json() as TResult;

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
                    "Accept": "application/json",
                    "Authorization": `Basic ${Buffer.from(this.username + ":" + this.password).toString("base64")}`,
                    "test": this.isTest ? "true" : "false"
                }
            });

            // Get result
            const result = await response.json() as TResult;

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