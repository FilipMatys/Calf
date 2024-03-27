// Query result interface
export interface IListQueryResult<TEntity, TCustomResult = any> {
    items?: TEntity[];
    page?: number;
    pageSize?: number;
    total?: number;
    custom?: TCustomResult;
}