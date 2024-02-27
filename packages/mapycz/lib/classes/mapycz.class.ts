// Interfaces
import { IMapyCzConfig } from "../interfaces/config.interface";

// Services
import { GeocodingService } from "../services/geocoding.service";

/**
 * Mapy Cz
 * @description MapyCz client
 */
export abstract class MapyCz {

    // Singleton
    private constructor() { }

    // Geocoding service
    private static geocodingService: GeocodingService;

    /**
     * Geocoding
     * @description Get coordinates and location for given geographic entity
     */
    public static get Geocoding(): GeocodingService {
        // Return geocoding service
        return this.geocodingService;
    }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IMapyCzConfig): void {
        // Create services
        this.geocodingService = new GeocodingService(config);
    }
}