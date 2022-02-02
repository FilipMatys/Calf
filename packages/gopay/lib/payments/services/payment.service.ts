// Interfaces
import { ICallbackFn } from "../../common/interfaces/callback-fn.interface";
import { IPaymentPayload } from "../interfaces/payment-payload.interface";
import { IPaymentResponse } from "../interfaces/payment-response.interface";
import { IPaymentModificationResponse } from "../interfaces/payment-modification-response.interface";
import { ICapturePaymentPayload } from "../interfaces/capture-payment-payload.interface";
import { IErrorResponse } from "../../common/interfaces/error-response.interface";
import { IRequestHeaders } from "../../common/interfaces/headers.interface";

// Enums
import { RequestContentType } from "../../common/enums/request-content-type.enum";

// Services
import { RequestService } from "../../common/services/request.service";

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
        return this.post([...this.base, "payment"], payload, {
            "Accept": RequestContentType.ApplicationJson,
            "Content-Type": RequestContentType.ApplicationJson
        }, callback);
    }

    /**
     * Get payment status
     * @param id 
     * @param callback 
     * @returns 
     */
    public async status(id: number, callback?: ICallbackFn<IPaymentResponse | IErrorResponse>): Promise<IPaymentResponse | IErrorResponse> {
        // Make get request
        return this.get([...this.base, "payment", `${id}`], null, {
            "Accept": RequestContentType.ApplicationJson,
            "Content-Type": RequestContentType.ApplicationFormUrlencoded
        }, callback);
    }

    /**
     * Refund payment
     * @param id 
     * @param amount 
     * @param callback 
     */
    public async refund(id: number, amount: number, callback?: ICallbackFn<IPaymentModificationResponse | IErrorResponse>): Promise<IPaymentModificationResponse | IErrorResponse> {
        // Make post request
        return this.post([...this.base, "payment", `${id}`, "refund"], { amount: amount }, {
            "Accept": RequestContentType.ApplicationJson,
            "Content-Type": RequestContentType.ApplicationFormUrlencoded
        }, callback);
    }

    /**
     * Void authorization
     * @description Void pre authorized payment
     * @param id 
     * @param callback 
     * @returns 
     */
    public async voidAuthorization(id: number, callback?: ICallbackFn<IPaymentModificationResponse | IErrorResponse>): Promise<IPaymentModificationResponse | IErrorResponse> {
        // Make post request
        return this.post([...this.base, "payment", `${id}`, "void-authorization"], null, {
            "Accept": RequestContentType.ApplicationJson,
            "Content-Type": RequestContentType.ApplicationFormUrlencoded
        }, callback);
    }

    /**
     * Capture payment
     * @param id 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public async capture(id: number, payload?: ICapturePaymentPayload, callback?: ICallbackFn<IPaymentModificationResponse | IErrorResponse>): Promise<IPaymentModificationResponse | IErrorResponse> {
        // Init headers
        const headers: IRequestHeaders = { "Accept": RequestContentType.ApplicationJson };

        // Set content type based on payload
        headers["Content-Type"] = payload ? RequestContentType.ApplicationJson : RequestContentType.ApplicationFormUrlencoded;

        // Make post request
        return this.post([...this.base, "payment", `${id}`, "capture"], payload, headers, callback);
    }
}