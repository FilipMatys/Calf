// Enums
import { PaymentProviderType } from "../enums/payment-provider-type.enum";

/**
 * Payment part provider
 * @description Interface for Payment part provider
 */
export interface IPaymentPartProvider {
    id: string;
    name: string;
    type: PaymentProviderType;
}