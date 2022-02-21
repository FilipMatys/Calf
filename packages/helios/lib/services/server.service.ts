// Interfaces
import { IHeliosStringResult } from "../interfaces/results/string.interface";

// Constants
import { HeliosRequestMethod } from "../constants/request-method.const";

// Enums
import { HeliosServerMethod } from "../enums/server-method.enum";

// Classes
import { HeliosRuntime } from "../classes/runtime.class";

// Services
import { RequestService } from "./request.service";

// Utilities
import { Debug } from "../utilities/debug.utility";
import { Queue } from "../utilities/queue.utility";

/**
 * EServer
 * @description Service for executing general 
 * eServer methods
 */
export class EServerService extends RequestService {

    // Runtime dependency flag
    protected readonly isRuntimeDependent: boolean = false;

    /**
     * Get version
     * @description Get current version 
     * of the eServer installation
     */
    public async getVersion(): Promise<IHeliosStringResult> {
        // Log queue
        Debug.log(new Date(), HeliosServerMethod.GetEServerVersion, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(HeliosRuntime.create(), "GetEServerVersion", undefined, undefined, { method: HeliosRequestMethod.Get }));
    }
}