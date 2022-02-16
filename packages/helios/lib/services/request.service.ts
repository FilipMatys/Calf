// External modules
import fetch, { Response } from "node-fetch";
import { Observable, Subject } from "rxjs";

// Interfaces
import { IHeliosResult } from "../interfaces/results/result.interface";
import { IHeliosRequestConfig } from "../interfaces/configs/request.interface";
import { IHeliosParams } from "../interfaces/params/params.interface";

// Classes
import { HeliosConfig } from "../classes/config.class";
import { HeliosRuntime } from "../classes/runtime.class";
import { HeliosRequestPayload } from "../classes/request-payload.class";

// Constants
import { HeliosRequestMethod } from "../constants/request-method.const";

// Utilities
import { Debug } from "../utilities/debug.utility";
import { Queue } from "../utilities/queue.utility";

/**
 * Request service
 * @description Base service to make
 * requests towards Helios Orange eServer
 * API
 */
export abstract class RequestService {

    // Result observable
    protected readonly resultSource: Subject<IHeliosResult> = new Subject<IHeliosResult>();
    protected readonly result$: Observable<IHeliosResult> = this.resultSource.asObservable();

    // Exception observable
    protected readonly exceptionSource: Subject<Error> = new Subject<Error>();
    protected readonly exception$: Observable<Error> = this.exceptionSource.asObservable();

    // Runtime dependency flag
    protected readonly isRuntimeDependent: boolean = true;

    /**
     * Endpoint
     * @description API Endpoint for given service
     */
    protected readonly ENDPOINT: string[] = [];

