// Interfaces
import { RequestService } from "../../common/services/request.service";

// Interfaces
import { IPaymentRequest } from "../interfaces/payment-request.interface";
import { IPaymentResponse } from "../interfaces/payment-response.interface";

// Enums
import { RequestContentType } from "../../common/enums/request-content-type.enum";

// Services
import { ResponseService } from "../../common/services/response.service";


/**
 * Payment service
 */
export class PaymentService {

     /**
      * Constructor
      * @param requestService 
      * @param responseService 
      */
     constructor(
          private readonly requestService: RequestService,
          private readonly responseService: ResponseService
     ) {

     }

     /**
      * Create payment
      * @param payload
      * @param callback 
      * @returns 
      */
     public async create(payload: IPaymentRequest): Promise<any> {
          // Make post request
          return this.requestService.post(payload, {
               "Accept": RequestContentType.ApplicationFormUrlencoded,
               "Content-Type": RequestContentType.ApplicationFormUrlencoded
          });
     }

     /**
     * Validatre payload signature
     * @param payload
     * @returns 
     */
     public async validatePaylodSignature(payload: IPaymentResponse): Promise<boolean> {
          // Make post request
          return this.responseService.validateSignature(payload);
     }
}