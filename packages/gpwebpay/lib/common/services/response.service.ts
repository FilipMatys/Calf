// External
import * as crypto from "crypto";

// Interfaces
import { IPaymentResponse } from "../../payment/interfaces/payment-response.interface";

// Config
import { Config } from "../classes/config.class";


/**
 * Response service
 */
export class ResponseService {


     /**
      * Get signature
      * @returns 
      */
     private getSignatureBase(payload: IPaymentResponse) {
          // Sign keys
          const signKeys = [
               'OPERATION',
               'ORDERNUMBER',
               'MERORDERNUM',
               'MD',
               'PRCODE',
               'SRCODE',
               'RESULTTEXT',
               'USERPARAM1',
               'ADDINFO'
          ];

          // Init base
          const base = [];
          // Get values
          const values = Object.values(payload);
          // Get keys
          const keys = Object.keys(payload);

          // Init keys
          for (const key of signKeys) {
               const i = keys.indexOf(key);
               if (i >= 0) {
                    base.push(values[i]);
               }
          }
          // Return base
          return base.join('|');
     }

     /**
      * Validate payload signatures
      * @param payload 
      * @returns 
      */
     public async validateSignature(payload: IPaymentResponse): Promise<boolean> {

          // Make sure config is initialized
          if (!Config.publicKey || !Config.merchantNumber) {
               // Throw error
               throw new Error("[@calf/gp-webpay@GpWebpayConfig]: Configuration not initialized, did you forget to initialize?");
          }

          // Digest or digest1 is not define
          if (!payload.DIGEST || !payload.DIGEST1) {
               return false;
          }

          // Get digest bases
          const digestBase = this.getSignatureBase(payload);
          const digest1Base = digestBase + '|' + Config.merchantNumber;

          // Init verify for validation digest
          const digestVerify = crypto.createVerify('sha1');
          digestVerify.update(digestBase);

          // Verify payload by digest
          const digestValidation = digestVerify.verify(Config.publicKey, payload.DIGEST, 'base64');

          // Check validation
          if (!digestValidation) {
               return false;
          }

          // Init verify for validation digest1
          const digest1Verify = crypto.createVerify('sha1');
          digest1Verify.update(digest1Base);

          // Verify payload by digest1
          const digest1Validation = digest1Verify.verify(Config.publicKey, payload.DIGEST1, 'base64');

          return digest1Validation;
     }

}