// Interfaces
import { ICallbackFn } from "../../common/interfaces/callback-fn.interface";
import { IPaymentPayload } from "../interfaces/payment-payload.interface";
import { IPaymentResponse } from "../interfaces/payment-response.interface";
import { IPaymentModificationResponse } from "../interfaces/payment-modification-response.interface";
import { IChargePaymentPayload } from "../interfaces/charge-payment-payload.interface";

// Services
import { RequestService } from "../../common/services/request.service";
import { IErrorResponse } from "../../common/interfaces/error-response.interface";

/**
 * Payment service
 */
export class PaymentService extends RequestService {

    /**
     * Base
     * @description Base for service
     */
    protected base: string[] = ["payments"];

    /**
     * Create payment
     * @param payload
     * @param callback 
     * @returns 
     */
    public async create(payload: IPaymentPayload, callback?: ICallbackFn<IPaymentResponse | IErrorResponse>): Promise<IPaymentResponse | IErrorResponse> {
        // Make post request
        return this.post([...this.base, "payment"], payload, callback);
    }

    /**
     * Get payment status
     * @param id 
     * @param callback 
     * @returns 
     */
    public async status(id: number, callback?: ICallbackFn<IPaymentResponse | IErrorResponse>): Promise<IPaymentResponse | IErrorResponse> {
        // Make get request
        return this.get([...this.base, "payment", `${id}`], null, callback);
    }

    /**
     * Refund payment
     * @param id 
     * @param amount 
     * @param callback 
     */
    public async refund(id: number, amount: number, callback?: ICallbackFn<IPaymentModificationResponse | IErrorResponse>): Promise<IPaymentModificationResponse | IErrorResponse> {
        // Make post request
        return this.post([...this.base, "payment", `${id}`, "refund"], { amount: amount }, callback);
    }

    /**
     * Cancel
     * @description Cancel pre authorized payment
     * @param id 
     * @param callback 
     * @returns 
     */
    public async cancel(id: number, callback?: ICallbackFn<IPaymentModificationResponse | IErrorResponse>): Promise<IPaymentModificationResponse | IErrorResponse> {
        // Make post request
        return this.post([...this.base, "payment", `${id}`, "void-authorization"], null, callback);
    }

    /**
     * Charge payment
     * @param id 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public async charge(id: number, payload?: IChargePaymentPayload, callback?: ICallbackFn<IPaymentModificationResponse | IErrorResponse>): Promise<IPaymentModificationResponse | IErrorResponse> {
        // Make post request
        return this.post([...this.base, "payment", `${id}`, "capture"], payload, callback);
    }
}