// Interfaces
import { IPrice } from "../interfaces/price.interface";

/**
 * Order
 * @description Namespace for Order
 */
export namespace Order {

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
            price?: IPrice;
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