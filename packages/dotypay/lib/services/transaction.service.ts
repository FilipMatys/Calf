// Namespaces
import { Common } from "../namespaces/common.namespace";
import { Sale } from "../namespaces/sale.namespace";

// Services
import { BaseService } from "./base.service";

/**
 * Transaction service
 * @description Service for handling transactions
 */
export class TransactionService extends BaseService {

    /**
     * Sale
     * @param data 
     */
    public async sale(data: Sale.Interfaces.IOperationData): Promise<Sale.Interfaces.IResponse> {
        // Init request
        const request: Sale.Interfaces.IRequest = { MessageHeader: {}, PaymentRequest: {} };

        // Build header
        request.MessageHeader.MessageCategory = Common.Enums.MessageCategory.Payment;
        request.MessageHeader.MessageClass = Common.Enums.MessageClass.Service;
        request.MessageHeader.MessageType = Common.Enums.MessageType.Request;
        request.MessageHeader.POIID = this.config.POIID;
        request.MessageHeader.ProtocolVersion = this.config.ProtocolVersion;
        request.MessageHeader.SaleID = this.config.SaleID;
        request.MessageHeader.ServiceID = await this.config.GenerateUuidFn();

        // Set payment data
        request.PaymentRequest.PaymentData = { PaymentType: Sale.Enums.PaymentType.Normal };

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
        request.PaymentRequest.SaleData.SaleTransactionID.TransactionID = data.UUID;

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