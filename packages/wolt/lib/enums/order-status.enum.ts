/**
 * Order status
 * @description Enum for Order status
 */
export enum OrderStatus {
    Rejected = "rejected",
    Received = "received",
    Fetched = "fetched",
    Acknowledged = "acknowledged",
    Production = "production",
    Ready = "ready",
    Delivered = "delivered",
    Refunded = "refunded",
    Other = "other"
}