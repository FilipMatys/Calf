// Interfaces
import { IPopulate } from "./populate.interface";
import { IQueryTerm } from "./query-term.interface";

/**
 * Single query
 * @description Interface for Single query
 */
export interface ISingleQuery<TCustom = any> {
    term?: IQueryTerm;
    filter?: any;
    skip?: number;
    select?: string[];
    sort?: string[];
    populate?: IPopulate[];
    custom?: TCustom;
}