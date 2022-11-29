// Interfaces
import { IRefundRequest } from "./interfaces/request.interface";
import { IRefundResponse } from "./interfaces/response.interface";

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
import { CardNumberField } from "../../fields/data/card-number.field";

// Operations
import { CommonOperation } from "../common/common.operation";

/**
 * Refund operation
 * @description Operation for refund
 */
export class RefundOperation extends CommonOperation<IRefundRequest, IRefundResponse> {

    /**
     * Execute refund
     * @param request
     * @returns 
     */
    public async execute(request: IRefundRequest): Promise<IRefundResponse> {
        // Init result
        const result: IRefundResponse = { timestamp: new Date() };

        try {
            // First init message
            const message = new Message();

            // Assign header values
            message.getHeader().protocolType.setData("B0");
            message.getHeader().protocolVersion.setData(1);

            // Assign date time
            message.getHeader().dateTime.setDataFromDate(result.timestamp);

            // Add transaction type
            message.appendDataField(new TransactionTypeField(TransactionType.Refund));
            // Add paid amount field
            message.appendDataField(new PaidAmountField(request.amount));

            // Check for reference number
            if (request.referenceNumber) {
                // Append reference number field
                message.appendDataField(new ReferenceNumberField(request.referenceNumber));
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

                // Shutdown connection
                await this._socket.shutdown();

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

            // Check response data
            const responseCodeField = response.getDataFieldByIdentifier<ResponseCodeField>(ResponseCodeField.Identifier);
            const authorizationCodeField = response.getDataFieldByIdentifier<AuthorizationCodeField>(AuthorizationCodeField.Identifier);

            // Check response code
            responseCodeField && (result.responseCode = responseCodeField.getData());

            // Check authorization code
            authorizationCodeField && (result.authorizationCode = authorizationCodeField.getData());

            // Shutdown connection
            await this._socket.shutdown();
        }
        catch (e) {
            // Log error
            console.error(e);
        }
        finally {
            // Return result
            return result;
        }

    }
}