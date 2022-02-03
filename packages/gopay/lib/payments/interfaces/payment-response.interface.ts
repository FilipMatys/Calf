// Interfaces
import { IPayer } from "../../common/interfaces/payer.interface";
import { ITarget } from "../../common/interfaces/target.interface";
import { IAdditionalParams } from "../../common/interfaces/additional-params.interface";
import { IPreAuthorization } from "../../common/interfaces/pre-authorization.interface";
import { IRecurrence } from "../../common/interfaces/recurrence.interface";

// Enums
import { PaymentState } from "../../common/enums/payment-state.enum";

/**
 * Payment response
 * @description Payment response
 */
export interface IPaymentResponse {

    /**
     * Id
     * @description Payment ID
     */
    id?: number;

    /**
     * Order number
     * @description Identification of order
     */
    order_number?: string;

    /**
     * State
     * @description Payment state
     */
    state?: PaymentState;

    /**
     * Sub state
     * @description Payment sub state
     */
    sub_state?: string;

    /**
     * Amount
     * @description Amount in cents
     */
    amount?: number;

    /**
     * Currency
     * @description Specifies the currency of payment
     */
    currency?: string;

    /**
     * Payer
     * @description Object describing the payer of the payment
     */
    payer?: IPayer;

    /**
     * Target
     * @description Object describing the target of the payment (payee)
     */
    target?: ITarget;

    /**
     * Additional params
     * @description Additional parameters of payments
     */
    additional_params?: IAdditionalParams[];

    /**
     * Lang
     * @description Parameter defines payment language
     */
    lang?: string;

    /**
     * GW url
     * @description URL for initiation of the payment gate
     */
    gw_url?: string;

    /**
     * Payment instrument
     * @description Code of chosen payment method
     */
    payment_instrument?: string;

    /**
     * Pre-authorization
     * @description Object describing the pre-authorization
     */
    preauthorization: IPreAuthorization;

    /**
     * Recurrence
     * @description Object describing the recurring payment
     */
    recurrence?: IRecurrence;
}