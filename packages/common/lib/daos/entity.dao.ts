// External modules
import { Serializable } from "@calf/serializable";

// Interfaces
import { IGetQuery } from "../interfaces/get-query,interface";
import { IListQuery } from "../interfaces/list-query.interface";
import { IUpdateQuery } from "../interfaces/update-query.interface";
import { ICountQuery } from "../interfaces/count-query.interface";
import { IRemoveQuery } from "../interfaces/remove-query.interface";

/**
 * Entity dao
 * @description 
 */
export interface IEntityDao<T extends Serializable> {

    /**
     * Save entity
     * @param entity 
     * @param args
     */
    save(entity: T, ...args: any[]): Promise<T>;

    /**
     * Get entity
     * @param entity 
     * @param args 
     */
    get(entity: T, query?: IGetQuery, ...args: any[]): Promise<T>;

    /**
     * Get list of entities
     * @param query
     * @param args 
     */
    getList(query: IListQuery, ...args: any[]): Promise<T[]>;

    /**
     * Remove
     * @param query 
     * @param args 
     */
    remove(query: IRemoveQuery, ...args: any[]): Promise<any>;

    /**
     * Count entities
     * @param query
     * @param args 
     */
    count(query: ICountQuery, ...args: any[]): Promise<number>;

    /**
     * Update
     * @param query 
     * @param payload 
     * @param args 
     */
    update(query: IUpdateQuery, payload: any, ...args: any[]): Promise<any>;

    /**
     * Archive
     * @param entity 
     * @param args 
     */
    archive(entity: T, ...args: any[]): Promise<any>;
}