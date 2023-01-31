// Interfaces
import { ISubscriber } from "./subscriber.interface";

/**
 * Subscribe payload
 * @description Interface for subscribe methods
 */
export interface ISubscribePayload<TCustomFields> {

    /**
     * Subscriber data
     * @description Data about subscriber(s)
     */
    subscriber_data: ISubscriber<TCustomFields> | ISubscriber<TCustomFields>[];
    email?: string;
    trigger_autoresponders?: boolean;
    trigger_notification?: boolean;
    update_existing?: boolean;
    skip_confirmation?: boolean;
    resubscribe?: boolean;
}