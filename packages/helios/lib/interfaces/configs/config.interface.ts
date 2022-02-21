/**
 * Helios config
 * @description Configuration for Helios
 * client.
 */
export interface IHeliosConfig {

    /**
     * Host
     * @description Target host
     */
    host: string;

    /**
     * Host path
     * @description Path from target host
     */
    hostPath?: string;

    /**
     * Port
     * @description Target port
     */
    port: number;

    /**
     * Version
     * @description API version
     */
    version: string;

    /**
     * Default request method
     * @description Default request method
     * for communication
     */
    defaultRequestMethod?: string;

    /**
     * Default custom headers
     * @description Default custom headers
     * for communication
     */
    defaultCustomHeaders?: { [key: string]: string };

    /**
     * SSL
     * @description Whether to use SSL
     */
    ssl?: boolean;

    /**
     * Runtime timeout
     * @default Timeout of runtime in ms
     */
    runtimeTimeout: number;

    /**
     * Debug
     * @description Whether to output debug info
     */
    debug?: boolean;

    /**
     * Delay between requests
     * @description Delay between requests in ms
     */
    delayBetweenRequests?: number;

    /**
     * Browse response limit
     * @description Maximum browse response iterations
     */
    browseResponseLimit?: number;
}