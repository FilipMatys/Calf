// External modules
import fetch from "node-fetch";

// Interfaces
import { IEconomicSubject } from "../interfaces/economic-subject.interface";

/**
 * Economic subjects service
 * @description Service for Economic subjects
 */
export class EconomicSubjectsService {

    /**
     * API path
     * @description Path to API
     */
    private readonly apiPath: string[] = ["https://ares.gov.cz/ekonomicke-subjekty-v-be/rest"];

    /**
     * Service path
     * @description Path to service
     */
    private readonly servicePath: string[] = ["ekonomicke-subjekty"];

    /**
     * Return economic subject
     * @param tin 
     */
    public async returnEconomicSubject(tin: string): Promise<IEconomicSubject> {
        // Make request
        const response = await fetch([...this.apiPath, ...this.servicePath, tin].join("/"), { method: "get" });

        // Return result
        return response.json();
    } 
}