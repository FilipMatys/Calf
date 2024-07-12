// Interfaces
import { ICuzkConfig } from "../interfaces/config.interface";

// Services
import { ParcelService } from "../services/parcel.service";
import { WFSService } from "../services/wfs.service";

/**
 * CUZK
 * @description CUZK client
 */
export abstract class Cuzk {

    // Singleton
    private constructor() { }

    // Parcel service
    private static parcelService: ParcelService;

    // WFS service
    private static wfsService: WFSService;

    /**
     * Parcel
     * @description Get coordinates and location for given geographic entity
     */
    public static get Parcel(): ParcelService {
        // Return parcel service
        return this.parcelService;
    }

    /**
     * WFS
     * @description Get features
     */
    public static get WFS(): WFSService {
        // Return wfs service
        return this.wfsService;
    }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: ICuzkConfig): void {
        // Create services
        this.parcelService = new ParcelService({ host: config.apiHost, key: config.apiKey, headers: { "Content-type": "application/json" } });
        this.wfsService = new WFSService({ host: config.wfsHost, headers: {} });
    }
}