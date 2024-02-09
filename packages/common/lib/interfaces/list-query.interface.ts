// Interfaces
import { IPopulate } from "./populate.interface";

/**
 * List query
 * @description Interface for List query
 */
export interface IListQuery<TCustom = any> {
    term?: string;
    filter?: any;
    limit?: number;
    skip?: number;
    select?: string[];
    sort?: string[];
    populate?: IPopulate[];
    custom?: TCustom;
}