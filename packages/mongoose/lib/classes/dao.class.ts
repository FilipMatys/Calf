// External modules
import { Serializable, IEntityDao, IQuery, IPopulate } from "@calf/serializable";
import { Model, model, Schema } from "mongoose";

// Parsers
import { SchemaParser } from "../parsers/schema.parser";

export class MongooseDao<TEntity extends Serializable> implements IEntityDao<TEntity> {

    /**
     * Database model
     */
    protected model: Model<any>;

    /**
     * Constructor
     * @param entity 
     */
    constructor(entity: new () => TEntity) {
        // Init parser
        const parser: SchemaParser = new SchemaParser();

        // Get schema
        let schema = parser.parse(entity);

        // Init model schema
        let mSchema = new Schema(schema.properties, {
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
        this.model = model(schema.entity.name, mSchema);
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
        let model = new this.model(entity);
        // Set 'new' flag
        model.isNew = isNew;

        // Save model
        return await model.save() as TEntity;
    }

    /**
     * Get entity
     * @param entity 
     * @param populate
     * @param args 
     */
    public async get(entity: TEntity, populate: IPopulate[], ...args: any[]): Promise<TEntity> {
        // Init query
        const queryToExecute = this.model.findById(entity._id).lean();

        // Check for populate
        if (populate && populate.length) {
            // Set populate
            queryToExecute.populate(populate);
        }

        // Execute query
        return await queryToExecute.exec() as TEntity;
    }

    /**
     * Get list of entities
     * @param query 
     * @param args 
     */
    public async getList(query: IQuery, ...args: any[]): Promise<TEntity[]> {
        // First make sure query is set
        query = query || {};

        // Init query to execute
        let queryToExecute = this.model.find(query.filter || {}).lean();

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
     * Remove list
     * @param query 
     * @param args 
     */
    public async remove(query: IQuery, ...args: any[]): Promise<any> {
        // Make sure query is set
        query = query || {};

        // Get count
        return await this.model.remove(query.filter || {}).exec();
    }

    /**
     * Count entities
     * @param query 
     * @param args 
     */
    public async count(query: IQuery, ...args: any[]): Promise<number> {
        // Make sure query is set
        query = query || {};

        // Get count
        return await this.model.count(query.filter || {}).exec();
    }

    /**
     * Update entities
     * @param query 
     * @param payload 
     * @param args 
     */
    public async update(query: IQuery, payload: any, options?: any, ...args: any[]): Promise<any> {
        // Make sure query is set
        query = query || {};

        // Get count
        return await this.model.update(query.filter || {}, { $set: payload }, options || {}).exec();
    }
}