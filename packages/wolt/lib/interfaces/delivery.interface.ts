// Interfaces
import { IPrice } from "./price.interface";
import { ILocation } from "./location.interface";

// Enums
import { DeliveryStatus } from "../enums/delivery-status.enum";
import { DeliveryType } from "../enums/delivery-type.enum";

/**
 * Delivery
 * @description Interface for Delivery
 */
export interface IDelivery {
    status?: DeliveryStatus;
    type?: DeliveryType;
    time?: string;
    fee?: IPrice;
    location?: ILocation;
    small_order_surcharge?: IPrice;
    self_delivery?: boolean;
}