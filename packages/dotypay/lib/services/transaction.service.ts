// Namespaces
import { TransactionStatus } from "../namespaces/transaction-status.namespace";
import { Reversal } from "../namespaces/reversal.namespace";
import { Common } from "../namespaces/common.namespace";
import { Payment } from "../namespaces/payment.namespace";

// Services
import { BaseService } from "./base.service";

/**
 * Transaction service
 * @description Service for handling transactions
 */
export class TransactionService extends BaseService {

    /**
     * Status
     * @description Get transaction status
     * @param data 
     * @returns 
     */
    public async status<TBody>(data: TransactionStatus.Interfaces.IRequestData): Promise<TransactionStatus.Interfaces.IResponse<TBody>> {
        // Init request
        const request: TransactionStatus.Interfaces.IRequest = { MessageHeader: {}, TransactionStatusRequest: {} };

        // Build header
        request.MessageHeader.MessageCategory = Common.Enums.MessageCategory.TransactionStatus;
        request.MessageHeader.MessageClass = Common.Enums.MessageClass.Service;
        request.MessageHeader.MessageType = Common.Enums.MessageType.Request;
        request.MessageHeader.POIID = this.config.POIID;
        request.MessageHeader.ProtocolVersion = this.config.ProtocolVersion;
        request.MessageHeader.SaleID = this.config.SaleID;
        request.MessageHeader.ServiceID = data.ServiceID || await this.config.GenerateUuidFn();

        // Init data
        request.TransactionStatusRequest = { MessageReference: {} };

        // Assign data
        request.TransactionStatusRequest.MessageReference.MessageCategory = data.MessageCategory;
        request.TransactionStatusRequest.MessageReference.SaleID = data.SaleID || this.config.SaleID;
        request.TransactionStatusRequest.MessageReference.ServiceID = data.ServiceID || request.MessageHeader.ServiceID;

        // Init headers
        const headers: Common.Interfaces.IHttpHeaders = {};

        // Set headers
        headers["Authorization"] = `Bearer ${this.config.Token}`;
        headers["Content-Type"] = "application/json";
        headers["Content-Length"] = JSON.stringify(request).length;
        headers["Connection"] = "keep-alive";

        // Make request
        return this.config.Service.post(`${this.host}`, headers, { SaleToPOIRequest: request });
    }

    /**
     * Reversal
     * @param data 
     */
    public async reversal(data: Reversal.Interfaces.IRequestData): Promise<Reversal.Interfaces.IResponse> {
        // Init request
        const request: Reversal.Interfaces.IRequest = { MessageHeader: {}, ReversalRequest: {} };

        // Build header
        request.MessageHeader.MessageCategory = Common.Enums.MessageCategory.Reversal;
        request.MessageHeader.MessageClass = Common.Enums.MessageClass.Service;
        request.MessageHeader.MessageType = Common.Enums.MessageType.Request;
        request.MessageHeader.POIID = this.config.POIID;
        request.MessageHeader.ProtocolVersion = this.config.ProtocolVersion;
        request.MessageHeader.SaleID = this.config.SaleID;
        request.MessageHeader.ServiceID = await this.config.GenerateUuidFn();

        // Init transaction information
        request.ReversalRequest.OriginalPOITransaction = { POITransactionID: {} };

        // Assign transaction information
        request.ReversalRequest.OriginalPOITransaction.POITransactionID.TransactionID = data.TransactionID;
        request.ReversalRequest.OriginalPOITransaction.POITransactionID.TimeStamp = new Date(data.TimeStamp).toISOString();

        // Set reason
        request.ReversalRequest.ReversalReason = data.ReversalReason;

        // Init proprietary tags
        request.ReversalRequest.ProprietaryTags = {};

        // Init headers
        const headers: Common.Interfaces.IHttpHeaders = {};

        // Set headers
        headers["Authorization"] = `Bearer ${this.config.Token}`;
        headers["Content-Type"] = "application/json";
        headers["Content-Length"] = JSON.stringify(request).length;
        headers["Connection"] = "keep-alive";

        // Make request
        return this.config.Service.post(`${this.host}`, headers, { SaleToPOIRequest: request });
    }

