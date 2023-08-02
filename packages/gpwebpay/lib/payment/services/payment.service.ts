// Interfaces
import { RequestService } from "../../common/services/request.service";

// Interfaces
import { IPaymentRequest } from "../interfaces/payment-request.interface";

// Enums
import { RequestContentType } from "../../common/enums/request-content-type.enum";


/**
 * Payment service
 */
export class PaymentService extends RequestService {

     /**
      * Create payment
      * @param payload
      * @param callback 
      * @returns 
      */
     public async create(payload: IPaymentRequest): Promise<any> {
          // Make post request
          return this.post(payload, {
               "Accept": RequestContentType.ApplicationFormUrlencoded,
               "Content-Type": RequestContentType.ApplicationFormUrlencoded
          });
     }
}