// External modules
import fetch from "node-fetch";
import * as crypto from "crypto";

// Config
import { Config } from "../classes/config.class";

// Interfaces
import { IRequestHeaders } from "../interfaces/headers.interface";
import { IPaymentPayload } from "../../gp-webpay";

/**
 * Request service
 */
export class RequestService {

     /**
      * Post
      * @description Make post request
      * @param payment 
      * @param headers 
      */
     protected async post(payment: IPaymentPayload, headers: IRequestHeaders): Promise<any> {
          try {

               // Assign merchang number if isn't
               payment.merchantNumber = payment.merchantNumber || Config.merchantNumber;

               // Sign payment
               payment.digest = await this.sign(payment, Config.privateKey, Config.privateKeyPassword);

               // Validate payment payload
               await this.validate(payment);

               // Create url
               let url = new URL([Config.host, await this.getPostData(payment)].join("?"));

               // Make post request
               const response = await fetch(url, {
                    // Set method
                    method: "post",
                    // Set headers
                    headers: await this.appendAuthorizationToHeaders(headers) as any
               });

               // Return result
               return response;
          }
          catch (error) {

               // Rethrow error
               throw error;
          }
     }

     /**
      * Create post data for request
      * @param payment 
      * @returns 
      */
     public async getPostData(payment: IPaymentPayload): Promise<string> {

          // key map of attributes
          const keyMap: Record<string, string> = {
               'merchantNumber': 'MERCHANTNUMBER',
               'operation': 'OPERATION',
               'orderNumber': 'ORDERNUMBER',
               'amount': 'AMOUNT',
               'currency': 'CURRENCY',
               'depositFlag': 'DEPOSITFLAG',
               'merOrderNum': 'MERORDERNUM',
               'url': 'URL',
               'description': 'DESCRIPTION',
               'md': 'MD',
               'paymentMethod': 'PAYMETHOD',
               'disabledPaymentMethod': 'DISABLEPAYMETHOD',
               'paymentMethods': 'PAYMETHODS',
               'email': 'EMAIL',
               'referenceNumber': 'REFERENCENUMBER',
               'addInfo': 'ADDINFO',
               'digest': 'DIGEST',
          };
          // Init data array
          const data = [];

          // Iterate key map
          for (const key of Object.keys(keyMap)) {

               // @ts-ignore - get value
               const value = payment[key];

               // Make sure value was found
               if (value) {
                    // Push attribute and value
                    data.push(keyMap[key] + '=' + encodeURIComponent(value));
               }
          }

          // Return data
          return data.join('&');
     }


     /**
      * Get signature base
      * @description Get signature base of payment data
      * @returns 
      */
     private async getSignatureBase(payment: IPaymentPayload): Promise<string> {
          // Keys of sign
          const signKeys = [
               'merchantNumber', 'operation', 'orderNumber', 'amount', 'currency',
               'depositFlag', 'merOrderNum', 'url', 'description', 'md',
               'paymentMethod', 'disabledPaymentMethod', 'paymentMethods',
               'email', 'referenceNumber', 'addInfo',
          ];
          // Init base
          const base = [];
          // Get values of request
          const values = Object.values(payment);
          const keys = Object.keys(payment);
          // Iterate keys
          for (const key of signKeys) {
               // Get key index
               const i = keys.indexOf(key);
               // Check index
               if (i >= 0) {
                    // Push value to base
                    base.push(values[i]);
               }
          }
          // Return base
          return base.join('|');
     }

     /**
      * Sign
      * @description Sign payment by private key
      * @param payment 
      * @param privateKey 
      * @param privateKeyPass 
      * @returns 
      */
     private async sign(payment: IPaymentPayload, privateKey: string, privateKeyPass: string): Promise<string> {
          // Get base
          const base = await this.getSignatureBase(payment);

          // Create encoder
          var enc = new TextEncoder(); // always utf-8

          // Sign by private key
          return crypto.sign('sha1', enc.encode(base), { passphrase: privateKeyPass, key: privateKey }).toString('base64');
     }

     /**
      * Validate
      * @Description Validate payment data
      * @param payment 
      */
     validate(payment: IPaymentPayload) {

          // Merchant number validation
          if (!payment.merchantNumber) {
               throw new Error('MerchantNumber is required.')
          }
          if (payment.merchantNumber.length > 10) {
               throw new Error('MerchantNumber can have a maximum of 10 characters.')
          }

          // Operation validation
          if (!payment.operation) {
               throw new Error('Operation is required.')
          }
          if (payment.operation.length > 20) {
               throw new Error('Operation can have a maximum of 20 characters.')
          }

          // Order number validation
          if (!payment.orderNumber) {
               throw new Error('OrderNumber is required.')
          }
          if (payment.orderNumber.toString().length > 15) {
               throw new Error('OrderNumber can have a maximum of 15 characters.')
          }

          // Amount validation
          if (!payment.amount) {
               throw new Error('Amount is required.')
          }
          if (payment.amount.toString().length > 15) {
               throw new Error('Amount can have a maximum of 15 characters.')
          }

          // Currency validation
          if (payment.currency.toString().length !== 3) {
               throw new Error('currency must be in ISO 4217 format.')
          }

          // Depositflag validation
          if (!payment.depositFlag) {
               throw new Error('DepositFlag is required.')
          }

          // MerOrderNum validation
          if (payment.merOrderNum && payment.merOrderNum.toString().length > 30) {
               throw new Error('MerOrderNum is required.')
          }

          // Url validation
          if (!payment.url) {
               throw new Error('Url is required.')
          }
          if (payment.url.length > 300) {
               throw new Error('Url can have a maximum of 300 characters.')
          }

          // Description validation
          if (payment.description && payment.description.length > 255) {
               throw new Error('Description can have a maximum of 255 characters.')
          }

          // Md validation
          if (payment.md && payment.md.length > 255) {
               throw new Error('Md can have a maximum of 255 characters.')
          }

          // Email validation
          if (payment.email && payment.email.length > 255) {
               throw new Error('Email can have a maximum of 255 characters.')
          }

          // ReferenceNumber validation
          if (payment.referenceNumber && payment.referenceNumber.length > 20) {
               throw new Error('ReferenceNumber can have a maximum of 20 characters.')
          }

          // AddInfo validation
          if (payment.addInfo && payment.addInfo.length > 24000) {
               throw new Error('AddInfo can have a maximum of 24000 characters.')
          }

          // Lang validation
          if (payment.lang && payment.lang.length > 2) {
               throw new Error('Lang can have a maximum of 2 characters.')
          }
     }

     /**
      * Append headers
      * @param headers 
      * @returns 
      */
     protected async appendAuthorizationToHeaders(headers: IRequestHeaders): Promise<IRequestHeaders> {

          // Return headers
          return headers;
     }
}