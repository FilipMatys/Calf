/**
 * Remove query
 * @description Interface for remove query
 */
export interface IRemoveQuery<TCustom = any> {
    filter?: any;
    custom?: TCustom;
}