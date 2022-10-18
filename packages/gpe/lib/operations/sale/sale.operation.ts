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
        // First init message
        const message = new Message();

        // Assign header values
        message.getHeader().protocolType.setData("B0");
        message.getHeader().protocolVersion.setData(1);

        // Assign date time
        message.getHeader().dateTime.setDataFromDate(new Date());

        // Add transaction type
        message.appendDataField(new TransactionTypeField(TransactionType.Sale));
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

        // Init result
        const result: ISaleResponse = {};

        // Request 
        const confirmation = await this.processRequest(message);

        // Check confirmation
        if (!confirmation.isConfirmationMessage()) {
            // Get response code field
            const responseCodeField = confirmation.getDataFieldByIdentifier<ResponseCodeField>("R");

            // Check response code
            if (responseCodeField) {
                // Get field data
                result.code = responseCodeField.getData();
            }

            // Return result
            return result;
        }

        // Response
        const response = await this.processResponse(message);

        // Check response data
        const responseCodeField = response.getDataFieldByIdentifier<ResponseCodeField>("R");
        const authorizationCodeField = response.getDataFieldByIdentifier<AuthorizationCodeField>("F");

        // Check response code
        if (responseCodeField) {
            // Get field data
            result.code = responseCodeField.getData();
        }

        // Check authorization code
        if (authorizationCodeField) {
            // Get field data
            result.authorizationCode = authorizationCodeField.getData();
        }

        // Shutdown connection
        await this._socket.shutdown();

        // Return result
        return result;
    }
}