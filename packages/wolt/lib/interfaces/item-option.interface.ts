// Interfaces
import { IIndexed } from "./indexed.interface";
import { IPrice } from "./price.interface";

/**
 * Item options
 * @description Interface for Item option
 */
export interface IItemOption extends IIndexed {
    name?: string;
    value?: string;
    price?: IPrice;
    pos_id?: string;
    count?: number;
    value_pos_id?: string;
}