// Interfaces
import { ISaleRequest } from "./interfaces/request.interface";
import { ISaleResponse } from "./interfaces/response.interface";

// Enums
import { TransactionType } from "../../enums/transaction-type.enum";

// Classes
import { Message } from "../../classes/message.class";

// Fields
import { PaidAmountField } from "../../fields/data/paid-amount.field";
import { TransactionTypeField } from "../../fields/data/transaction-type.field";
import { ReferenceNumberField } from "../../fields/data/reference-number.field";
import { AuthorizationCodeField } from "../../fields/data/authorization-code.field";
import { ResponseCodeField } from "../../fields/data/response-code.field";
import { SequenceNumberField } from "../../fields/data/sequence-number.field";
import { CardNumberField } from "../../fields/data/card-number.field";
import { TipAmountField } from "../../fields/data/tip-amount.field";

// Operations
import { CommonOperation } from "../common/common.operation";

/**
 * Sale operation
 * @description Operation for basic sale
 */
export class SaleOperation extends CommonOperation<ISaleRequest, ISaleResponse> {

    /**
     * Execute sale
     * @param request 
     */
    public async execute(request: ISaleRequest): Promise<ISaleResponse> {
        // Init result
        const result: ISaleResponse = { timestamp: new Date() };

        try {
            // First init message
            const message = new Message();

            // Assign header values
            message.getHeader().protocolType.setData("B0");
            message.getHeader().protocolVersion.setData(1);

            // Assign date time
            message.getHeader().dateTime.setDataFromDate(result.timestamp);

            // Add transaction type
            message.appendDataField(new TransactionTypeField(TransactionType.Sale));
            // Add paid amount field
            message.appendDataField(new PaidAmountField(request.amount));

            // Check for tip
            request.tip && message.appendDataField(new TipAmountField(request.tip));

            // Check for reference number
            request.referenceNumber && message.appendDataField(new ReferenceNumberField(request.referenceNumber));

            // Finalize
            message.finalize();

            // Connect to socket
            await this._socket.connect(this._url, this._port);

            // Request 
            const confirmation = await this.processRequest(message);

            // Check confirmation
            if (!confirmation.isConfirmationMessage()) {
                // Get response code field
                const responseCodeField = confirmation.getDataFieldByIdentifier<ResponseCodeField>(ResponseCodeField.Identifier);

                // Check response code
                responseCodeField && (result.responseCode = responseCodeField.getData());

                // Return result
                return result;
            }

            // Set result as confirmed
            result.isConfirmed = true;

            // Response
            const response = await this.processResponse(message, [
                AuthorizationCodeField.Identifier,
                CardNumberField.Identifier,
                ResponseCodeField.Identifier,
                TransactionTypeField.Identifier
            ]);

            // Get response fields
            const paidAmountField = response.getDataFieldByIdentifier<PaidAmountField>(PaidAmountField.Identifier);
            const tipAmountField = response.getDataFieldByIdentifier<TipAmountField>(TipAmountField.Identifier);
            const responseCodeField = response.getDataFieldByIdentifier<ResponseCodeField>(ResponseCodeField.Identifier);
            const authorizationCodeField = response.getDataFieldByIdentifier<AuthorizationCodeField>(AuthorizationCodeField.Identifier);
            const sequenceNumberField = response.getDataFieldByIdentifier<SequenceNumberField>(SequenceNumberField.Identifier);
            const cardNumberField = response.getDataFieldByIdentifier<CardNumberField>(CardNumberField.Identifier);

            // Check response code
            responseCodeField && (result.responseCode = responseCodeField.getData());

            // Check authorization code
            authorizationCodeField && (result.authorizationCode = authorizationCodeField.getData());

            // Check paid amount
            paidAmountField && (result.amount = paidAmountField.getData());

            // Check for tip amount
            tipAmountField && (result.tip = tipAmountField.getData());

            // Check sequence number field
            sequenceNumberField && (result.sequenceNumber = sequenceNumberField.getData());

            // Check card number
            cardNumberField && (result.cardNumber = cardNumberField.getData());

            // Set signature requirement flag
            result.isSignatureRequired = !!response.getHeader().tags.getData().checkForCardHoldersSignature;

            // Set terminal id
            result.terminalID = response.getHeader().terminalID.getData();
        }
        catch (e) {
            // Log error
            console.error(e);
        }
        finally {
            // Shutdown connection
            await this._socket.shutdown();

            // Return result
            return result;
        }
    }
}