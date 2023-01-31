// Interfaces
import { IList } from "../interfaces/list.interface";
import { ICallbackFn } from "../interfaces/callback.interface";
import { ISubscriber } from "../interfaces/subscriber.interface";
import { ISubscribePayload } from "../interfaces/subscribe-payload.interface";
import { ISubscriberResponse } from "../interfaces/subscriber-response.interface";

// Services
import { RequestService } from "./request.service";

/**
 * Lists service
 * @description Service to handle List entities
 */
export class ListsService extends RequestService {

    /**
     * Base
     * @description Base for list entities
     */
    protected base: string[] = ["lists"];

    /**
     * Get lists
     * @description Get list of lists
     * @param callback
     */
    public async list(callback?: ICallbackFn<IList[]>): Promise<IList[]> {
        // Make get request
        return this.get([...this.base], null, callback);
    }

    /**
     * Create list
     * @description Create new list
     * @param list 
     * @param callback 
     */
    public async create(list: IList, callback?: ICallbackFn<IList>): Promise<IList> {
        // Make post request
        return this.post([...this.base], list, callback);
    }

    /**
     * Show list
     * @description Load list
     * @param list Needs to have id defined
     * @param callback
     */
    public async show(list: IList, callback?: ICallbackFn<IList>): Promise<IList> {
        // Make get request
        return this.get([...this.base, `${list.id}`], null, callback);
    }

    /**
     * Update list
     * @description Update existing list
     * @param list 
     * @param callback 
     */
    public async update(list: IList, callback?: ICallbackFn<IList>): Promise<IList> {
        // Make put request
        return this.put(this.base, list, callback);
    }

    /**
     * Get subscribers
     * @description Get subscribers for given list
     * @param list Needs to have id defined
     * @param callback 
     * @returns 
     */
    public async subscribers<TCustomFields>(list: IList, callback?: ICallbackFn<any>): Promise<any> {
        // Make get request
        return this.get([...this.base, `${list.id}`, "subscribers"], null, callback);
    }

    /**
     * Subscriber
     * @description Get subscriber from given list
     * @param list Needs to have id defined
     * @param subscriber Needs to have email defined
     * @param callback 
     */
    public async subscriber<TCustomFields>(list: IList, subscriber: ISubscriber<TCustomFields>, callback?: ICallbackFn<ISubscriberResponse<TCustomFields>>): Promise<ISubscriberResponse<TCustomFields>> {
        // Make get request
        return this.get([...this.base, `${list.id}`, "subscribers", `${subscriber.email}`], null, callback);
    }

    /**
     * Update subscriber
     * @param list 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public async updateSubscriber<TCustomFields>(list: IList, payload: ISubscribePayload<TCustomFields>, callback?: ICallbackFn<any>): Promise<any> {
        // Make get request
        return this.post([...this.base, `${list.id}`, `update-subscriber`], payload, callback);
    }

    /**
     * Subscribe
     * @description Subscribe to list
     * @param list Needs to have id defined
     * @param payload 
     * @param callback 
     */
    public async subscribe<TCustomFields>(list: IList, payload: ISubscribePayload<TCustomFields>, callback?: ICallbackFn<any>): Promise<any> {
        // Make get request
        return this.post([...this.base, `${list.id}`, `subscribe${payload.subscriber_data instanceof Array ? "-bulk" : ''}`], payload, callback);
    }

    /**
     * Unsubscribe
     * @description Unsubscribe from list
     * @param list Needs to have id defined
     * @param subscriber Need to have email defined 
     * @param callback 
     */
    public async unsubscribe(list: IList, subscriber: ISubscriber<any>, callback?: ICallbackFn<any>): Promise<any> {
        // Make delete request
        return this.delete([...this.base, `${list.id}`, "unsubscribe"], subscriber, callback);
    }
}