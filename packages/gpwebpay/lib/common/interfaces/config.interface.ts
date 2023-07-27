/**
 * Configuration
 * @description GpWebpay configuration interface
 */
export interface IGpWebpayConfig {

    /**
     * Private key
     */
    privateKey: string;

    /**
     * Public key
     */
    publicKey: string;

    /**
     * Private key password
     */
    privateKeyPassword: string;

    /**
    * Host
    */
    host: string;

    /**
    * Merchant number
    */
    merchantNumber: string;
}