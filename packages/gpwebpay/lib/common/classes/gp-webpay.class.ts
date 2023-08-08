// Interfaces
import { IGpWebpayConfig } from "../interfaces/config.interface";

// Classes
import { Config } from "./config.class";

// Services
import { RequestService } from "../services/request.service";
import { PaymentService } from "../../payment/services/payment.service";
import { ResponseService } from "../services/response.service";

/**
 * GoPay
 * @description 
 */
export class GpWebpay {

    /**
    * Request
    * @description Request service
    */
    public static get Payment(): PaymentService {
        // Return request service
        return this.paymentService;
    }

    /**
     * Payment service
     * @description Service for request
     */
    private static paymentService: PaymentService;


    /**
     * Disable constructor
     */
    private constructor() { }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IGpWebpayConfig): void {

        // Initialize config
        Config.initialize(config);

        // Create services
        this.paymentService = new PaymentService(new RequestService(), new ResponseService());
    }
}