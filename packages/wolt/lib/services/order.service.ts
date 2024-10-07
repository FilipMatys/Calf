// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { IOrder } from "../interfaces/order.interface";

// Namespaces
import { Order } from "../namespaces/order.namespace";

// Services
import { RequestService } from "./request.service";

/**
 * Order service
 * @description Service to handle Orders
 */
export class OrderService extends RequestService {

    /**
     * Get order
     * @param order
     * @param callback
     */
    public detail(order: IOrder, callback?: ICallbackFn<IOrder>): Promise<IOrder> {
        // Get order detail
        return this.get(["orders", `${order.id}`], null, callback);
    }

    /**
     * Accept
     * @param order 
     * @param payload
     * @param callback 
     */
    public accept(order: IOrder, payload: Order.Accept.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Accept order
        return this.put(["orders", `${order.id}`, "accept"], payload, callback);
    }

    /**
     * Reject
     * @param order 
     * @param payload
     * @param callback 
     */
    public reject(order: IOrder, payload: Order.Reject.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Reject order
        return this.put(["orders", `${order.id}`, "reject"], payload, callback);
    }

    /**
     * Ready
     * @param order 
     * @param callback 
     */
    public ready(order: IOrder, callback?: ICallbackFn<void>): Promise<void> {
        // Mark as ready
        return this.put(["orders", `${order.id}`, "ready"], null, callback);
    }

    /**
     * Delivered
     * @param order 
     * @param callback 
     */
    public delivered(order: IOrder, callback?: ICallbackFn<void>): Promise<void> {
        // Deliver
        return this.put(["orders", `${order.id}`, "delivered"], null, callback);
    }

    /**
     * Confirm pre-order
     * @param order 
     * @param callback 
     */
    public confirmPreOrder(order: IOrder, callback?: ICallbackFn<void>): Promise<void> {
        // Confirm pre-order
        return this.put(["orders", `${order.id}`, "confirm-preorder"], null, callback);
    }

    /**
     * Replace items
     * @param order 
     * @param payload 
     * @param callback 
     */
    public replaceItems(order: IOrder, payload: Order.ReplaceItems.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Replace items
        return this.put(["orders", `${order.id}`, "replace-items"], payload, callback);
    }

    /**
     * Accept self delivery
     * @param order
     * @param payload 
     * @param callback 
     * @returns 
     */
    public acceptSelfDelivery(order: IOrder, payload: Order.AcceptSelfDelivery.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Accept order
        return this.put(["orders", `${order.id}`, "self-delivery", "accept"], payload, callback);
    }

    /**
     * Sent to POS
     * @param order 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public sentToPos(order: IOrder, payload: Order.SentToPos.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Accept order
        return this.put(["orders", `${order.id}`, "sent-to-pos"], payload, callback);
    }
}