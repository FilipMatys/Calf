// Interfaces
import { ICuzkConfig } from "../interfaces/config.interface";

// Services
import { ParcelService } from "../services/parcel.service";

/**
 * CUZK
 * @description CUZK client
 */
export abstract class CUZK {

    // Singleton
    private constructor() { }

    // Parcel service
    private static parcelService: ParcelService;

    /**
     * Parcel
     * @description Get coordinates and location for given geographic entity
     */
    public static get Parcel(): ParcelService {
        // Return parcel service
        return this.parcelService;
    }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: ICuzkConfig): void {
        // Create services
        this.parcelService = new ParcelService(config);
    }
}