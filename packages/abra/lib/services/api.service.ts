// External modules
import fetch, { Response } from "node-fetch";
import { Observable, Subject } from "rxjs";
const zlib = require("zlib");

// Interfaces
import { IAbraQuery, IAbraQueryParam } from "../interfaces/query.interface";

// Enums
import { AbraModule } from "../enums/module.enum";

// Classes
import { AbraConfig } from "../classes/config.class";

/**
 * Function for attributes normalization, all has to start with upper case char
 * @param input 
 * @returns 
 */
const normalizeAttributes: any = function (input: any) {
    if (typeof input !== 'object') return input;
    if (Array.isArray(input)) return input.map(normalizeAttributes);
    return Object.keys(input).reduce(function (newObj, key) {
        let val = input[key];
        let newVal = (typeof val === 'object') && val !== null ? normalizeAttributes(val) : val;
        (newObj as any)[key.toLowerCase()] = newVal;
        return newObj;
    }, {});
};

/**
 * Api service
 * @description Abra API service
 */
export class ApiService {

    // Result observable
    protected readonly resultSource: Subject<any> = new Subject<any>();
    protected readonly result$: Observable<any> = this.resultSource.asObservable();

    // Exception observable
    protected readonly exceptionSource: Subject<Error> = new Subject<Error>();
    protected readonly exception$: Observable<Error> = this.exceptionSource.asObservable();

    /**
     * Observe results
     */
    public results(): Observable<any> {
        // Return result source as observable
        return this.result$;
    }

    /**
     * Observe exception
     */
    public exceptions(): Observable<Error> {
        // Return exceptions source as observable
        return this.exception$;
    }


    /**
     * Get list
     * @param module 
     * @param query 
     * @returns 
     */
    public async getList<TResult>(module: AbraModule, query: IAbraQuery): Promise<TResult[]> {
        // Get headers
        const headers = await this.getRequestHeaders();

        // Get target
        const target = await this.getRequestTarget();

        // Get response
        const response = await fetch([target, module, "query"].join("/"), { method: "post", body: JSON.stringify(query), headers: headers });

        // Parse response as result
        const result = await this.parseResponse<TResult | TResult[]>(response);

        // Normalize result
        const normalized = !(result instanceof Array) ? [result] : result;

        // Emit result
        this.resultSource.next(normalized);

        // Return normalized result
        return normalizeAttributes(normalized) as TResult[];
    }

    /**
     * Get
     * @description Get object detail
     * @param module 
     * @param id 
     * @returns 
     */
    public async get<TResult>(module: AbraModule, id: string): Promise<TResult> {
        // Get headers
        const headers = await this.getRequestHeaders();

        // Get target
        const target = await this.getRequestTarget();

        // Get response
        const response = await fetch([target, module, id].join("/"), { method: "get", headers: headers });

        // Parse response as result
        const result = await this.parseResponse<TResult>(response);

        // Emit result
        this.resultSource.next(result);

        // Return result
        return normalizeAttributes(result);
    }

    /**
     * Request
     * @description Make request to given endpoint without processing
     * the result
     * @param method 
     * @param module 
     * @param segments 
     * @param payload 
     * @param fields 
     */
    public async execute<TPayload>(method: "post" | "get" | "put" | "delete", module: AbraModule, segments: string[], fields: string[] = [], queryParams: IAbraQueryParam[] = [], payload?: TPayload): Promise<Response> {
        // Get headers
        const headers = await this.getRequestHeaders();

        // Get target
        const target = await this.getRequestTarget();

        // Init url
        let url = [target, module, ...(segments || [])].join("/");

        // Check for fields
        if ((fields || []).length) {
            // Add fields as select query
            url = `${url}?select=${fields.join(",")}`;
        }

        // Check for query params
        if (queryParams && queryParams.length) {

            // Iterate params
            for (let index = 0; index < queryParams.length; index++) {
                // Get param
                const param = queryParams[index];

                // First element and fields are also set
                if (!index && (!fields || !fields.length)) {
                    url = `${url}?${param.name}=${param.value}`;
                }
                else {
                    url = `${url}&${param.name}=${param.value}`;
                }
            }
        }

        // Init request option
        const options: any = { method: method, headers };

        // Check for payload
        if (typeof payload !== "undefined") {
            // Set options body
            options.body = JSON.stringify(payload);
        }

        // Get response
        return fetch(url, options);
    }

