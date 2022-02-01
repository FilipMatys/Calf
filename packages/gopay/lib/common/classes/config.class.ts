// Interfaces
import { IGoPayConfig } from "../interfaces/config.interface";

/**
 * Config
 * @description Current GoPay config value
 */
export class Config {

    /**
     * Client id
     */
    private static _clientId: string;

    /**
     * Client secret
     */
    private static _clientSecret: string;

    /**
     * Host
     */
    private static _host: string;

    /**
     * Client id getter
     */
    public static get clientId(): string {
        return this._clientId;
    }

    /**
     * Client secret
     */
    public static get clientSecret(): string {
        return this._clientSecret;
    }

    /**
     * Host getter
     */
    public static get host(): string {
        return this._host;
    }

    /**
     * Disable constructor
     */
    private constructor() { }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IGoPayConfig): void {
        // Assign config values
        this._clientId = config.clientId;
        this._clientSecret = config.clientSecret;
        this._host = config.host;
    }
}