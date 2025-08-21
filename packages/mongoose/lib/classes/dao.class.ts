// External modules
import { ICountQuery, IEntityDao, IGetQuery, IListQuery, IRemoveQuery, IUpdateQuery } from "@calf/common";
import { Model, model, Schema, models, Aggregate } from "mongoose";
import { Serializable } from "@calf/serializable";

// Parsers
import { SchemaParser } from "../parsers/schema.parser";

/**
 * Mongoose dao
 * @description Data access object for Mongoose
 */
export class MongooseDao<TEntity extends Serializable> implements IEntityDao<TEntity> {

    /**
     * Database model
     */
    protected _model: Model<any>;

    /**
     * Model
     * @description Mongoose model getter
     */
    public get model(): Model<any> {
        // Return model
        return this._model;
    }

    /**
     * Constructor
     * @param entity 
     */
    constructor(entity: new () => TEntity) {
        // Init parser
        const parser: SchemaParser = new SchemaParser();

        // Get schema
        const schema = parser.parse(entity);

        // Init model schema
        const mSchema = new Schema(schema.properties, {
            _id: !!(schema.entity.config || { _id: true })._id,
            timestamps: !!schema.entity.isTimeStamped,
            autoIndex: !!(schema.entity.config || { autoIndexId: true }).autoIndexId,
        });

        // Check for indexes
        if ((schema.entity.indexes || []).length) {
            // Add indexes
            schema.entity.indexes.forEach(i => mSchema.index(i.fields, i.options));
        }

        // Create model
        this._model = models[schema.entity.name] || model(schema.entity.name, mSchema);
    }

    /**
     * Aggregate
     * @param pipeline 
     * @returns 
     */
    public aggregate<TResult>(pipeline: any[]): Aggregate<TResult[]> {
        // Call model aggregate
        return this.model.aggregate(pipeline);
    }

    /**
     * Save entity
     * @param entity 
     * @param args 
     */
    public async save(entity: TEntity, ...args: any[]): Promise<TEntity> {
        // Check if entity is new
        const isNew = !entity._id;

        // Create model
        const model = new this.model(entity);
        // Set 'new' flag
        model.isNew = isNew;

        // Save model
        return (await model.save()).toObject() as TEntity;
    }

    /**
     * Get entity
     * @param entity 
     * @param query
     * @param args 
     */
    public async get(entity: TEntity, query?: IGetQuery, ...args: any[]): Promise<TEntity> {
        // Init query
        const queryToExecute = this.model.findById(entity._id).lean();

        // Check for query
        if (!query) return await queryToExecute.exec() as TEntity;

        // Check for populate
        if ((query.populate || []).length) {
            // Set populate
            queryToExecute.populate(query.populate);
        }

        // Check for select
        if ((query.select || []).length) {
            // Set select
            queryToExecute.select(query.select);
        }

        // Execute query
        return await queryToExecute.exec() as TEntity;
    }

    /**
     * Get list of entities
     * @param query 
     * @param args 
     */
    public async getList(query: IListQuery, ...args: any[]): Promise<TEntity[]> {
        // First make sure query is set
        query = query || {};

        // Init query to execute
        const queryToExecute = this.model.find(query.filter || {}).lean();

        // Check for populate
        if (query.populate && query.populate.length) {
            queryToExecute.populate(query.populate);
        }

        // Check for limit
        if (query.limit) {
            queryToExecute.limit(query.limit);
        }

        // Check for skip
        if (query.skip) {
            queryToExecute.skip(query.skip);
        }

        // Check for select
        if (query.select && query.select.length) {
            queryToExecute.select(query.select)
        }

        // Check for sort
        if (query.sort && query.sort.length) {
            queryToExecute.sort(query.sort.join(" "));
        }

        // Execute query
        return await queryToExecute.exec() as TEntity[];
    }

    /**
     * Remove entity
     * @param query 
     * @param args 
     */
    public async remove(entity: TEntity, ...args: any[]): Promise<any> {
        // Get count
        return this.model.deleteOne({ _id: entity._id }).exec();
    }

    /**
     * Remove list
     * @param query 
     * @param args 
     * @returns 
     */
    public async removeList(query: IRemoveQuery, ...args: any[]): Promise<any> {
        // Make sure query is set
        query = query || {};

        // Remove many
        return this.model.deleteMany(query.filter).exec();
    }

    /**
     * Count entities
     * @param query 
     * @param args 
     */
    public async count(query: ICountQuery, ...args: any[]): Promise<number> {
        // Make sure query is set
        query = query || {};

        // Get count
        return this.model.countDocuments(query.filter || {}).exec();
    }

    /**
     * Update entities
     * @param query 
     * @param payload 
     * @param args 
     */
    public async update(query: IUpdateQuery, payload: any, options?: any, ...args: any[]): Promise<any> {
        // Make sure query is set
        query = query || {};

        // Check for options and multi
        if (options && options.multi) {
            // Update many
            return await this.model.updateMany(query.filter || {}, { $set: payload }, options || {}).exec();
        }
        else {
            // Update one
            return await this.model.updateOne(query.filter || {}, { $set: payload }, options || {}).exec();
        }
    }

    /**
     * Archive entity
     * @param entity 
     * @param args 
     */
    public async archive(entity: TEntity, ...args: any[]): Promise<any> {
        // Update one
        return this.model.updateOne({ _id: entity._id }, { $set: { isArchived: true, archivedAt: new Date() } }, {}).exec();
    }
}