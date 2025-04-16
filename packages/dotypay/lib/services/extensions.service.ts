// Namespaces
import { Common } from "../namespaces/common.namespace";
import { TerminalList } from "../namespaces/terminal-list.namespace";

// Services
import { BaseService } from "./base.service";

/**
 * Extensions service
 * @description Service for handling extensions
 */
export class ExtensionsService extends BaseService {

    /**
     * Get terminal list
     * @description Get list of terminals
     */
    public async getTerminalList(): Promise<TerminalList.Interfaces.IResponse> {
        // Init headers
        const headers: Common.Interfaces.IHttpHeaders = {};

        // Assign authorization
        headers["Authorization"] = `Bearer ${this.config.Token}`;

        // Make request
        return this.config.Service.get(`${this.host}/poitermlist`, headers);
    }
}