// Interfaces
import { IWaiter } from "./waiter.interface";

/**
 * Receipt info
 * @description Interface for Receipt info
 */
export interface IReceiptInfo {
    billName?: string;
    serial?: string;
    cashBox?: string;
    headerLines?: string[];
    footerLines?: string[];
    waiter?: IWaiter;
}