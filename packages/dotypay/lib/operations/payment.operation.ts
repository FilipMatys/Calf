// Moment
import * as Moment from "moment";

// Namespaces
import { Common } from "../namespaces/common.namespace";
import { Payment } from "../namespaces/payment.namespace";

// Operations
import { CommonOperation } from "./common.operation";

/**
 * Payment operation
 * @description Operation that executes payment
 */
export class PaymentOperation extends CommonOperation<Payment.Interfaces.IOperationData, Payment.Interfaces.IResponse> {

    /**
     * Execute
     */
    public execute(): Promise<Payment.Interfaces.IResponse> {
        // Init request
        const request: Payment.Interfaces.IRequest = { MessageHeader: {}, PaymentRequest: {} };

        // Build header
        request.MessageHeader.MessageCategory = Common.Enums.MessageCategory.Payment;
        request.MessageHeader.MessageClass = Common.Enums.MessageClass.Service;
        request.MessageHeader.MessageType = Common.Enums.MessageType.Request;
        request.MessageHeader.POIID = this.config.POIID;
        request.MessageHeader.ProtocolVersion = this.config.ProtocolVersion;
        request.MessageHeader.SaleID = this.config.SaleID;
        request.MessageHeader.ServiceID = this.config.ServiceID;

        // Set payment data
        request.PaymentRequest.PaymentData = { PaymentType: Payment.Enums.PaymentType.Normal };

        // Init payment transaction
        request.PaymentRequest.PaymentTransaction = { AmountsReq: {}, ProprietaryTags: {} };

        // Set amount
        request.PaymentRequest.PaymentTransaction.AmountsReq.Currency = this.data.Currency;
        request.PaymentRequest.PaymentTransaction.AmountsReq.RequestedAmount = this.data.Amount;

        // Set proprietary tags
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.AskForTip = !!this.data.AskForTip;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.CustomIdentifier = this.data.CustomIdentifier;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.EnterTipAsTargetAmount = !!this.data.EnterTipAsTargetAmount;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.VariableSymbol = this.data.VariableSymbol;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.ECRPrint = false;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.ForceCustomTip = false;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.RequireTipConfirmation = false;
        request.PaymentRequest.PaymentTransaction.ProprietaryTags.AskForVariableSymbol = false;

        // Init sale data
        request.PaymentRequest.SaleData = { SaleTransactionID: {} };

        // Set transaction id
        request.PaymentRequest.SaleData.SaleTransactionID.TimeStamp = Moment(this.data.TimeStamp).format();
        request.PaymentRequest.SaleData.SaleTransactionID.TransactionID = this.data.UUID;

        // Init headers
        const headers: Common.Interfaces.IHttpHeaders = {};

        // Set headers
        headers["Authorization"] = `Bearer ${this.config.Token}`;
        headers["Content-Type"] = "application/json";
        headers["Content-Length"] = JSON.stringify(request).length;

        // Make request
        return this.service.post(`${this.config.Url}:${this.config.Port}`, headers, request);
    }
}