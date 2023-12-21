// Interfaces
import { ITaxInfo } from "./tax-info.interface";
import { IReceiptItem } from "./receipt-item.interface";
import { IReceiptInfo } from "./receipt-info.interface";

// Enums
import { ReceiptDeliveryType } from "../enums/receipt-delivery-type.enum";

/**
 * Receipt
 * @description Interface for Receipt
 */
export interface IReceipt {
    receiptInfo?: IReceiptInfo;
    items: IReceiptItem[];
    taxInfo?: ITaxInfo[];
    receiptDeliveryType: ReceiptDeliveryType;
}