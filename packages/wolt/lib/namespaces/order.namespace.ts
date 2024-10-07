// Interfaces
import { ICoordinates } from "../interfaces/coordinates.interface";
import { IIndexed } from "../interfaces/indexed.interface";

/**
 * Order
 * @description Namespace for Order
 */
export namespace Order {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Delivery provider type
         * @description Enum for Delivery provider type
         */
        export enum DeliveryProviderType {
            Wolt = "wolt",
            SelfDelivery = "self_delivery",
            Other = "other"
        }

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

        /**
         * Delivery type
         * @description Enum for Delivery type
         */
        export enum DeliveryType {
            Home = "homedelivery",
            TakeAway = "takeaway",
            EatIn = "eatin"
        }

        /**
         * Item type
         * @description Enum for Item type
         */
        export enum ItemType {
            OrderItem = "order-item",
            OrderRetailItem = "order-retail-item"
        }

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

        /**
         * Order type
         * @description Enum for Order type
         */
        export enum OrderType {
            Instant = "instant",
            PreOrder = "preorder"
        }

        /**
         * Pre order status
         * @description Enum for Pre order status
         */
        export enum PreOrderStatus {
            Waiting = "waiting",
            Confirmed = "confirmed"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Order
         * @description Interface for Order
         */
        export interface IOrder extends IIndexed {
            type?: Enums.OrderType;
            order_status?: Enums.OrderStatus;
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
            delivery_provider_type?: Enums.DeliveryProviderType;
        }

        /**
         * Category
         * @description Interface for Category
         */
        export interface ICategory extends IIndexed {
            name?: string;
        }

        /**
         * Cash payment
         * @description Interface for Cash payment
         */
        export interface ICashPayment {
            cash_amount?: IPrice;
            cash_to_expected?: IPrice;
        }

        /**
         * Item options
         * @description Interface for Item option
         */
        export interface IItemOption extends IIndexed {
            name?: string;
            value?: string;
            price?: IPrice;
            pos_id?: string;
            count?: number;
            value_pos_id?: string;
            deposit?: IDeposit;
        }

        /**
         * Item
         * @description Interface for Item
         */
        export interface IItem extends IIndexed {
            name?: string;
            count?: number;
            pos_id?: string;
            sku?: string;
            gtin?: string;
            options?: IItemOption[];
            total_price?: IPrice;
            base_price?: IPrice;
            unit_price?: IPrice;
            category?: ICategory;
            deposit?: IDeposit;
            row_number?: number;
            substitution_settings?: any;
            weight_details?: IWeightDetails;
            item_type?: Enums.ItemType;
        }

        /**
         * Delivery
         * @description Interface for Delivery
         */
        export interface IDelivery {
            status?: Enums.DeliveryStatus;
            type?: Enums.DeliveryType;
            time?: string;
            fee?: IPrice;
            location?: ILocation;
            small_order_surcharge?: IPrice;
            self_delivery?: boolean;
        }

        /**
         * Deposit
         * @description Interface for Deposit
         */
        export interface IDeposit {
            gross_price?: IPrice;
            net_price?: IPrice;
            vat_percentage?: number;
        }

        /**
         * Venue
         * @description Interface for Venue
         */
        export interface IVenue extends IIndexed {
            name?: string;
        }

        /**
         * Substitution settings
         * @description Interface for Substitution settings
         */
        export interface ISubstitutionSettings {
            is_allowed?: boolean;
        }

        /**
         * Price
         * @description Interface for Price
         */
        export interface IPrice {
            amount?: number;
            currency?: string;
        }

        /**
         * Weight details
         * @description Interface for Weight details
         */
        export interface IWeightDetails {
            weight_in_grams?: number;
            requested_amount?: number;
            extra_weight_percentage?: number;
        }

        /**
         * Pre order
         * @description Interface for Pre order
         */
        export interface IPreOrder {
            preorder_time?: string;
            pre_order_status?: Enums.PreOrderStatus;
        }

        /**
         * Location
         * @description Interface for Location
         */
        export interface ILocation {
            street_address?: string;
            apartment?: string;
            city?: string;
            country?: string;
            formatted_address?: string;
            coordinates?: ICoordinates;
        }
    }

    /**
     * Methods
     * @description Namespace for Methods
     */
    export namespace Methods {

        /**
         * Accept
         * @description Namespace for Accept
         */
        export namespace Accept {

            /**
             * Payload
             * @description Interface for Payload 
             */
            export interface IPayload {
                adjusted_pickup_time?: string;
            }
        }

        /**
         * Accept self delivery
         * @description Namespace for Accept self delivery
         */
        export namespace AcceptSelfDelivery {

            /**
             * Payload
             * @description Interface for Payload 
             */
            export interface IPayload {
                total_delivery_time?: string;
            }
        }

        /**
         * Replace items
         * @description Namespace for Replace items
         */
        export namespace ReplaceItems {

            /**
             * Payload
             * @description Interface for Payload
             */
            export interface IPayload {
                item_changes?: IItemChange[];
            }

            /**
             * Item change
             * @description Interface for Item change
             */
            export interface IItemChange {
                row_number?: number;
                replacement_items?: IReplacementItem[];
            }

            /**
             * Replacement item
             * @description Interface for Replacement item
             */
            export interface IReplacementItem {
                replacement_type?: ReplacementType;
                barcode?: string;
                count?: number;
                name?: string;
                price?: Interfaces.IPrice;
                purchase_item_id?: string;
                weight?: number;
            }

            /**
             * Replacement type
             * @description Enum for Replacement type
             */
            export enum ReplacementType {
                CountChangeReplacement = "count-change-replacement",
                MenuItemReplacement = "menu-item-replacement",
                WeightChangeReplacement = "weight-change-replacement",
                AdHocReplacement = "adhoc-replacement"
            }
        }

        /**
         * Reject
         * @description Namespace for Reject
         */
        export namespace Reject {

            /**
             * Payload
             * @description Interface for Payload 
             */
            export interface IPayload {
                reason?: string;
                code?: RejectOrderReason;
            }

            /**
             * Reject order reason
             * @description Enum for Reject order reason
             */
            export enum RejectOrderReason {
                Generic = "GENERIC",
                ItemsUnavailable = "ITEMS_UNAVAILABLE",
                VenueClosingSoon = "VENUE_CLOSING_SOON"
            }
        }

        /**
         * Sent to post
         * @description Namespace for Sent to pos
         */
        export namespace SentToPos {

            /**
             * Payload
             * @description Interface for Payload 
             */
            export interface IPayload {
                success?: boolean;
                time_sent_to_pos?: string;
            }
        }
    }
}