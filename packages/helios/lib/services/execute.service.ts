// Interfaces
import { IHeliosBuildBrowseResponseFn } from "../interfaces/functions/build-browse-response.interface";
import { IHeliosGetBrowseSpecialParams } from "../interfaces/params/get-browse-special.interface";
import { IHeliosChangeDatabaseParams } from "../interfaces/params/change-database.interface";
import { IHeliosExternalActionParams } from "../interfaces/params/external-action.interface";
import { IHeliosGetBrowseParams } from "../interfaces/params/get-browse.interface";
import { IHeliosBrowseResult } from "../interfaces/results/browse.interface";
import { IHeliosStringResult } from "../interfaces/results/string.interface";
import { IHeliosRequestConfig } from "../interfaces/configs/request.interface";
import { IHeliosLoginParams } from "../interfaces/params/login.interface";
import { IHeliosBooleanResult } from "../interfaces/results/boolean.interface";
import { IHeliosDataSetResult } from "../interfaces/results/data-set.interface";
import { IHeliosDialogResult } from "../interfaces/results/dialog.interface";
import { IHeliosRunParams } from "../interfaces/params/run.interface";
import { IHeliosResultFields } from "../interfaces/fields.interface";
import { IHeliosParams } from "../interfaces/params/params.interface";
import { IHeliosResult } from "../interfaces/results/result.interface";

// Enums
import { HeliosExecuteMethod } from "../enums/execute-method.enum";

// Classes
import { HeliosConfig } from "../classes/config.class";
import { HeliosRuntime } from "../classes/runtime.class";

// Services
import { RequestService } from "./request.service";

// Utilities
import { Debug } from "../utilities/debug.utility";
import { Queue } from "../utilities/queue.utility";

/**
 * Execute service
 * @description Service for executing methods
 */
export class ExecuteService extends RequestService {

    // Set endpoint
    protected readonly ENDPOINT: string[] = ["Execute"];

    // Runtime dependency flag
    protected readonly isRuntimeDependent: boolean = true;

