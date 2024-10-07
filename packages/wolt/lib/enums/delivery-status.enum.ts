/**
 * Delivery status
 * @description Enum for Delivery status
 */
export enum DeliveryStatus {
    None = "none",
    Estimated = "estimated",
    DropOffEstimated = "drop_off_estimated",
    CourierAtVenue = "courier_at_venue",
    CourierAtDeliveryLocation = "courier_at_delivery_location",
    PickedUp = "picked_up",
    Delivered = "delivered"
}