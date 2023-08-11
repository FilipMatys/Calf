// Interfaces
import { IIndexed } from "./indexed.interface";

// Enums
import { NotificationType } from "../enums/notification-type.enum";

/**
 * Order
 * @description Nested interface for Notification Order
 */
interface INotificationOrder extends IIndexed {
    venue_id?: string;
    resource_url?: string;
    status?: any;
}

/**
 * Notification
 * @description Interface for Notification
 */
export interface INotification extends IIndexed {
    type?: NotificationType;
    order?: INotificationOrder;
    created_at?: Date;
}