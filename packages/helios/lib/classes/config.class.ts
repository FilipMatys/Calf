// Interfaces
import { IHeliosConfig } from "../interfaces/config.interface";

// Constants
import { HeliosRequestMethod } from "../constants/request-method.const";

/**
 * Helios config
 * @description Helios configuration service
 */
export class HeliosConfig {

    /**
     * Host
     * @description Helios host
     */
    public static get host(): string {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._host;
    }

    /**
     * Host path
     * @description Helios path from host
     */
    public static get hostPath(): string {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._hostPath;
    }

    /**
     * Port
     * @description Helios port
     */
    public static get port(): number {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._port;
    }

    /**
     * Version
     * @description API version
     */
    public static get version(): string {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._version;
    }

    /**
     * Default request method
     * @description Get default request method
     */
    public static get defaultRequestMethod(): string {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._defaultRequestMethod;
    }

    /**
     * Default custom headers
     */
    public static get defaultCustomHeaders(): { [key: string]: string } {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._defaultCustomHeaders;
    }

    /**
     * SSL
     * @description Whether to use SSL
     * connection
     */
    public static get ssl(): boolean {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._ssl;
    }

    /**
     * Runtime timeout
     * @description Timeout of runtime in ms
     */
    public static get runtimeTimeout(): number {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._runtimeTimeout;
    }

    /**
     * Instance
     * @description Configuration instance
     */
    private static _instance: HeliosConfig;

    // Properties
    private _host: string;
    private _hostPath: string;
    private _port: number;
    private _defaultRequestMethod: string;
    private _defaultCustomHeaders: { [key: string]: string };
    private _version: string;
    private _ssl: boolean;
    private _runtimeTimeout: number;

    /**
     * Constructor
     * @param config 
     */
    private constructor(config: IHeliosConfig) {
        // Assign values
        this._host = config.host;
        this._hostPath = config.hostPath || "";
        this._port = config.port;
        this._version = config.version;
        this._defaultRequestMethod = config.defaultRequestMethod || HeliosRequestMethod.Get;
        this._defaultCustomHeaders = config.defaultCustomHeaders || {};
        this._ssl = !!config.ssl;
    }

    /**
     * Initialize config
     * @param config 
     */
    public static initialize(config: IHeliosConfig): void {
        // Create instance
        this._instance = new HeliosConfig(config);
    }

    /**
     * Ensure initialization
     */
    public static ensureInitialization(): void {
        // Check if instance is set
        if (this._instance) {
            return;
        }

        // Throw error
        throw new Error("[@calf/helios@HeliosConfig]: Configuration not initialized, did you forget to initialize?");
    }
} 