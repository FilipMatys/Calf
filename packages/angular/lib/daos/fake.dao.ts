// External modules
import { Serializable } from "@calf/serializable";
import { ICountQuery, IEntityDao, IGetQuery, IListQuery, IRemoveQuery, IUpdateQuery } from "@calf/common";

/**
 * Fake dao
 */
export class FakeDao<TEntity extends Serializable> implements IEntityDao<TEntity> {
    public archive(entity: TEntity, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public save(entity: TEntity, ...args: any[]): Promise<TEntity> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public get(entity: TEntity, query: IGetQuery = {}, ...args: any[]): Promise<TEntity> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public getList(query: IListQuery, ...args: any[]): Promise<TEntity[]> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public removeList(query: IRemoveQuery, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public remove(entity: TEntity, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public count(query: ICountQuery, ...args: any[]): Promise<number> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public update(query: IUpdateQuery, payload: any, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
}