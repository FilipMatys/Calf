// Interfaces
import { ICategory } from "./category.interface";
import { IIndexed } from "./indexed.interface";
import { IItemOption } from "./item-option.interface";
import { IPrice } from "./price.interface";

/**
 * Item
 * @description Interface for Item
 */
export interface IItem extends IIndexed {
    name?: string;
    count?: number;
    pos_id?: string;
    sku?: any;
    gtin?: any;
    options?: IItemOption[];
    total_price?: IPrice;
    base_price?: IPrice;
    unit_price?: IPrice;
    category?: ICategory;
}