/**
 * Payment state
 * @description Possible payment states
 */
export enum PaymentState {
    CREATED = "CREATED",
    PAYMENT_METHOD_CHOSEN = "PAYMENT_METHOD_CHOSEN",
    PAID = "PAID",
    AUTHORIZED = "AUTHORIZED",
    CANCELED = "CANCELED",
    TIMEOUTED = "TIMEOUTED",
    REFUNDED = "REFUNDED",
    PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED"
}