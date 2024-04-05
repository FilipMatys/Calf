// Interfaces
import { Accounts } from "../interfaces/accounts.interface";
import { ICallbackFn } from "../interfaces/callback.interface";

// Services
import { RequestService } from "./request.service";

/**
 * Accounts service
 * @description Client's own accounts information
 */
export class AccountsService extends RequestService {

    /**
     * List
     * @description Get list of accounts
     * @param params 
     * @param callback 
     * @returns 
     */
    public list(params: Accounts.List.IParams, callback?: ICallbackFn<Accounts.List.IResponse>): Promise<Accounts.List.IResponse> {
        // Make request
        return this.get(["api", "v3", "vip", "aisp", "my", "accounts"], params, callback);
    }

    /**
     * Balance
     * @description Get account balance
     * @param id 
     * @param params 
     * @param callback 
     */
    public balance(id: string, params: any, callback?: ICallbackFn<any>): Promise<any> {
        // Make request
        return this.get(["api", "v3", "vip", "aisp", "my", "accounts", id, "balance"], params, callback);
    }

    /**
     * Transactions
     * @description Get account transactions
     * @param id 
     * @param params 
     * @param callback 
     */
    public transactions(id: string, params: any, callback?: ICallbackFn<any>): Promise<any> {
        // Make request
        return this.get(["api", "v3", "vip", "aisp", "my", "accounts", id, "transactions"], params, callback);
    }
}