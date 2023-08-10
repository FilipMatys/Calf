// Interfaces
import { ITransactionalMessage } from "./transactional-message.interface";

/**
 *  Interface for message request
 * @description Interface for message request
 */
export interface ITransactionalMessageRequest {
     message: ITransactionalMessage;
}