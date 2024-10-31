/**
 * Notification
 * @description Namespace for Notification
 */
export namespace Notification {

    /**
     * Enums
     * @description 
     */
    export namespace Enums {

        /**
         * Notification type
         * @description Enum for Notification type
         */
        export enum NotificationType {
            Order = "order.notification",
            PickupCompleted = "pickup_completed.notification"
        }

        /**
         * Order status
         * @description Enum for Order status
         */
        export enum OrderStatus {
            Created = "CREATED",
            Production = "PRODUCTION",
            Ready = "READY",
            Delivered = "DELIVERED"
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
        export interface IOrder {
            id?: string;
            venue_id?: string;
            status?: string;
            resource_url?: string;
        }

        /**
         * Details
         * @description Interface for Details
         */
        export interface IDetails {
            is_pickup_completed?: boolean;
        }

        /**
         * Courier details
         * @description Interface for Courier details
         */
        export interface ICourierDetails {
            courier_pickup_eta?: Date;
        }

        /**
         * Notification
         * @description Interface for Notification
         */
        export interface INotification {
            id?: string;
            type?: Enums.NotificationType;
            created_at?: Date;
            order?: IOrder;
        }
    }

}