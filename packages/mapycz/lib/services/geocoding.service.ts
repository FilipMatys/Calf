// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";

// Namespaces
import { Geocoding } from "../namespaces/geocoding.namespace";

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
    public geocode(params: Geocoding.Interfaces.IGeocodeParams, callback?: ICallbackFn<Geocoding.Interfaces.IGeocodeResponse>): Promise<Geocoding.Interfaces.IGeocodeResponse> {
        // Make request to geocode
        return this.get(["v1", "geocode"], params, callback);
    }

    /**
     * Reverse
     * @param params 
     * @param callback 
     */
    public reverse(params: Geocoding.Interfaces.IReverseParams, callback?: ICallbackFn<Geocoding.Interfaces.IReverseResponse>): Promise<Geocoding.Interfaces.IReverseResponse> {
        // Make request to reverse
        return this.get(["v1", "rgeocode"], params, callback);
    }

    /**
     * Suggest
     * @param params 
     * @param callback 
     */
    public suggest(params: Geocoding.Interfaces.ISuggestParams, callback?: ICallbackFn<Geocoding.Interfaces.ISuggestResponse>): Promise<Geocoding.Interfaces.ISuggestResponse> {
        // Make request to suggest
        return this.get(["v1", "suggest"], params, callback);
    }
}