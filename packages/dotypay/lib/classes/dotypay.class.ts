// Namespaces
import { Common } from "../namespaces/common.namespace";

// Services
import { ExtensionsService } from "../services/extensions.service";
import { TransactionService } from "../services/transaction.service";

/**
 * Dotypay
 * @description Dotypay client
 */
export abstract class Dotypay {

    // Transaction service
    private static transactionService: TransactionService;

    // Extensions service
    private static extensionsService: ExtensionsService;

    /**
     * Transaction
     * @description Service to handle transactions
     */
    public static get Transaction(): TransactionService {
        return this.transactionService;
    }

    /**
     * Extensions
     * @description Service to handle extensions
     */
    public static get Extensions(): ExtensionsService {
        return this.extensionsService;
    }

    // Singleton
    private constructor() { }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: Common.Interfaces.IDotypayConfig): void {
        // Create services
        this.transactionService = new TransactionService(config);
        this.extensionsService = new ExtensionsService(config);
    }
}