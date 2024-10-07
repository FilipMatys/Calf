// Interfaces
import { ICategory } from "./category.interface";
import { IDeposit } from "./deposit.interface";
import { IIndexed } from "./indexed.interface";
import { IItemOption } from "./item-option.interface";
import { IPrice } from "./price.interface";
import { IWeightDetails } from "./weight-details.interface";

// Enums
import { ItemType } from "../enums/item-type.enum";

/**
 * Item
 * @description Interface for Item
 */
export interface IItem extends IIndexed {
    name?: string;
    count?: number;
    pos_id?: string;
    sku?: string;
    gtin?: string;
    options?: IItemOption[];
    total_price?: IPrice;
    base_price?: IPrice;
    unit_price?: IPrice;
    category?: ICategory;
    deposit?: IDeposit;
    row_number?: number;
    substitution_settings?: any;
    weight_details?: IWeightDetails;
    item_type?: ItemType;
}