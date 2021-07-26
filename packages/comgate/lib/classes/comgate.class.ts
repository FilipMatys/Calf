// Interfaces
import { IComGateConfig } from "../interfaces/config.interface";
import { IConfirmPayload } from "../interfaces/confirm-payload.interface";
import { IConfirmResponse } from "../interfaces/confirm-response.interface";
import { IInfoResponse } from "../interfaces/info-response.interface";
import { IResultPayload } from "../interfaces/result-payload.interface";
import { IStartClosingPayload } from "../interfaces/start-closing-payload.interface";
import { IStartPaymentPayload } from "../interfaces/start-payment-payload.interface";
import { IStartRefundPayload } from "../interfaces/start-refund-payload.interface";
import { IStartReversePayload } from "../interfaces/start-reverse-payload.interface";
import { IStatusPayload } from "../interfaces/status-payload.interface";
import { IStatusResponse } from "../interfaces/status-response.interface";
import { ITerminalStatusPayload } from "../interfaces/terminal-status-payload.interface";
import { ITerminalStatusResponse } from "../interfaces/terminal-status-response.interface";
import { ITransactionResponse } from "../interfaces/transaction-response.interface";
import { ITransactionResultResponse } from "../interfaces/transaction-result-response.interface";

// Services
import { RequestService } from "../services/request.service";

/**
 * ComGate
 * @description 
 */
export class ComGate {

    /**
     * Config
     * @description Configuration
     */
    protected config: IComGateConfig;

    /**
     * Service
     * @description Service to make requests
     */
    protected service: RequestService;

    /**
     * Initialize
     * @param config
     * @param service
     */
    public init(config: IComGateConfig, service: RequestService): void {
        // Assign config
        this.config = config;

        // Assign service
        this.service = service;
    }

    /**
     * Info
     * @description Search local network and find terminal
     */
    public async info(): Promise<IInfoResponse> {
        // Make get request
        return this.service.get([this.host(), "info"].join("/"));
    }

    /**
     * Terminal
     * @description Check terminal status
     * @param payload 
     */
    public async terminal(payload: ITerminalStatusPayload): Promise<ITerminalStatusResponse> {
        // Add secure string to payload
        payload.secureString = payload.secureString || this.config.password;

        // Make post request
        return this.service.post([this.host(), "terminal"].join("/"), payload);
    }

    /**
     * Payment
     * @description Start payment
     * @param payload 
     */
    public async payment(payload: IStartPaymentPayload): Promise<ITransactionResponse> {
        // Add secure string to payload
        payload.secureString = payload.secureString || this.config.password;

        // Make post request
        return this.service.post([this.host(), "payment"].join("/"), payload);
    }

    /**
     * Refund
     * @description Start refund
     * @param payload 
     */
    public async refund(payload: IStartRefundPayload): Promise<ITransactionResponse> {
        // Add secure string to payload
        payload.secureString = payload.secureString || this.config.password;

        // Make post request
        return this.service.post([this.host(), "refund"].join("/"), payload);
    }

    /**
     * Reverse
     * @description Start payment reverse
     * @param payload 
     * @returns 
     */
    public async reverse(payload: IStartReversePayload): Promise<ITransactionResponse> {
        // Add secure string to payload
        payload.secureString = payload.secureString || this.config.password;

        // Make post request
        return this.service.post([this.host(), "reverse"].join("/"), payload);
    }

    /**
     * Closing
     * @description Start closing
     * @param payload 
     * @returns 
     */
    public async closing(payload: IStartClosingPayload): Promise<ITransactionResponse> {
        // Add secure string to payload
        payload.secureString = payload.secureString || this.config.password;

        // Make post request
        return this.service.post([this.host(), "closing"].join("/"), payload);
    }

    /**
     * Status
     * @description Get transaction status
     * @param payload 
     */
    public async status(payload: IStatusPayload): Promise<IStatusResponse> {
        // Add secure string to payload
        payload.secureString = payload.secureString || this.config.password;

        // Make post request
        return this.service.post([this.host(), "status"].join("/"), payload);
    }

    /**
     * Result
     * @description Get transaction result
     * @param payload 
     * @returns 
     */
    public async result<TResult extends ITransactionResultResponse>(payload: IResultPayload): Promise<TResult> {
        // Add secure string to payload
        payload.secureString = payload.secureString || this.config.password;

        // Make post request
        return this.service.post([this.host(), "result"].join("/"), payload);
    }

    /**
     * Confirm
     * @description Confirm payment
     * @param payload 
     */
    public async confirm(payload: IConfirmPayload): Promise<IConfirmResponse> {
        // Add secure string to payload
        payload.secureString = payload.secureString || this.config.password;

        // Make post request
        return this.service.post([this.host(), "confirm"].join("/"), payload);
    }

    /**
     * Host
     * @description Host getter
     */
    protected host(): string {
        // Return host
        return `${this.config.url}:${this.config.port}/paya`;
    }
}