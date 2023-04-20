// Interfaces
import { IAbraAuth } from "./auth.interface";

/**
 * Abra configuration
 * @description Interface for abra configuration
 */
export interface IAbraConfig {

    /**
     * Host
     * @description Target host
     */
    host: string;

    /**
     * Instance
     * @description Target instance
     */
    instance: string;

    /**
     * Port
     * @description Target port
     */
    port?: number;

    /**
     * Auth
     * @description Client authorization
     */
    auth: IAbraAuth;

    /**
     * SSL
     * @description Whether to use SSL
     */
    ssl?: boolean;
}