    /**
     * Login
     * @description Access or create runtime
     * @param runtime 
     * @param params
     * @param config
     */
    public async login(runtime: HeliosRuntime, params: IHeliosLoginParams, config?: IHeliosRequestConfig): Promise<IHeliosStringResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.Login, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.Login, params, null, config));
    }

    /**
     * Logout
     * @description Close given runtime
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async logout(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosBooleanResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.Logout, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.Logout, params, null, config));
    }

    /**
     * Get version
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getVersion(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosStringResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.GetEServerVersion, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.GetEServerVersion, params, null, config));
    }

    /**
     * Get main tree
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getMainTree(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosDataSetResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.GetMainTree, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.GetMainTree, params, null, config));
    }

    /**
     * Get navigation tree
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getNavigationTree(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosDataSetResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.GetNavigationTree, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.GetNavigationTree, params, null, config));
    }

    /**
     * Get databases
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async getDatabases(runtime: HeliosRuntime, params: IHeliosParams, config?: IHeliosRequestConfig): Promise<IHeliosDataSetResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.GetDatabases, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.GetDatabases, params, null, config));
    }

    /**
     * Get browse
     * @param runtime 
     * @param params 
     * @param buildBrowseResponseFn 
     * @param config 
     */
    public async getBrowse(runtime: HeliosRuntime, params: IHeliosGetBrowseParams, buildBrowseResponseFn?: IHeliosBuildBrowseResponseFn<any>, config?: IHeliosRequestConfig): Promise<IHeliosBrowseResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.GetBrowse, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(async () => {
            // Get response
            let response = await this.request(runtime, HeliosExecuteMethod.GetBrowse, params, null, config);

            // Check for build browse response function
            if (!buildBrowseResponseFn) {
                // No need to do anything
                return response;
            }

            // Start loop to call the same browse with response parameters
            for (let index = 0; index < HeliosConfig.browseResponseLimit; index++) {
                // First get response parameters
                const parameters = await buildBrowseResponseFn(response);

                // Check if parameters were built
                if (!parameters) {
                    // Return current response as there are no more
                    // parameters to be sent
                    return response;
                }

                // Log updating the response
                Debug.log(new Date(), HeliosExecuteMethod.GetBrowse, `Resending request with response`);

                // Update response
                response = await this.request(runtime, HeliosExecuteMethod.GetBrowse, params, parameters, config);
            }

            // Return last response
            return response;
        });
    }

    /**
     * Get browse
     * @param runtime 
     * @param params 
     * @param buildBrowseResponseFn 
     * @param config 
     */
    public async getBrowseSpecial(runtime: HeliosRuntime, params: IHeliosGetBrowseSpecialParams, buildBrowseResponseFn?: IHeliosBuildBrowseResponseFn<any>, config?: IHeliosRequestConfig): Promise<IHeliosBrowseResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.GetBrowseSpecial, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(async () => {
            // Get response
            let response = await this.request(runtime, HeliosExecuteMethod.GetBrowseSpecial, params, null, config);

            // Check for build browse response function
            if (!buildBrowseResponseFn) {
                // No need to do anything
                return response;
            }

            // Start loop to call the same browse with response parameters
            for (let index = 0; index < HeliosConfig.browseResponseLimit; index++) {
                // First get response parameters
                const parameters = await buildBrowseResponseFn(response);

                // Check if parameters were built
                if (!parameters) {
                    // Return current response as there are no more
                    // parameters to be sent
                    return response;
                }

                // Log updating the response
                Debug.log(new Date(), HeliosExecuteMethod.GetBrowseSpecial, `Resending request with response`);

                // Update response
                response = await this.request(runtime, HeliosExecuteMethod.GetBrowseSpecial, params, parameters, config);
            }

            // Return last response
            return response;
        });
    }

    /**
     * Change database
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async changeDatabase(runtime: HeliosRuntime, params: IHeliosChangeDatabaseParams, config?: IHeliosRequestConfig): Promise<IHeliosDialogResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.ChangeDatabase, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.ChangeDatabase, params, null, config));
    }

    /**
     * Run procedure
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async runProcedure<TResult>(runtime: HeliosRuntime, params: IHeliosRunParams, config?: IHeliosRequestConfig): Promise<IHeliosResult<IHeliosResultFields<TResult>>> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.RunProcedure, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.RunProcedure, params, null, config));
    }

    /**
     * Run view
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async runView(runtime: HeliosRuntime, params: IHeliosRunParams, config?: IHeliosRequestConfig): Promise<IHeliosDataSetResult> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.RunView, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.RunView, params, null, config));
    }

    /**
     * Run function
     * @param runtime 
     * @param params 
     * @param config 
     */
    public async runFunction<TResult>(runtime: HeliosRuntime, params: IHeliosRunParams, config?: IHeliosRequestConfig): Promise<IHeliosResult<IHeliosResultFields<TResult>>> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.RunFunction, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(() => this.request(runtime, HeliosExecuteMethod.RunFunction, params, null, config));
    }

    /**
     * Run external action
     * @param runtime 
     * @param params 
     * @param buildBrowseResponseFn
     * @param config 
     * @returns 
     */
    public async runExternalAction<TResult>(runtime: HeliosRuntime, params: IHeliosExternalActionParams, buildBrowseResponseFn?: IHeliosBuildBrowseResponseFn<any>, config?: IHeliosRequestConfig): Promise<IHeliosResult<IHeliosResultFields<TResult>>> {
        // Log queue
        Debug.log(new Date(), HeliosExecuteMethod.RunExternalAction, `Queueing request`);

        // Enqueue request
        return Queue.enqueue(async () => {
            // Get response
            let response = await this.request(runtime, HeliosExecuteMethod.RunExternalAction, params, null, config);

            // Check for build browse response function
            if (!buildBrowseResponseFn) {
                // No need to do anything
                return response;
            }

            // Start loop to call the same browse with response parameters
            for (let index = 0; index < HeliosConfig.browseResponseLimit; index++) {
                // First get response parameters
                const parameters = await buildBrowseResponseFn(response);

                // Check if parameters were built
                if (!parameters) {
                    // Return current response as there are no more
                    // parameters to be sent
                    return response;
                }

                // Log updating the response
                Debug.log(new Date(), HeliosExecuteMethod.RunExternalAction, `Resending request with response`);

                // Update response
                response = await this.request(runtime, HeliosExecuteMethod.RunExternalAction, params, parameters, config);
            }

            // Return last response
            return response;
        });
    }

    /**
     * Parse request params
     * @description Parse request params, ensuring
     * it contains needed values and assigning default
     * ones if those values are absent. 
     * @param params 
     */
    protected async parseRequestParams<TParams extends IHeliosParams>(params: TParams): Promise<TParams> {
        // Call super with default params
        return super.parseRequestParams(params, { Version: HeliosConfig.version });
    }
}