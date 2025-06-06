// External modules
import { Serializable, ISchema, PropertyType, IPropertyDefinition } from "@calf/serializable";
import { IEntityDao, IListQuery, IRemoveQuery, IUpdateQuery, ICountQuery, IGetQuery } from "@calf/common";
import * as ObjectId from "bson-objectid";

// Database
import { SQLiteDatabase } from "./database.class";

// Builders
import { QueryBuilder } from "../builders/query.builder";

// Parsers
import { SchemaParser } from "../parsers/schema.parser";
import { SQLiteParser } from "../parsers/sqlite.parser";

/**
 * SQLite dao
 */
export class SQLiteDao<TEntity extends Serializable> implements IEntityDao<TEntity> {

    // Init query builder
    protected builder: QueryBuilder<TEntity> = new QueryBuilder<TEntity>();

    // Init sqlite parser
    protected sqLiteParser: SQLiteParser = new SQLiteParser();

    // Init schema
    protected schema: ISchema<IPropertyDefinition>;

    // Set default oid
    protected oid: string = "_id";

    /**
     * Constructor
     * @param entity 
     */
    constructor(entity: new () => TEntity, oid?: string) {
        // Init parser
        const parser = new SchemaParser();

        // Get schema
        this.schema = parser.parse(entity);

        // Make sure oid is set
        this.oid = oid || this.oid;

        // Add oid to schema
        this.schema.properties[this.oid] = { type: PropertyType.OID };

        // Check for timestamps
        if (this.schema.entity.isTimeStamped) {
            // Add timestamps
            this.schema.properties["createdAt"] = { type: PropertyType.DATE };
            this.schema.properties["updatedAt"] = { type: PropertyType.DATE };
        }

        // Register dao
        SQLiteDatabase.register(this.schema.entity.name, this);
    }

    /**
     * Initialize 
     */
    public async init(): Promise<void> {
        // Init query
        const dbQuery: string = this.builder.createTable(this.schema);

        // Try to create table
        try {
            // Execute
            await SQLiteDatabase.execute(dbQuery);
        }
        catch (_) { }

        // Now get update queries
        const dbQueries: string[] = this.builder.alterTableColumns(this.schema);

        // Alter columns
        for (let index = 0; index < dbQueries.length; index++) {
            // Try to alter table
            try {
                // Execute
                await SQLiteDatabase.execute(dbQueries[index]);
            }
            catch (_) { }
        }
    }

    /**
     * Save entity
     * @param entity 
     * @param args 
     */
    public async save(entity: TEntity, ...args: any[]): Promise<TEntity> {
        // Wait for database to be ready
        await SQLiteDatabase.ready();

        // Init db query
        let dbQuery: string;

        // Check if entity has oid set
        if (!(entity as any)[this.oid]) {
            // Assign oid
            (entity as any)[this.oid] = (ObjectId as any)().toString();

            // Check for timestamps
            if (this.schema.entity.isTimeStamped) {
                // Assign dates
                entity.createdAt = entity.createdAt || new Date();
                entity.updatedAt = entity.createdAt;
            }

            // Build insert query
            dbQuery = this.builder.insert(this.schema, entity);
        }
        else {
            // Check for timestamps
            if (this.schema.entity.isTimeStamped) {
                // Assign date
                entity.updatedAt = new Date();
            }

            // Build update query
            dbQuery = this.builder.update(this.schema, { filter: { [this.oid]: (entity as any)[this.oid] } }, entity);
        }

        // Try to execute query
        try {
            // Execute query
            let result = await SQLiteDatabase.execute(dbQuery);

            // Process result
            return Promise.resolve(entity);
        }
        catch (e) {
            // Reject
            return Promise.reject(e);
        }
    }

    /**
     * Archive
     * @param entity 
     * @param args 
     */
    public async archive(entity: TEntity, ...args: any[]): Promise<any> {
        throw Error("Not implemented");
    }

