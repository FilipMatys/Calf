// Interfaces
import { IEET } from "../../common/interfaces/eet.interface";
import { IItem } from "../../common/interfaces/item.interface";

/**
 * Capture payment payload
 * @description Interface for capture payment payload
 */
export interface ICapturePaymentPayload {

    /**
     * Amount
     * @description Required amount of the capture in cents
     */
    amount: number;

    /**
     * Items
     * @description Itemized in detail each item of the order
     */
    items: IItem[];

    /**
     * EET
     * @description EET parameters (required for registration of sales functionality)
     */
    eet?: IEET;
}