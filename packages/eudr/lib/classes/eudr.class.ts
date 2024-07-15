// Services
import { SoapService } from "../services/soap.service";

/**
 * EUDR
 */
export class EUDR {

    /**
     * Soap service
     * @description Service for making Soap requests
     */
    public static get Soap(): SoapService {
        // Return soap service
        return this.soapService;
    }

    /**
     * Soap service
     * @description Service for making Soap requests
     */
    private static soapService: SoapService;


    /**
     * Initialize
     * @param config 
     */
    public static initialize(config: any): void {
        // Create service
        this.soapService = new SoapService(config);
    }
}