    /**
     * Get entity
     * @param entity 
     * @param QueryBuilder
     * @param args 
     */
    public async get(entity: TEntity, query: IGetQuery = {}, ...args: any[]): Promise<TEntity> {
        // Wait for database to be ready
        await SQLiteDatabase.ready();

        // Get db query
        const dbQuery: string = this.builder.select(this.schema, {
            select: query.select || [],
            filter: { [this.oid]: (entity as any)[this.oid] },
            limit: 1
        });

        // Try to execute query
        try {
            // Execute query
            const result = await SQLiteDatabase.execute<any>(dbQuery);

            // Init rows
            const rows: TEntity[] = [];

            // Get rows
            for (let index = 0; index < result.rows.length; index++) {
                rows.push(this.sqLiteParser.rowFromSQLite(this.schema, result.rows.item(index)));
            }

            // Resolve
            return Promise.resolve(rows.length ? rows[0] : null);

        }
        catch (e) {
            // Reject
            return Promise.reject(e);
        }
    }

    /**
     * Get list
     * @param query 
     * @param args 
     */
    public async getList(query: IListQuery, ...args: any[]): Promise<TEntity[]> {
        // Wait for database to be ready
        await SQLiteDatabase.ready();

        // Get query
        const dbQuery = this.builder.select(this.schema, query);

        // Try to execute query
        try {
            // Execute query
            const result = await SQLiteDatabase.execute<any>(dbQuery);

            // Init rows
            const rows: TEntity[] = [];

            // Get rows
            for (let index = 0; index < result.rows.length; index++) {
                rows.push(this.sqLiteParser.rowFromSQLite(this.schema, result.rows.item(index)));
            }

            // resolve rows
            return Promise.resolve(rows);
        }
        catch (e) {
            // Reject
            return Promise.reject(e);
        }
    }

    /**
     * Remove
     * @param query 
     * @param args 
     */
    public async removeList(query: IRemoveQuery, ...args: any[]): Promise<any> {
        // Wait for database to be ready
        await SQLiteDatabase.ready();

        // Build query
        const dbQuery: string = this.builder.delete(this.schema, query);

        // Try to execute query
        try {
            // Execute query
            let result = await SQLiteDatabase.execute(dbQuery);

            // Process result
            return Promise.resolve(result);
        }
        catch (e) {
            // Reject error
            return Promise.reject(e);
        }
    }

    /**
     * Remove
     * @param query 
     * @param args 
     */
    public async remove(entity: TEntity, ...args: any[]): Promise<any> {
        // Wait for database to be ready
        await SQLiteDatabase.ready();

        // Init query
        const query: IRemoveQuery = { filter: {} };

        // Set oid filter
        query.filter[this.oid] = ((entity as any)[this.oid]);

        // Build query
        const dbQuery: string = this.builder.delete(this.schema, query);

        // Try to execute query
        try {
            // Execute query
            let result = await SQLiteDatabase.execute(dbQuery);

            // Process result
            return Promise.resolve(result);
        }
        catch (e) {
            // Reject error
            return Promise.reject(e);
        }
    }

    /**
     * Update
     * @param query 
     * @param args 
     */
    public async update(query: IUpdateQuery, payload: TEntity, ...args: any[]): Promise<any> {
        // Wait for database to be ready
        await SQLiteDatabase.ready();

        // Check for timestamps
        if (this.schema.entity.isTimeStamped) {
            // Assign date
            payload.updatedAt = new Date();
        }

        // Build query
        let dbQuery: string = this.builder.update(this.schema, query, payload);

        // Try to execute query
        try {
            // Execute query
            let result = await SQLiteDatabase.execute(dbQuery);

            // Process result
            return Promise.resolve(result);
        }
        catch (e) {
            // Reject error
            return Promise.reject(e);
        }
    }

    /**
     * Count
     * @param query 
     * @param args 
     */
    public async count(query: ICountQuery, ...args: any[]): Promise<number> {
        // Wait for database to be ready
        await SQLiteDatabase.ready();

        // Build count query
        let dbQuery: string = this.builder.count(this.schema, query);

        // Try to execute query
        try {
            // Execute query
            let result = await SQLiteDatabase.execute<any>(dbQuery);

            // Process result
            return Promise.resolve(result.rows.item(0)['COUNT(*)']);
        }
        catch (e) {
            // Reject error
            return Promise.reject(e);
        }
    }
}