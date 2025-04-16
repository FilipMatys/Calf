// Namespaces
import { Common } from "../namespaces/common.namespace";

/**
 * Http service
 * @description Service to execute Http requests
 */
export abstract class HttpService {

    /**
     * Post
     * @param target 
     * @param headers 
     * @param payload 
     */
    public abstract post<TPayload extends Common.Interfaces.IMessageRequest<any>, TResponse>(target: string, headers: Common.Interfaces.IHttpHeaders, payload: TPayload): Promise<TResponse>;

    /**
     * Get
     * @param target 
     * @param headers 
     */
    public abstract get<TResponse>(target: string, headers: Common.Interfaces.IHttpHeaders): Promise<TResponse>;
}