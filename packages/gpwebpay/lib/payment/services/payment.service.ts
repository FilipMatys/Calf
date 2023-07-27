// Interfaces
import { RequestService } from "../../common/services/request.service";
import { IPaymentPayload } from "../interfaces/payment-payload.interface";

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
     public async create(payload: IPaymentPayload): Promise<any> {
          // Make post request
          return this.post(payload, {
               "Accept": RequestContentType.ApplicationFormUrlencoded,
               "Content-Type": RequestContentType.ApplicationFormUrlencoded
          });
     }
}