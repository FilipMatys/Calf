/**
 * Count query
 * @description Interface for count query
 */
export interface ICountQuery<TCustom = any> {
    filter?: any;
    custom?: TCustom;
}