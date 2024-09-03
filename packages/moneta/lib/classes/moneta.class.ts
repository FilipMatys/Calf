// Interfaces
import { IMonetaConfig } from "../interfaces/config.interface";

// Services
import { AccountsService } from "../services/accounts.service";

/**
 * Moneta
 * @description Moneta client
 */
export abstract class Moneta {

    // Singleton
    private constructor() { }

    // Accounts service
    private static accountsService: AccountsService;

    /**
     * Accounts
     * @description 
     * @returns 
     */
    public static get Accounts(): AccountsService {
        // Return accounts service
        return this.accountsService;
    }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: IMonetaConfig): void {
        // Create services
        this.accountsService = new AccountsService(config);
    }
}