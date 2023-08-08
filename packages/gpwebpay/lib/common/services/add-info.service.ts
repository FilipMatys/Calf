import { IBillingDetails } from "../interfaces/add-info/billing-detail.interface";
import { ICardHolderDetails } from "../interfaces/add-info/cardholder-details.interface";
import { IShippingDetails } from "../interfaces/add-info/shipping-detail.interface";

/**
 * Ass info service
 */
export class AddInfoService {

     /**
      * Get add info XML
      * @returns 
      */
     public async getXML(cardholderDetails: ICardHolderDetails, billingDetails: IBillingDetails, shippingDetails: IShippingDetails): Promise<string> {

          let xml = '<?xml version="1.0" encoding="utf-8"?>';
          xml += '<additionalInfoRequest xmlns="http://gpe.cz/gpwebpay/additionalInfo/request" version="5.0">'
          if (cardholderDetails) {
               xml += '<cardholderInfo>'

               xml += '<cardholderDetails>'
               for (const [key, value] of Object.entries(cardholderDetails)) {
                    xml += `<${key}>${value}</${key}>`
               }
               xml += '</cardholderDetails>';
               xml += `<addressMatch>${((billingDetails && !shippingDetails) || (!billingDetails && shippingDetails)) ? 'Y' : 'N'}</addressMatch>`;

               if (billingDetails) {
                    xml += '<billingDetails>'
                    for (const [key, value] of Object.entries(billingDetails)) {
                         xml += `<${key}>${value}</${key}>`
                    }
                    xml += '</billingDetails>'
               }

               if (shippingDetails) {
                    xml += '<shippingDetails>'
                    for (const [key, value] of Object.entries(shippingDetails)) {
                         xml += `<${key}>${value}</${key}>`
                    }
                    xml += '</shippingDetails>'
               }

               xml += '</cardholderInfo>'
          }
          xml += '</additionalInfoRequest>'

          return xml;
     }
}