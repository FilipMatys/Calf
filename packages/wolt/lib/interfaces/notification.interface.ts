// Enums
import { NotificationType } from "../enums/notification-type.enum";

/**
 * Order
 * @description Nested interface for Notification Order
 */
interface INotificationOrder {
    venue_id?: string;
    resource_url?: string;
    status?: any;
}

/**
 * Notification
 * @description Interface for Notification
 */
export interface INotification {
    type?: NotificationType;
    order?: INotificationOrder;
    created_at?: Date;
}