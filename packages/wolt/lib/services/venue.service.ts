// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";

// Namespaces
import { Venue } from "../namespaces/venue.namespace";
import { Authentication } from "../namespaces/authentication.namespace";

// Services
import { RequestService } from "./request.service";

/**
 * Venue service
 * @description Service to handle Venues
 */
export class VenueService extends RequestService {

    /**
     * Get venue
     * @param authentication
     * @param venue
     * @param callback
     */
    public detail(authentication: Authentication.Interfaces.IApiKeyAuthentication, venue: Venue.Interfaces.IVenue, callback?: ICallbackFn<Venue.Interfaces.IVenue>): Promise<Venue.Interfaces.IVenue> {
        // Get venue detail
        return this.get({
            path: ["venues", `${venue.id}`],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey }
        }, callback);
    }

    /**
     * Update status
     * @param authentication 
     * @param venue 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public updateStatus(authentication: Authentication.Interfaces.IApiKeyAuthentication, venue: Venue.Interfaces.IVenue, payload: Venue.Methods.UpdateStatus.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Update 
        return this.get({
            path: ["venues", `${venue.id}`, "online"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey },
            payload: payload
        }, callback);
    }

    /**
     * Update opening times
     * @param authentication 
     * @param venue 
     * @param payload 
     * @param callback 
     * @returns 
     */
    public updateOpeningTimes(authentication: Authentication.Interfaces.IApiKeyAuthentication, venue: Venue.Interfaces.IVenue, payload: Venue.Methods.UpdateOpeningTimes.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Update 
        return this.get({
            path: ["venues", `${venue.id}`, "opening-hours"],
            authentication: { ...authentication, type: Authentication.Enums.Type.ApiKey },
            payload: payload
        }, callback);
    }
}