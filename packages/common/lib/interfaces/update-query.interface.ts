/**
 * Update query
 * @description Interface for update query
 */
export interface IUpdateQuery<TCustom = any> {
    filter?: any;
    custom?: TCustom;
}