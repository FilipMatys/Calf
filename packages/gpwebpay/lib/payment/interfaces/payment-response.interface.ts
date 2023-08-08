import { Acsres } from "../../common/enums/acsres.enum";
import { TokenRegistrationStatus } from "../../common/enums/token-registration-status.enum";
import { OperationType } from "../../gp-webpay";

/**
 * Gp webpay response
 * @description Gp webpay payment request for payment creation
 */
export interface IPaymentResponse {

     /**
     * OPERATION
     * @description Operation
     */
     OPERATION: string;

     /**
     * ORDERNUMBER
     * @description Order number, must be unique for merchant number 
     */
     ORDERNUMBER: number;

     /**
     * MERORDERNUM
     * @description Payment number, if is not set, will be take order number
     */
     MERORDERNUM?: number;

     /**
     * MD
     * @description Optional field for merchant data, will be return in response
     */
     MD?: string;

     /**
     * PRCODE
     * @description Prcode from response
     */
     PRCODE?: string;

     /**
     * SRCODE
     * @description Srcode from response
     */
     SRCODE?: string;

     /**
     * RESULTTEXT
     * @description Result text - text description of error
     */
     RESULTTEXT?: string;

     /**
     * USERPARAM1
     * @description Unique hash of credit card
     */
     USERPARAM1?: string;


     /**
     * ADDINFO
     * @description Additional info
     */
     ADDINFO?: string;

     /**
     * TOKEN
     * @description Unique identifier of payment card
     */
     TOKEN?: string;

     /**
     * EXPIRY
     * @description Payment card expiration
     */
     EXPIRY?: string;

     /**
     * ACSRES
     * @description Result of card autentication in 3D system
     */
     ACSRES?: Acsres;

     /**
     * ACCODE
     * @description Authorization payment code assigned by authorization center
     */
     ACCODE?: string;


     /**
     * PANPATTERN
     * @description Masked number of card
     */
     PANPATTERN?: string;

     /**
     * DAYTOCAPTURE
     * @description Last day of debiting the payment from the account, format: DDMMYYYY
     */
     DAYTOCAPTURE?: string;

     /**
     * TOKENREGSTATUS
     * @description Token registration status
     */
     TOKENREGSTATUS?: TokenRegistrationStatus;

     /**
     * ACRC
     * @description Returning code from authorization center informing about the payment status
     */
     ACRC?: string;

     /**
     * RRN
     * @description Retrieval Reference Number
     */
     RRN?: string;

     /**
     * PAR
     * @description Payment Account Reference –
     */
     PAR?: string;

     /**
     * TRACEID
     * @description Payment Account Reference –
     */
     TRACEID?: string;

     /**
     * DIGEST
     * @description Security sign of request
     */
     DIGEST?: string;

     /**
     * DIGEST1
     * @description Security sign of request
     */
     DIGEST1?: string;

}