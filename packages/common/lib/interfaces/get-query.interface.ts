// Interfaces
import { IPopulate } from "./populate.interface";

/**
 * Get query
 * @description Interface for Get query
 */
export interface IGetQuery<TCustom = any> {
    select?: string[];
    populate?: IPopulate[];
    custom?: TCustom;
}