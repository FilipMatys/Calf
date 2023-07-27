// Interfaces
import { IGpWebpayConfig } from "../interfaces/config.interface";

/**
 * Config
 * @description Current GP Webpay config value
 */
export class Config {

    /**
     * Client id
     */
    private static _publicKey: string;

    /**
     * Client secret
     */
    private static _privateKey: string;

    /**
     * Private key password
     */
    private static _privateKeyPassword: string;

    /**
    * Host
    */
    private static _host: string;

    /**
    * Merchant number
    */
    private static _merchantNumber: string;

    /**
     * Public key getter
     */
    public static get publicKey(): string {
        return this._publicKey;
    }

    /**
     * Private key secret
     */
    public static get privateKey(): string {
        return this._privateKey;
    }

    /**
     * Private key password getter
     */
    public static get privateKeyPassword(): string {
        return this._privateKeyPassword;
    }

    /**
    * Host getter
    */
    public static get host(): string {
        return this._host;
    }

    /**
    * Merchant number getter
    */
    public static get merchantNumber(): string {
        return this._merchantNumber;
    }

    /**
     * Disable constructor
     */
    private constructor() { }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IGpWebpayConfig): void {
        // Assign config values
        this._privateKey = config.privateKey;
        this._privateKeyPassword = config.privateKeyPassword;
        this._publicKey = config.publicKey;
        this._merchantNumber = config.merchantNumber;
        this._host = config.host;
    }
}