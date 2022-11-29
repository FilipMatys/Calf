
// Interfaces
import { ICancellationRequest } from "./interfaces/request.interface";
import { ICancellationResponse } from "./interfaces/response.interface";

// Enums
import { TransactionType } from "../../enums/transaction-type.enum";

// Classes
import { Message } from "../../classes/message.class";

// Fields
import { TransactionTypeField } from "../../fields/data/transaction-type.field";
import { SequenceNumberField } from "../../fields/data/sequence-number.field";
import { TransactionDataField } from "../../fields/data/transaction-data.field";
import { PaidAmountField } from "../../fields/data/paid-amount.field";
import { ResponseCodeField } from "../../fields/data/response-code.field";

// Operations
import { CommonOperation } from "../common/common.operation";

/**
 * Cancellation operation
 * @description 
 */
export class CancellationOperation extends CommonOperation<ICancellationRequest, ICancellationResponse> {

    /**
     * Execute cancellation
     * @param request 
     */
    public async execute(request: ICancellationRequest): Promise<ICancellationResponse> {
        // Init result
        const result: ICancellationResponse = { timestamp: new Date() };

        try {
            // First init message
            const message = new Message();

            // Assign header values
            message.getHeader().protocolType.setData("B0");
            message.getHeader().protocolVersion.setData(1);

            // Assign date time
            message.getHeader().dateTime.setDataFromDate(result.timestamp);

            // Add transaction type
            message.appendDataField(new TransactionTypeField(TransactionType.TransactionCancellationEM));

            // Add cancellation data fields
            message.appendDataField(new PaidAmountField(request.amount));
            message.appendDataField(new TransactionDataField({
                PAN: request.cardNumber,
                sequenceNumber: request.sequenceNumber,
                TID: request.terminalID,
                date: request.date
            }));

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
                ResponseCodeField.Identifier,
                TransactionTypeField.Identifier
            ]);

            // Check response data
            const responseCodeField = response.getDataFieldByIdentifier<ResponseCodeField>(ResponseCodeField.Identifier);

            // Check response code
            responseCodeField && (result.responseCode = responseCodeField.getData());

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