    /**
     * Refund
     * @param data 
     */
    public async refund(data: Payment.Interfaces.IRequestData): Promise<Payment.Interfaces.IResponse> {
        // Init request
        const request: Payment.Interfaces.IRequest = { MessageHeader: {}, PaymentRequest: {} };

        // Build header
        request.MessageHeader.MessageCategory = Common.Enums.MessageCategory.Payment;
        request.MessageHeader.MessageClass = Common.Enums.MessageClass.Service;
        request.MessageHeader.MessageType = Common.Enums.MessageType.Request;
        request.MessageHeader.POIID = this.config.POIID;
        request.MessageHeader.ProtocolVersion = this.config.ProtocolVersion;
        request.MessageHeader.SaleID = this.config.SaleID;
        request.MessageHeader.ServiceID = await this.config.GenerateUuidFn();

        // Set payment data
        request.PaymentRequest.PaymentData = { PaymentType: Payment.Enums.PaymentType.Refund };

        // Init payment transaction
        request.PaymentRequest.PaymentTransaction = { AmountsReq: {}, ProprietaryTags: {}, OriginalPOITransaction: { POITransactionID: {} } };

        // Set amount
        request.PaymentRequest.PaymentTransaction.AmountsReq.Currency = data.Currency;
        request.PaymentRequest.PaymentTransaction.AmountsReq.RequestedAmount = data.Amount;

        // Init transaction information
        request.PaymentRequest.PaymentTransaction.OriginalPOITransaction = { POITransactionID: {} };

        // Assign transaction information
        request.PaymentRequest.PaymentTransaction.OriginalPOITransaction.POITransactionID.TransactionID = data.TransactionID;
        request.PaymentRequest.PaymentTransaction.OriginalPOITransaction.POITransactionID.TimeStamp = new Date(data.TimeStamp).toISOString();

        // Init sale data
        request.PaymentRequest.SaleData = { SaleTransactionID: {} };

        // Set transaction id
        request.PaymentRequest.SaleData.SaleTransactionID.TimeStamp = new Date(data.TimeStamp).toISOString();
        request.PaymentRequest.SaleData.SaleTransactionID.TransactionID = data.TransactionID;

        // Init headers
        const headers: Common.Interfaces.IHttpHeaders = {};

        // Set headers
        headers["Authorization"] = `Bearer ${this.config.Token}`;
        headers["Content-Type"] = "application/json";
        headers["Content-Length"] = JSON.stringify(request).length;
        headers["Connection"] = "keep-alive";

        // Make request
        return this.config.Service.post(`${this.host}`, headers, { SaleToPOIRequest: request });
    }

    /**
     * Sale
     * @param data 
     */
    public async sale(data: Payment.Interfaces.IRequestData): Promise<Payment.Interfaces.IResponse> {
        // Init request
        const request: Payment.Interfaces.IRequest = { MessageHeader: {}, PaymentRequest: {} };

        // Build header
        request.MessageHeader.MessageCategory = Common.Enums.MessageCategory.Payment;
        request.MessageHeader.MessageClass = Common.Enums.MessageClass.Service;
        request.MessageHeader.MessageType = Common.Enums.MessageType.Request;
        request.MessageHeader.POIID = this.config.POIID;
        request.MessageHeader.ProtocolVersion = this.config.ProtocolVersion;
        request.MessageHeader.SaleID = this.config.SaleID;
        request.MessageHeader.ServiceID = await this.config.GenerateUuidFn();

        // Set payment data
        request.PaymentRequest.PaymentData = { PaymentType: Payment.Enums.PaymentType.Normal };

        // Init payment transaction
        request.PaymentRequest.PaymentTransaction = { AmountsReq: {}, ProprietaryTags: {} };

        // Set amount
        request.PaymentRequest.PaymentTransaction.AmountsReq.Currency = data.Currency;
        request.PaymentRequest.PaymentTransaction.AmountsReq.RequestedAmount = data.Amount;

        // Set proprietary tags
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.AskForTip = !!data.AskForTip;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.CustomIdentifier = data.CustomIdentifier;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.EnterTipAsTargetAmount = !!data.EnterTipAsTargetAmount;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.VariableSymbol = data.VariableSymbol;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.ForceCustomTip = false;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.RequireTipConfirmation = false;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.AskForVariableSymbol = false;

        // Init sale data
        request.PaymentRequest.SaleData = { SaleTransactionID: {} };

        // Set transaction id
        request.PaymentRequest.SaleData.SaleTransactionID.TimeStamp = new Date(data.TimeStamp).toISOString();
        request.PaymentRequest.SaleData.SaleTransactionID.TransactionID = data.TransactionID;

        // Init headers
        const headers: Common.Interfaces.IHttpHeaders = {};

        // Set headers
        headers["Authorization"] = `Bearer ${this.config.Token}`;
        headers["Content-Type"] = "application/json";
        headers["Content-Length"] = JSON.stringify(request).length;
        headers["Connection"] = "keep-alive";

        // Make request
        return this.config.Service.post(`${this.host}`, headers, { SaleToPOIRequest: request });
    }
}