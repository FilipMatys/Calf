// Interfaces
import { IEcomailConfig } from "../interfaces/config.interface";

// Services
import { ListsService } from "../services/lists.service";
import { SubscribersService } from "../services/subscribers.service";
import { TransactionalService } from "../services/transactional.service";

/**
 * Ecomail
 * @description 
 */
export class Ecomail {

    /**
     * Lists
     * @description Access list entities
     */
    public static get Lists(): ListsService {
        // Return lists service
        return this.listsService;
    }

    // Lists service instance
    private static listsService: ListsService;

    /**
     * Transactional
     * @description Access transactions functionality
     */
    public static get Transactional(): TransactionalService {
        // Return transaction service
        return this.transactionalService;
    }

    // Transactional service
    private static transactionalService: TransactionalService;

    /**
     * Subscribers
     * @description Access subscriber entities
     */
    public static get Subscribers(): SubscribersService {
        // Return subscribers service
        return this.subscribersService;
    }

    // Subscribers service
    private static subscribersService: SubscribersService;

    /**
     * Disable constructor
     */
    private constructor() { }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IEcomailConfig): void {
        // Create services
        this.listsService = new ListsService(config);
        this.transactionalService = new TransactionalService(config);
        this.subscribersService = new SubscribersService(config);
    }
}