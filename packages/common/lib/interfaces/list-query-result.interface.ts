// Query result interface
export interface IListQueryResult<TEntity> {
    items?: TEntity[];
    page?: number;
    pageSize?: number;
    total?: number;
}