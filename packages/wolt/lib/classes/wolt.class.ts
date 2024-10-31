// Interfaces
import { IWoltConfig } from "../interfaces/config.interface";

// Services
import { MenuService } from "../services/menu.service";
import { OrderService } from "../services/order.service";
import { VenueService } from "../services/venue.service";

/**
 * Wolt
 * @description Wolt library
 */
export class Wolt {

    /**
     * Order
     * @description Access order endpoints
     */
    public static get Order(): OrderService {
        // Return order service
        return this.orderService;
    }

    /**
     * Venue
     * @description Access venue endpoints
     */
    public static get Venue(): VenueService {
        // Return venue service
        return this.venueService;
    }

    /**
     * Menu
     * @returns 
     */
    public static get Menu(): MenuService {
        // Return menu service
        return this.menuService;
    }

    /**
     * Config
     * @description Configuration
     */
    protected config: IWoltConfig;

    // Order service
    private static orderService: OrderService;

    // Venue service
    private static venueService: VenueService;

    // Menu service
    private static menuService: MenuService;

    // Disable constructor
    private constructor() { }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IWoltConfig): void {
        // Create services
        this.orderService = new OrderService(config);
        this.venueService = new VenueService(config);
        this.menuService = new MenuService(config);
    }
}