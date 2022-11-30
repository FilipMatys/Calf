// Interfaces
import { IRepeatLastMessageRequest } from "./interfaces/request.interface";
import { IRepeatLastMessageResponse } from "./interfaces/response.interface";

// Enums
import { TransactionType } from "../../enums/transaction-type.enum";

// Classes
import { Message } from "../../classes/message.class";

// Fields
import { TransactionTypeField } from "../../fields/data/transaction-type.field";
import { TransactionIDField } from "../../fields/data/transaction-id.field";
import { AuthorizationCodeField } from "../../fields/data/authorization-code.field";
import { ResponseCodeField } from "../../fields/data/response-code.field";
import { PaidAmountField } from "../../fields/data/paid-amount.field";
import { SequenceNumberField } from "../../fields/data/sequence-number.field";
import { CardNumberField } from "../../fields/data/card-number.field";

// Operations
import { CommonOperation } from "../common/common.operation";

/**
 * Repeat last message operation
 * @description Operation to check past transactions
 */
export class RepeatLastMessageOperation extends CommonOperation<IRepeatLastMessageRequest, IRepeatLastMessageResponse> {

    /**
     * Execute
     * @param request 
     */
    public async execute(request: IRepeatLastMessageRequest): Promise<IRepeatLastMessageResponse> {
        // Init result
        const result: IRepeatLastMessageResponse = { timestamp: new Date() };

        try {
            // First init message
            const message = new Message();

            // Assign header values
            message.getHeader().protocolType.setData("B0");
            message.getHeader().protocolVersion.setData(1);

            // Assign date time
            message.getHeader().dateTime.setDataFromDate(result.timestamp);

            // Add transaction type
            message.appendDataField(new TransactionTypeField(TransactionType.RepeatLastTransaction));

            // Check for timestamp
            if (request.timestamp) {
                // Append transaction id field
                message.appendDataField(new TransactionIDField(request.timestamp));
            }

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
                ResponseCodeField.Identifier,
                TransactionTypeField.Identifier
            ]);

            // Get response fields
            const responseCodeField = response.getDataFieldByIdentifier<ResponseCodeField>(ResponseCodeField.Identifier);
            const authorizationCodeField = response.getDataFieldByIdentifier<AuthorizationCodeField>(AuthorizationCodeField.Identifier);
            const transactionTypeField = response.getDataFieldByIdentifier<TransactionTypeField>(TransactionTypeField.Identifier);
            const paidAmountField = response.getDataFieldByIdentifier<PaidAmountField>(PaidAmountField.Identifier);
            const sequenceNumberField = response.getDataFieldByIdentifier<SequenceNumberField>(SequenceNumberField.Identifier);
            const cardNumberField = response.getDataFieldByIdentifier<CardNumberField>(CardNumberField.Identifier);

            // Check response code
            responseCodeField && (result.responseCode = responseCodeField.getData());

            // Check authorization code
            authorizationCodeField && (result.authorizationCode = authorizationCodeField.getData());

            // Check for transaction type
            transactionTypeField && (result.transactionType = transactionTypeField.getData());

            // Check paid amount
            paidAmountField && (result.amount = paidAmountField.getData());

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