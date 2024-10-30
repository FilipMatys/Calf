// Namespaces
import { Common } from "../namespaces/common.namespace";

// Services
import { HttpService } from "../services/http.service";

/**
 * Common operation
 * @description 
 */
export abstract class CommonOperation<TData, TResponse extends Common.Interfaces.ISaleToPOIResponse> {

    /**
     * Config
     * @description Operation config
     */
    protected readonly config: Common.Interfaces.IOperationConfig;

    /**
     * Service
     * @description Service to handle requests
     */
    protected readonly service: HttpService;

    /**
     * Data
     * @description Operation data
     */
    protected readonly data: TData;

    /**
     * Constructor
     * @param config
     * @param service
     * @param data 
     */
    constructor(config: Common.Interfaces.IOperationConfig, service: HttpService, data: TData) {
        // Assign config
        this.config = config;

        // Assign service
        this.service = service;

        // Assign data
        this.data = data;
    }

    /**
     * Execute
     * @description Execute operation
     */
    public abstract execute(): Promise<TResponse>;
}