// External modules
import { Serializable } from "@calf/serializable";
import { ICountQuery, IEntityDao, IGetQuery, IListQuery, IRemoveQuery, IUpdateQuery } from "@calf/common";

/**
 * Fake dao
 */
export class FakeDao<T extends Serializable> implements IEntityDao<T> {
    public archive(entity: T, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
    
    public save(entity: T, ...args: any[]): Promise<T> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }    
    
    public get(entity: T, query: IGetQuery = {}, ...args: any[]): Promise<T> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
    
    public getList(query: IListQuery, ...args: any[]): Promise<T[]> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }

    public remove(query: IRemoveQuery, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
    
    public count(query: ICountQuery, ...args: any[]): Promise<number> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
    
    public update(query: IUpdateQuery, payload: any, ...args: any[]): Promise<any> {
        throw new Error("[@calf: FakeDao]: Dao not implemented. Use http instead.");
    }
}