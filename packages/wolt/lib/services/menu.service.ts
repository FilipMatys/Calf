// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";

// Namespaces
import { Menu } from "../namespaces/menu.namespace";
import { Common } from "../namespaces/common.namespace";
import { Authentication } from "../namespaces/authentication.namespace";

// Services
import { RequestService } from "./request.service";

/**
 * Menu service
 * @description Service to handle Menus
 */
export class MenuService extends RequestService {

    /**
     * Create or update
     * @param authentication 
     * @param venue 
     * @param menu 
     * @param callback 
     * @returns 
     */
    public createOrUpdate(authentication: Authentication.Interfaces.IBasicAuthentication, venue: Common.Interfaces.IIndexed, menu: Menu.Interfaces.IMenu, callback?: ICallbackFn<void>): Promise<void> {
        // Create or update
        return this.post({
            path: ["v1", "restaurants", `${venue.id}`, "menu"],
            authentication: { ...authentication, type: Authentication.Enums.Type.Basic },
            payload: menu
        }, callback);
    }

    /**
     * Update inventory
     * @param authentication 
     * @param venue 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public updateInventory(authentication: Authentication.Interfaces.IBasicAuthentication, venue: Common.Interfaces.IIndexed, payload: Menu.Methods.UpdateInventory.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Create or update
        return this.post({
            path: ["venues", `${venue.id}`, "items", "inventory"],
            authentication: { ...authentication, type: Authentication.Enums.Type.Basic },
            payload: payload
        }, callback);
    }

    /**
     * Update items
     * @param authentication 
     * @param venue 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public updateItems(authentication: Authentication.Interfaces.IBasicAuthentication, venue: Common.Interfaces.IIndexed, payload: Menu.Methods.UpdateItems.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Create or update
        return this.post({
            path: ["venues", `${venue.id}`, "items"],
            authentication: { ...authentication, type: Authentication.Enums.Type.Basic },
            payload: payload
        }, callback);
    }

    /**
     * Update options
     * @param authentication 
     * @param venue 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public updateOptions(authentication: Authentication.Interfaces.IBasicAuthentication, venue: Common.Interfaces.IIndexed, payload: Menu.Methods.UpdateOptions.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Create or update
        return this.post({
            path: ["venues", `${venue.id}`, "options", "values"],
            authentication: { ...authentication, type: Authentication.Enums.Type.Basic },
            payload: payload
        }, callback);
    }
}