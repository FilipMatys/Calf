/**
 * Subscriber
 * @description Subscriber interface
 */
export interface ISubscriber<TCustomFields> {
    id?: number;
    email?: string;
    name?: string;
    surname?: string;
    phone?: string;
    company?: string;
    status?: number;
    city?: string;
    street?: string;
    zip?: string;
    country?: string;
    subscribed_at?: Date;
    unsubscribed_at?: Date;
    last_activity_at?: Date;
    custom_fields?: TCustomFields;
}