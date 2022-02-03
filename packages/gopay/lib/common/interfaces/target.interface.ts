/**
 * Target
 * @description Identification of the payee
 */
export interface ITarget {

    /**
     * Type
     * @description Description of payee
     */
    type?: "ACCOUNT";

    /**
     * Goid
     * @description Unique identifier of an e-shop in the payment gateway system
     */
    goid?: number;
}