    /**
     * Update 
     * @description Update existing object
     * @param module 
     * @param id 
     * @param payload 
     * @param fields
     * @returns 
     */
    public async update<TPayload, TResult>(module: AbraModule, id: string, payload: TPayload, fields: string[] = ["id"]): Promise<TResult> {
        // Get headers
        const headers = await this.getRequestHeaders();

        // Get target
        const target = await this.getRequestTarget();

        // Init url
        let url = [target, module, id].join("/");

        // Check for fields
        if ((fields || []).length) {
            // Add fields as select query
            url = `${url}?select=${fields.join(",")}`;
        }

        // Get response
        const response = await fetch(url, { method: "put", body: JSON.stringify(payload), headers: headers });

        // Parse response as result
        const result = await this.parseResponse<TResult>(response);

        // Emit result
        this.resultSource.next(result);

        // Return result
        return normalizeAttributes(result);
    }

    /**
     * Create
     * @description Create new object
     * @param module 
     * @param payload 
     * @param fields 
     */
    public async create<TPayload, TResult>(module: AbraModule, payload: TPayload, fields: string[] = ["id"]): Promise<TResult> {
        // Get headers
        const headers = await this.getRequestHeaders();

        // Get target
        const target = await this.getRequestTarget();

        // Init url
        let url = [target, module].join("/");

        // Check for fields
        if ((fields || []).length) {
            // Add fields as select query
            url = `${url}?select=${fields.join(",")}`;
        }

        // Get response
        const response = await fetch(url, { method: "post", body: JSON.stringify(payload), headers: headers });

        // Parse response as result
        const result = await this.parseResponse<TResult>(response);

        // Emit result
        this.resultSource.next(result);

        // Return result
        return normalizeAttributes(result);
    }

    /**
     * Delete
     * @description Delete object
     * @param module 
     * @param id 
     */
    public async delete(module: AbraModule, id: string): Promise<void> {
        // Get headers
        const headers = await this.getRequestHeaders();

        // Get target
        const target = await this.getRequestTarget();

        // Delete data
        await fetch([target, module, id].join("/"), { method: "delete", headers: headers });
    }

    /**
     * Parse response
     * @param response 
     * @returns 
     */
    private async parseResponse<TResult>(response: Response): Promise<TResult> {
        try {
            // Get response content encoding
            const contentEncoding = response.headers.get("content-encoding");

            // No Content success status response code
            if (response.status === 204) {
                // Empty object
                return {} as TResult;
            }
            else if (contentEncoding === "gzip") {

                // Get response
                return response as any;
            }
            else {
                // Get json
                return response.json();
            }
        }
        catch (e) {
            // Rethrow error
            throw e;
        }
    }

    /**
     * Get request target
     * @description Get target for request
     */
    private async getRequestTarget(): Promise<string> {
        // Init parts
        const parts: string[] = [];

        // Init host
        let host: string = AbraConfig.host;
        // Add port to host if needed
        AbraConfig.port && (host = `${host}:${AbraConfig.port}`);

        // Check for ssl
        if (AbraConfig.ssl) {
            // Add SSL version
            parts.push(`https://${host}`);
        }
        else {
            // Add non-SSL version
            parts.push(`http://${host}`);
        }

        // Add instance to parts
        AbraConfig.instance && parts.push(AbraConfig.instance);

        // Return target
        return parts.join("/");
    }

    /**
     * Get request headers
     * @description Get headers for request
     */
    private async getRequestHeaders(): Promise<{ [key: string]: string }> {
        // Init default headers
        const headers: { [key: string]: string } = { "Content-type": "application/json" };

        // Add authorization
        headers["Authorization"] = `Basic ${Buffer.from(AbraConfig.auth.username + ":" + AbraConfig.auth.password).toString("base64")}`;

        // Return headers
        return headers;;
    }
}