// Interfaces
import { IGoPayConfig } from "../interfaces/config.interface";

// Classes
import { Config } from "./config.class";

// Services
import { AuthenticationService } from "../../authentication/services/authentication.service";
import { PaymentService } from "../../payments/services/payment.service";

/**
 * GoPay
 * @description 
 */
export class GoPay {

    /**
     * Authentication
     * @description Authentication service
     */
    public static get Authentication(): AuthenticationService {
        // Return authentication service
        return this.authenticationService;
    }

    /**
     * Payment
     * @description Payment service
     */
    public static get Payment(): PaymentService {
        // Return payment service
        return this.paymentService;
    }

    /**
     * Authentication service
     * @description Service for authentication
     */
    private static authenticationService: AuthenticationService;

    /**
     * Payment service
     * @description Service for payments
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
    public static initialize(config: IGoPayConfig): void {
        // Initialize config
        Config.initialize(config);

        // Create services
        this.authenticationService = new AuthenticationService();
        this.paymentService = new PaymentService();
    }
}