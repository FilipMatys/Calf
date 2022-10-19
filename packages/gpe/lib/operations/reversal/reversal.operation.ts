// Interfaces
import { IReversalRequest } from "./interfaces/request.interface";
import { IReversalResponse } from "./interfaces/response.interface";

// Enums
import { TransactionType } from "../../enums/transaction-type.enum";

// Classes
import { Message } from "../../classes/message.class";

// Fields
import { TransactionTypeField } from "../../fields/data/transaction-type.field";
import { ResponseCodeField } from "../../fields/data/response-code.field";
import { AuthorizationCodeField } from "../../fields/data/authorization-code.field";
import { PaidAmountField } from "../../fields/data/paid-amount.field";

// Operations
import { CommonOperation } from "../common/common.operation";

/**
 * Reversal operation
 * @description Operation to reverse past transaction
 */
export class ReversalOperation extends CommonOperation<IReversalRequest, IReversalResponse> {

    /**
     * Execute reversal
     * @param request 
     */
    public async execute(request: IReversalRequest): Promise<IReversalResponse> {
        // Init result
        const result: IReversalResponse = { timestamp: new Date() };

        try {
            // First init message
            const message = new Message();

            // Assign header values
            message.getHeader().protocolType.setData("B0");
            message.getHeader().protocolVersion.setData(1);

            // Assign date time
            message.getHeader().dateTime.setDataFromDate(result.timestamp);

            // Add transaction type
            message.appendDataField(new TransactionTypeField(TransactionType.Reversal));
            // Add paid amount
            message.appendDataField(new PaidAmountField(request.amount));
            // Add authorization code
            message.appendDataField(new AuthorizationCodeField(request.authorizationCode));

            // Finalize
            message.finalize();

            // Connect to socket
            await this._socket.connect(this._url, this._port);

            // Request 
            const confirmation = await this.processRequest(message);

            // Check confirmation
            if (!confirmation.isConfirmationMessage()) {
                // Get response code field
                const responseCodeField = confirmation.getDataFieldByIdentifier<ResponseCodeField>("R");

                // Check response code
                if (responseCodeField) {
                    // Get field data
                    result.responseCode = responseCodeField.getData();
                }

                // Return result
                return result;
            }

            // Response
            const response = await this.processResponse(message, ["R", "T"]);

            // Check response data
            const responseCodeField = response.getDataFieldByIdentifier<ResponseCodeField>("R");

            // Check response code
            if (responseCodeField) {
                // Get field data
                result.responseCode = responseCodeField.getData();
            }

            // Shutdown connection
            await this._socket.shutdown();
        }
        catch (e) {
            console.error(e);
        }
        finally {
            // Return result
            return result;
        }
    }
}