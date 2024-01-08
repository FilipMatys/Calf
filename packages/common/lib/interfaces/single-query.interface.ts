// Interfaces
import { IPopulate } from "./populate.interface";

/**
 * Single query
 * @description Interface for Single query
 */
export interface ISingleQuery<TCustom = any> {
    term?: string;
    filter?: any;
    skip?: number;
    select?: string[];
    sort?: string[];
    populate?: IPopulate[];
    custom?: TCustom;
}