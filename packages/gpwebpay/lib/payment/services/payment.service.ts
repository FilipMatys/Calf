// Interfaces
import { RequestService } from "../../common/services/request.service";

// Interfaces
import { IPaymentRequest } from "../../common/interfaces/payment-request.interface";
import { IPaymentResponse } from "../../common/interfaces/payment-response.interface";

// Enums
import { RequestContentType } from "../../common/enums/request-content-type.enum";

// Services
import { ResponseService } from "../../common/services/response.service";
import { AddInfoService } from "../../common/services/add-info.service";
import { ICardHolderDetails } from "../../common/interfaces/add-info/cardholder-details.interface";
import { IBillingDetails } from "../../common/interfaces/add-info/billing-detail.interface";
import { IShippingDetails } from "../../common/interfaces/add-info/shipping-detail.interface";


/**
 * Payment service
 */
export class PaymentService {

     /**
      * Constructor
      * @param requestService 
      * @param responseService 
      * @param addInfoService 
      */
     constructor(
          private readonly requestService: RequestService,
          private readonly responseService: ResponseService,
          private readonly addInfoService: AddInfoService
     ) {

     }

     /**
      * Create payment
      * @param payload
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
     * Validate payload signature
     * @param payload
     * @returns 
     */
     public async validateResponse(payload: IPaymentResponse): Promise<boolean> {
          // Validate response
          return this.responseService.validate(payload);
     }

     /**
      * Get add info XML
      * @param cardholderDetails 
      * @param billingDetails 
      * @param shippingDetails 
      * @returns 
      */
     public async getAddInfoXML(cardholderDetails: ICardHolderDetails, billingDetails: IBillingDetails, shippingDetails: IShippingDetails): Promise<string> {
          // Get add info XML
          return this.addInfoService.getXML(cardholderDetails, billingDetails, shippingDetails);
     }
}