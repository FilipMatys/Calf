/**
 * Config
 * @description Interface for Cuzk config
 */
export interface ICuzkServiceConfig {

    /**
     * API key
     */
    key?: string;

    /**
     * API host
     */
    host: string;

    /**
     * Headers
     */
    headers?: { [key: string]: string };
}