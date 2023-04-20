// External modules
import fetch, { Response } from "node-fetch";
import { Observable, Subject } from "rxjs";

// Interfaces
import { IAbraQuery } from "../interfaces/query.interface";

// Enums
import { AbraModule } from "../enums/module.enum";

// Classes
import { AbraConfig } from "../classes/config.class";

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
     * Observe communication
     */
    public observe(): Observable<any> {
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
        const result = this.parseResponse<TResult | TResult[]>(response);

        // Normalize result
        const normalized = !(result instanceof Array) ? [result] : result;

        // Emit result
        this.resultSource.next(normalized);

        // Return normalized result
        return normalized as TResult[];
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
        return result;
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
        return result;
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
        return result;
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
            // First get json
            return response.json();
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