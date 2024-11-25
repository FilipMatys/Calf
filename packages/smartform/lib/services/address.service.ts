// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";

// Namespaces
import { Address } from "../namespaces/address.namespace";

// Services
import { RequestService } from "./request.service";

/**
 * Address service
 * @description Service for Addresses
 */
export class AddressService extends RequestService {

    /**
     * Validate
     * @param body 
     * @param callback 
     */
    public async validate(body: Address.Interfaces.IValidateRequest, callback?: ICallbackFn<Address.Interfaces.IValidateResponse>): Promise<Address.Interfaces.IValidateResponse> {
        // Make request
        return this.post(["validateAddress", "v10"], body, callback);
    }
}