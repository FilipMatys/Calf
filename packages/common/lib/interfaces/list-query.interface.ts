// Interfaces
import { IPopulate } from "./populate.interface";
import { IQueryTerm } from "./query-term.interface";

/**
 * List query
 * @description Interface for List query
 */
export interface IListQuery<TCustom = any> {
    term?: IQueryTerm;
    filter?: any;
    limit?: number;
    skip?: number;
    select?: string[];
    sort?: string[];
    populate?: IPopulate[];
    custom?: TCustom;
}