    /**
     * Observe communication
     */
    public observe(): Observable<IHeliosResult> {
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
     * Make a request
     * @param runtime 
     * @param method 
     * @param config 
     * @param params 
     * @param response 
     */
    public async request<TParams extends IHeliosParams, TResponse, TResult extends IHeliosResult>(runtime: HeliosRuntime, method: string, params?: TParams, response?: TResponse, config?: IHeliosRequestConfig): Promise<TResult> {
        // Parse config
        const rConfig = await this.parseRequestConfig(config);

        // Init result
        let result: TResult;

        try {
            // Check for request method
            switch (rConfig.method) {
                // Get method
                case HeliosRequestMethod.Get:
                    // Execute get method
                    result = await this.get<TParams, TResponse, TResult>(runtime, method, params, response, config);
                    break;

                // Post method
                case HeliosRequestMethod.Post:
                    // Execute post method
                    result = await this.post<TParams, TResponse, TResult>(runtime, method, params, response, config);
                    break;

                // Unknown
                default:
                    throw new Error(`[@calf/helios@ExecuteService]: Invalid request method: '${rConfig.method}'. Only '${HeliosRequestMethod.Get}' and '${HeliosRequestMethod.Post}' are valid values. Use of 'HeliosRequestMethod' is recommended.`);
            }

            // Emit result
            this.resultSource.next(result);

            // Return result
            return result;
        }
        catch (e) {
            // Emit exception
            this.exceptionSource.next(e as any);

            // Throw the same exception
            throw e;
        }
    }

    /**
     * Get
     * @description Make a get request for given
     * runtime, using given method and passing
     * given data as parameters.
     * @param runtime 
     * @param method 
     * @param params
     * @param response 
     * @param config
     */
    protected async get<TParams extends IHeliosParams, TResponse, TResult extends IHeliosResult>(runtime: HeliosRuntime, method: string, params?: TParams, response?: TResponse, config?: IHeliosRequestConfig): Promise<TResult> {
        // Make sure params contain basic values
        const rParams = await this.parseRequestParams(params || {});

        // Build url
        const url = this.buildGetRequestUrl(runtime, method, rParams, response);

        // Get headers
        const headers = await this.parseRequestConfigHeaders(config);

        // Init start date
        let startDate = new Date();

        // Log queue
        Debug.log(startDate, method, `Queueing request`);

        // Fetch response
        const rResponse = await Queue.enqueue(() => {
            // Log send
            Debug.log(startDate = new Date(), method, `Sending request`);

            // Return fetch
            return fetch(url, { method: "get", headers: headers });
        });

        // Set end date
        const endDate = new Date();

        // Parse response into json
        const parsedResponse = await this.parseResponse<TResult>(rResponse);

        // Debug end
        Debug.log(endDate, method, `Received ${parsedResponse.fields.IsError ? 'ERROR' : 'SUCCESS'} response in (${endDate.getTime() - startDate.getTime()} ms)${parsedResponse.fields.IsError ? (' !' + parsedResponse.fields.ErrorMessage) : ''}`);

        // Return response
        return parsedResponse;
    }

    /**
     * Post
     * @description Make a post request for given
     * runtime, using given method and passing
     * given params and response.
     * @param runtime 
     * @param method 
     * @param params
     * @param response
     * @param config
     */
    protected async post<TParams extends IHeliosParams, TResponse, TResult extends IHeliosResult>(runtime: HeliosRuntime, method: string, params?: TParams, response?: TResponse, config?: IHeliosRequestConfig): Promise<TResult> {
        // Make sure params contain basic values
        const rParams = await this.parseRequestParams(params || {});

        // Build url
        const url = this.buildPostRequestUrl(runtime, method);

        // Get request payload
        const payload = new HeliosRequestPayload(rParams, response);

        // Get headers
        const headers = await this.parseRequestConfigHeaders(config);

        // Init start date
        let startDate = new Date();

        // Log queue
        Debug.log(startDate, method, `Queueing request`);

        // Fetch response
        const rResponse = await Queue.enqueue(() => {
            // Log queue
            Debug.log(startDate = new Date(), method, `Sending request`);

            // Fetch result
            return fetch(url, { method: "post", body: JSON.stringify(payload), headers: headers });
        });

        // Set end date
        const endDate = new Date();

        // Parse response into json
        const parsedResponse = await this.parseResponse<TResult>(rResponse);

        // Debug end
        Debug.log(endDate, method, `Received ${parsedResponse.fields.IsError ? 'ERROR' : 'SUCCESS'} response in (${endDate.getTime() - startDate.getTime()} ms)${parsedResponse.fields.IsError ? (' !' + parsedResponse.fields.ErrorMessage) : ''}`);

        // Return response
        return parsedResponse;
    }

    /**
     * Build get request url
     * @param runtime 
     * @param method 
     * @param params 
     * @param response
     */
    protected buildGetRequestUrl<TParams, TResponse>(runtime: HeliosRuntime, method: string, params?: TParams, response?: TResponse): string {
        // Init segments
        const segments: string[] = [];

        // Get target
        const target: string = `${HeliosConfig.host}:${HeliosConfig.port}`;

        // Check for ssl
        if (HeliosConfig.ssl) {
            // Http protocol with ssl
            segments.push(`https://${target}`);
        }
        else {
            // Http protocol
            segments.push(`http://${target}`);
        }

        // Check for host path
        if (HeliosConfig.hostPath) {
            // Add host path
            segments.push(HeliosConfig.hostPath);
        }

        // Add segments for the execute service
        segments.push("datasnap", "rest", "THeliosMethods", ...this.ENDPOINT);

        // Add runtime hash to segments
        this.isRuntimeDependent && segments.push(runtime.hash || "null");

        // Add method name
        segments.push(method);

        // Check for params
        if (params && Object.keys(params).length) {
            // Add stringified and encoded params
            segments.push(encodeURIComponent(JSON.stringify(params)));
        }

        // Check for response
        if (response && Object.keys(response).length) {
            // Add stringified and encoded response
            segments.push(encodeURIComponent(JSON.stringify(response)));
        }

        // Return request url
        return segments.join("/");
    }

    /**
     * Build post request url
     * @param runtime 
     * @param method 
     */
    protected buildPostRequestUrl(runtime: HeliosRuntime, method: string): string {
        // Init segments
        const segments: string[] = [];

        // Get target
        const target: string = `${HeliosConfig.host}:${HeliosConfig.port}`;

        // Check for ssl
        if (HeliosConfig.ssl) {
            // Http protocol with ssl
            segments.push(`https://${target}`);
        }
        else {
            // Http protocol
            segments.push(`http://${target}`);
        }

        // Check for host path
        if (HeliosConfig.hostPath) {
            // Add host path
            segments.push(HeliosConfig.hostPath);
        }

        // Add segments for the execute service
        segments.push("datasnap", "rest", "THeliosMethods", ...this.ENDPOINT.map((endpoint) => encodeURIComponent(`"${endpoint}"`)));

        // Add runtime hash to segments
        this.isRuntimeDependent && segments.push(runtime.hash || "null");

        // Add method name
        segments.push(method);

        // Return request url
        return segments.join("/");
    }

    /**
     * Parse response
     * @param response 
     */
    protected async parseResponse<TResult>(response: Response): Promise<TResult> {
        // First get json
        const json = await response.json();

        // Get actual result from json
        return json["result"][0];
    }

    /**
     * Parse request config headers
     * @param headers
     */
    protected async parseRequestConfigHeaders(config: IHeliosRequestConfig = {}): Promise<{ [key: string]: string }> {
        // Init default headers
        const defaultHeaders = { "Content-type": "application/json" };

        // Return headers
        return Object.assign({}, defaultHeaders, HeliosConfig.defaultCustomHeaders || {}, config.headers || {});
    }

    /**
     * Parse request config
     * @description Parse request config, ensuring
     * it contains needed values and assigning default
     * ones if those values are absent.
     * @param config 
     */
    protected async parseRequestConfig(config: IHeliosRequestConfig = {}): Promise<IHeliosRequestConfig> {
        // Init default config
        const defaultConfig: IHeliosRequestConfig = { method: HeliosConfig.defaultRequestMethod };

        // Return config
        return Object.assign<IHeliosRequestConfig, IHeliosRequestConfig, IHeliosRequestConfig>({}, defaultConfig, config);
    }

    /**
     * Parse request params
     * @description Parse request params, ensuring
     * it contains needed values and assigning default
     * ones if those values are absent. 
     * @param params 
     * @param defaultParams
     */
    protected async parseRequestParams<TParams extends IHeliosParams>(params: TParams, defaultParams: IHeliosParams = {}): Promise<TParams> {
        // Return params
        return Object.assign<TParams, IHeliosParams, TParams>({} as any, defaultParams, params || ({} as any));
    }
}