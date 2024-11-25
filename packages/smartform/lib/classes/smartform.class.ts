// Interfaces
import { ISmartformConfig } from "../interfaces/config.interface";

// Services
import { AddressService } from "../services/address.service";

/**
 * Smartform
 * @description Smartform client
 */
export abstract class Smartform {

    /**
     * Constructor
     * @description Make the class a singleton
     */
    private constructor() { }

    // Address service
    private static addressService: AddressService;

    /**
     * Address
     * @description Address based methods
     */
    public static get Address(): AddressService {
        return this.addressService;
    }

    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: ISmartformConfig) {
        // Create services
        this.addressService = new AddressService(config);
    }
}