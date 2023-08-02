import { Acsres } from "../../common/enums/acsres.enum";
import { TokenRegistrationStatus } from "../../common/enums/token-registration-status.enum";

/**
 * Gp webpay response
 * @description Gp webpay payment request for payment creation
 */
export interface IPaymentResponse {

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
     * Mer order number
     * @description Payment number, if is not set, will be take order number
     */
     merOrderNum?: number;

     /**
     * Md
     * @description Optional field for merchant data, will be return in response
     */
     md?: string;

     /**
     * Prcode
     * @description Prcode from response
     */
     prcode?: string;

     /**
     * Srcode
     * @description Srcode from response
     */
     srcode?: string;

     /**
     * Result text
     * @description Result text - text description of error
     */
     resultText?: string;

     /**
     * AddInfo
     * @description Additional info
     */
     addInfo?: string;

     /**
     * Token
     * @description Unique identifier of payment card
     */
     token?: string;

     /**
     * Acsres
     * @description Result of card autentication in 3D system
     */
     acsres?: Acsres;

     /**
     * Accode
     * @description Authorization payment code assigned by authorization center
     */
     accode?: string;


     /**
     * Pan pattern
     * @description Masked number of card
     */
     panPattern?: string;

     /**
     * Day to capture 
     * @description Last day of debiting the payment from the account, format: DDMMYYYY
     */
     dayToCapture?: string;

     /**
     * TokenRegStatus
     * @description Token registration status
     */
     tokenRegStatus?: TokenRegistrationStatus;

     /**
     * Acrc
     * @description Returning code from authorization center informing about the payment status
     */
     acrc?: string;

     /**
     * RRN
     * @description Retrieval Reference Number
     */
     rrn?: string;

     /**
     * PAR
     * @description Payment Account Reference –
     */
     par?: string;

     /**
     * TraceId
     * @description Payment Account Reference –
     */
     traceId?: string;

     /**
     * Digest
     * @description Security sign of request
     */
     digest?: string;

     /**
     * Digest
     * @description Security sign of request
     */
     digest1?: string;

}