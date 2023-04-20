// Interfaces
import { IAbraAuth } from "../interfaces/auth.interface";
import { IAbraConfig } from "../interfaces/config.interface";

/**
 * Abra config
 * @description Abra configuration service
 */
export class AbraConfig {

    /**
     * Host
     * @description Target host
     */
    public static get host(): string {
        // Ensure initialization
        this.ensureInitialization();

        // Return host
        return this._instance._host;
    }

    /**
     * Instance
     * @description Target instance
     */
    public static get instance(): string {
        // Ensure initialization
        this.ensureInitialization();

        // Return instance
        return this._instance._instance;
    }

    /**
     * Port
     * @description Target port
     */
    public static get port(): number {
        // Ensure initialization
        this.ensureInitialization();

        // Return value
        return this._instance._port;
    }

    /**
     * Auth
     * @description Authorization
     */
    public static get auth(): IAbraAuth {
        // Ensure initialization
        this.ensureInitialization();

        // Return authorization
        return this._instance._auth;
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
     * Instance
     * @description Configuration instance
     */
    private static _instance: AbraConfig;

    // Host
    private _host: string;

    // Instance
    private _instance: string;

    // Port
    private _port: number;

    // Authorization
    private _auth: IAbraAuth;

    // SSL
    private _ssl: boolean;

    /**
     * Constructor
     * @param config 
     */
    private constructor(config: IAbraConfig) {
        // Assign values
        this._host = config.host;
        this._instance = config.instance;
        this._port = config.port || 0;
        this._auth = config.auth;
        this._ssl = !!config.ssl;
    }

    /**
     * Initialize configuration
     * @param config 
     */
    public static initialize(config: IAbraConfig): void {
        // Create instance
        this._instance = new AbraConfig(config);
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
        throw new Error("[@calf/abra@AbraConfig]: Configuration not initialized, did you forget to initialize?");
    }
}