// Interfaces
import { ICashPayment } from "./cash-payment.interface";
import { IDelivery } from "./delivery.interface";
import { IIndexed } from "./indexed.interface";
import { IPrice } from "./price.interface";
import { IVenue } from "./venue.interface";
import { IItem } from "./item.interface";

// Enums
import { OrderType } from "../enums/order-type.enum";
import { OrderStatus } from "../enums/order-status.enum";

/**
 * Order
 * @description Interface for Order
 */
export interface IOrder extends IIndexed {
    type?: OrderType;
    order_status?: OrderStatus;
    venue?: IVenue;
    price?: IPrice;
    delivery?: IDelivery;
    items?: IItem[];
    created_at?: Date;
    consumer_comment?: string;
    pickup_eta?: any;
    attribution_id?: string;
    pre_order?: any;
    consumer_name?: string;
    consumer_phone_number?: string;
    order_number?: string;
    modified_at?: Date;
    company_tax_id?: string;
    loyalty_card_number?: string;
    cash_payment?: ICashPayment;
}