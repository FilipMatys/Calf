// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { Geocoding } from "../interfaces/geocoding.interface";

// Services
import { RequestService } from "./request.service";

/**
 * Geocoding service
 * @description Get coordinates and location for given geographic entity
 */
export class GeocodingService extends RequestService {

    /**
     * Geocode
     * @param params 
     * @param callback 
     */
    public geocode(params: Geocoding.Geocode.IParams, callback?: ICallbackFn<Geocoding.Geocode.IResponse>): Promise<Geocoding.Geocode.IResponse> {
        // Make request to geocode
        return this.get(["v1", "geocode"], params, callback);
    }
}