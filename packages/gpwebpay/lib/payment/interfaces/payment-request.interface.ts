import { Currency } from "../../gp-webpay";

/**
 * Gp webpay payment request for payment creation
 * @description Gp webpay payment request for payment creation
 */
export interface IPaymentRequest {

     /**
      * Merchant number
     * @description Merchant number
     */
     merchantNumber?: string;

     /**
     * Operation
     * @description Operation
     */
     operation: string;

     /**
     * Order number
     * @description Order number, must be unique for merchant number 
     */
     orderNumber: number;

     /**
     * Amount
     * @description Amount
     */
     amount: number;

     /**
     * Currency
     * @description Currency
     */
     currency: Currency;

     /**
     * Deposit flag
     * @description Deposit flag, 0 - is not required immediate payment, 1 - is required immediate payment
     */
     depositFlag: number;

     /**
     * Mer order number
     * @description Payment number, if is not set, will be take order number
     */
     merOrderNum?: number;

     /**
     * URL
     * @description URL address of merchant 
     */
     url?: string;

     /**
     * Description
     * @description Description of purchase
     */
     description?: string;

     /**
     * Md
     * @description Optional field for merchant data, will be return in response
     */
     md?: string;

     /**
     * Payment method
     * @description Favourite payment method
     */
     paymentMethod?: string;

     /**
     * Payment methods
     * @description Allowed payment method, separated by comma ","
     */
     paymentMethods?: string;

     /**
     * Email
     * @description Email of customer, there will be send email with payment state
     */
     email?: string;

     /**
     * Reference number
     * @description Local ID of customer in e-shop
     */
     referenceNumber?: string;

     /**
     * Add info
     * @description Additional info in XML format
     */
     addInfo?: string;

     /**
     * Lang
     * @description Language of gateway
     */
     lang?: string;


     /**
     * Digest
     * @description Security sign of request
     */
     digest?: string;

}
