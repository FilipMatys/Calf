// Enums
import { TransactionType } from "../../enums/transaction-type.enum";

// Interfaces
import { ITotalsResponse } from "./interfaces/response.interface";

// Classes
import { Message } from "../../classes/message.class";

// Fields
import { TransactionTypeField } from "../../fields/data/transaction-type.field";
import { ResponseCodeField } from "../../fields/data/response-code.field";

// Operations
import { CommonOperation } from "../common/common.operation";

/**
 * Totals operation
 */
export class TotalsOperation extends CommonOperation<void, ITotalsResponse> {

    /**
     * Execute
     * @description Execute totals
     */
    public async execute(): Promise<ITotalsResponse> {
        // Init result
        const result: ITotalsResponse = { timestamp: new Date() };

        // First init message
        const message = new Message();

        // Assign header values
        message.getHeader().protocolType.setData("B0");
        message.getHeader().protocolVersion.setData(1);

        // Assign date time
        message.getHeader().dateTime.setDataFromDate(result.timestamp);

        // Add transaction type
        message.appendDataField(new TransactionTypeField(TransactionType.CloseTotals));

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
        const response = await this.processResponse(message);

        // Check response data
        const responseCodeField = response.getDataFieldByIdentifier<ResponseCodeField>("R");

        // Check response code
        if (responseCodeField) {
            // Get field data
            result.responseCode = responseCodeField.getData();
        }

        // Shutdown connection
        await this._socket.shutdown();

        // Return result
        return result;
    }
}