// Enums
import { MessageCategory } from "../enums/message-category.enum";
import { MessageClass } from "../enums/message-class.enum";
import { MessageType } from "../enums/message-type.enum";

/**
 * Message header
 * @description Interface for Message header
 */
export interface IMessageHeader {
    MessageCategory?: MessageCategory;
    MessageClass?: MessageClass;
    MessageType?: MessageType;
    POIID?: string;
    ProtocolVersion?: string;
    SaleID?: string;
    ServiceID?: string;
}