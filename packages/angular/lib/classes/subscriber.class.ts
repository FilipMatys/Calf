// External modules
import { Subscription } from "rxjs";

/**
 * Subscriber
 * @description 
 */
export class Subscriber {

    // Dictionary of subscriptions
    protected readonly subscriptions: { [name: string]: Subscription } = {};

    /**
     * Register subscription by given name
     * @param name 
     * @param subscription 
     */
    public register(name: string, subscription: Subscription): void {
        // Assign subscription
        this.subscriptions[name] = subscription;
    }

    /**
     * Unregister subscription 
     * @param name 
     */
    public unregister(name: string): void {
        // Unsubscribe subscription
        this.subscriptions[name] && this.subscriptions[name].unsubscribe();
    }

    /**
     * Clear 
     */
    public clear(): void {
        // Unregister all subscriptions
        Object.keys(this.subscriptions).forEach((s) => this.unregister(s));
    }
}