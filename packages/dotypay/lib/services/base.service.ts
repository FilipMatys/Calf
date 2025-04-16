// Namespaces
import { Common } from "../namespaces/common.namespace";

/**
 * Base service
 */
export class BaseService {

    /**
     * Host
     * @description Target host for the service
     */
    protected get host(): string {
        // Return host
        return `${this.config.Protocol}://${this.config.IP}:${this.config.Port}`;
    }

    /**
     * Config
     * @description Configuration for the service
     */
    protected readonly config: Common.Interfaces.IDotypayConfig;

    /**
     * Constructor
     * @param config 
     */
    constructor(config: Common.Interfaces.IDotypayConfig) {
        // Assign config
        this.config = config;
    }
}