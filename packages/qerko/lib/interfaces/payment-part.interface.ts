// Interfaces
import { IPaymentPartProvider } from "./payment-part-provider.interface";

/**
 * Payment part
 * @description Interface for Payment part
 */
export interface IPaymentPart {
    total: string;
    provider: IPaymentPartProvider;
}