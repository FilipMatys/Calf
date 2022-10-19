// Interfaces
import { ICommonResponse } from "../../common/interfaces/response.interface";

// Enums
import { TransactionType } from "../../../enums/transaction-type.enum";

/**
 * Repeat last message response
 * @description Interface for repeat last message response
 */
export interface IRepeatLastMessageResponse extends ICommonResponse {
    authorizationCode?: string;
    transactionType?: TransactionType; 
}