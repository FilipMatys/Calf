// External modules
import { Observable, Subject } from "rxjs";

// Interfaces
import { IAbraConfig } from "../interfaces/config.interface";

// Classes
import { AbraConfig } from "./config.class";

// Services
import { ApiService } from "../services/api.service";

/**
 * Abra client
 */
export class AbraClient {

    /**
     * API
     * @description API service
     */
    private static _api: ApiService = new ApiService();

    /**
     * API
     * @description API service
     */
    public static get Api(): ApiService {
        // Get service instance
        return this._api;
    }

    /**
     * Disable constructor
     * @description Make client a singleton
     */
    private constructor() { }

    // Helios client change source
    private static changeSource: Subject<IAbraConfig> = new Subject<IAbraConfig>();
    public static readonly change$: Observable<IAbraConfig> = AbraClient.changeSource.asObservable();

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IAbraConfig): void {
        // Initialize config
        AbraConfig.initialize(config);

        // Emit change
        this.changeSource.next(config);
    }
}