// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";

// Namespaces
import { Order } from "../namespaces/order.namespace";
import { Authentication } from "../namespaces/authentication.namespace";

// Services
import { RequestService } from "./request.service";

/**
 * Order service
 * @description Service to handle Orders
 */
export class OrderService extends RequestService {

    /**
     * Get order detail
     * @param authentication 
     * @param order 
     * @param callback 
     * @returns 
     */
    public detail(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, callback?: ICallbackFn<Order.Interfaces.IOrder>): Promise<Order.Interfaces.IOrder> {
        // Get order detail
        return this.get({
            path: ["orders", `${order.id}`],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey }
        }, callback);
    }

    /**
     * Accept
     * @param authentication 
     * @param order 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public accept(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, payload: Order.Methods.Accept.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Accept order
        return this.put({
            path: ["orders", `${order.id}`, "accept"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey },
            payload: payload
        }, callback);
    }

    /**
     * Reject
     * @param authentication 
     * @param order 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public reject(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, payload: Order.Methods.Reject.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Reject order
        return this.put({
            path: ["orders", `${order.id}`, "reject"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey },
            payload: payload
        }, callback);
    }

    /**
     * Ready
     * @param authentication 
     * @param order 
     * @param callback 
     * @returns 
     */
    public ready(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, callback?: ICallbackFn<void>): Promise<void> {
        // Mark as ready
        return this.put({
            path: ["orders", `${order.id}`, "ready"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey }
        }, callback);
    }

    /**
     * Delivered
     * @param authentication 
     * @param order 
     * @param callback 
     * @returns 
     */
    public delivered(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, callback?: ICallbackFn<void>): Promise<void> {
        // Deliver
        return this.put({
            path: ["orders", `${order.id}`, "delivered"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey }
        }, callback);
    }

    /**
     * Confirm pre-order
     * @param authentication 
     * @param order 
     * @param callback 
     * @returns 
     */
    public confirmPreOrder(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, callback?: ICallbackFn<void>): Promise<void> {
        // Confirm pre-order
        return this.put({
            path: ["orders", `${order.id}`, "confirm-preorder"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey }
        }, callback);
    }

    /**
     * Replace items
     * @param authentication 
     * @param order 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public replaceItems(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, payload: Order.Methods.ReplaceItems.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Replace items
        return this.put({
            path: ["orders", `${order.id}`, "replace-items"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey },
            payload: payload
        });
    }

    /**
     * Accept self delivery
     * @param authentication 
     * @param order 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public acceptSelfDelivery(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, payload: Order.Methods.AcceptSelfDelivery.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Accept order
        return this.put({
            path: ["orders", `${order.id}`, "self-delivery", "accept"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey },
            payload: payload
        }, callback);
    }

    /**
     * Sent to POS
     * @param authentication 
     * @param order 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public sentToPos(authentication: Authentication.Interfaces.IApiKeyAuthentication, order: Order.Interfaces.IOrder, payload: Order.Methods.SentToPos.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Accept order
        return this.put({
            path: ["orders", `${order.id}`, "sent-to-pos"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey },
            payload: payload
        }, callback);
    }
}