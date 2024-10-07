// Enums
import { PreOrderStatus } from "../enums/pre-order-status.enum";

/**
 * Pre order
 * @description Interface for Pre order
 */
export interface IPreOrder {
    preorder_time?: string;
    pre_order_status?: PreOrderStatus;
}