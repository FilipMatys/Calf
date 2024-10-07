// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";

// Namespaces
import { Venue } from "../namespaces/venue.namespace";

// Services
import { RequestService } from "./request.service";

/**
 * Venue service
 * @description Service to handle Venues
 */
export class VenueService extends RequestService {

    /**
     * Get venue
     * @param venue
     * @param callback
     */
    public detail(venue: Venue.Interfaces.IVenue, callback?: ICallbackFn<Venue.Interfaces.IVenue>): Promise<Venue.Interfaces.IVenue> {
        // Get venue detail
        return this.get(["venues", `${venue.id}`], null, callback);
    }

    /**
     * Update status
     * @param venue 
     * @param payload 
     * @param callback 
     */
    public updateStatus(venue: Venue.Interfaces.IVenue, payload: Venue.Methods.UpdateStatus.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Update 
        return this.get(["venues", `${venue.id}`, "online"], payload, callback);
    }

    /**
     * Opening times
     * @param venue 
     * @param payload 
     * @param callback 
     */
    public updateOpeningTimes(venue: Venue.Interfaces.IVenue, payload: Venue.Methods.UpdateOpeningTimes.IPayload, callback?: ICallbackFn<void>): Promise<void> {
        // Update 
        return this.get(["venues", `${venue.id}`, "opening-hours"], payload, callback);
    }
}