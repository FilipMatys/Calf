// Interfaces
import { ICashPayment } from "./cash-payment.interface";
import { IPreOrder } from "./pre_order.interface";
import { IDelivery } from "./delivery.interface";
import { IIndexed } from "./indexed.interface";
import { IPrice } from "./price.interface";
import { IVenue } from "./venue.interface";
import { IItem } from "./item.interface";

// Enums
import { OrderType } from "../enums/order-type.enum";
import { OrderStatus } from "../enums/order-status.enum";
import { DeliveryProviderType } from "../enums/delivery-provider-type.enum";

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
    created_at?: string;
    consumer_comment?: string;
    pickup_eta?: string;
    attribution_id?: string;
    pre_order?: IPreOrder;
    consumer_name?: string;
    consumer_phone_number?: string;
    order_number?: string;
    modified_at?: string;
    company_tax_id?: string;
    loyalty_card_number?: string;
    cash_payment?: ICashPayment;
    merchant?: IIndexed;
    delivery_provider_type?: DeliveryProviderType;
}