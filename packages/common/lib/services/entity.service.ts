// External modules
import { Serializable } from "@calf/serializable";

// Classes
import { ValidationResult } from "../classes/validation-result.class";

// Interfaces
import { IQueryResult } from "../interfaces/query-result.interface";
import { IPopulate } from "../interfaces/populate.interface";
import { IQuery } from "../interfaces/query.interface";
import { IEntityDao } from "../daos/entity.dao";

/**
 * Entity service
 */
export abstract class EntityService<TEntity extends Serializable, TMessage = string> {

    /**
     * Constructor
     * @param dao 
     */
    constructor(protected dao: IEntityDao<TEntity>) { }

    /**
     * Save entity
     * @param entity 
     * @param args 
     */
    public async save(entity: TEntity, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Init validation
        const validation = new ValidationResult<TEntity, TMessage>(entity);

        try {
            // Call pre save
            await this.preSave(validation, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call peri save
            await this.periSave(validation, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call post save
            return this.postSave(validation, ...args);
        }
        catch (validation) {
            // Pass validation
            return validation;
        }
    }

    /**
     * Pre save hook
     * @param validation 
     * @param args 
     */
    protected preSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri save hook
     * @param validation 
     * @param args 
     */
    protected periSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Save entity
            this.dao.save(validation.data as TEntity, ...args)
                .then((value) => {
                    // Assign value to validation
                    validation.data = value;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle save error
                    this.handleSaveError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                })
        });
    }

    /**
     * Post save hook
     * @param validation 
     * @param args 
     */
    protected postSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Count entity
     * @param query 
     * @param args 
     */
    public async count(query: IQuery, ...args: any[]): Promise<ValidationResult<number, TMessage>> {
        // Init validation
        const validation = new ValidationResult<number, TMessage>(0);

        try {
            // Call pre count
            await this.preCount(validation, query, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call peri count
            await this.periCount(validation, query, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call post count
            return this.postCount(validation, query, ...args);
        }
        catch (validation) {
            // Pass validation
            return validation;
        }
    }

    /**
     * Pre count hook
     * @param validation
     * @param query
     * @param args 
     */
    protected preCount(validation: ValidationResult<number, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<number, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri count hook
     * @param validation 
     * @param args 
     */
    protected periCount(validation: ValidationResult<number, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<number, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Save entity
            this.dao.count(query, ...args)
                .then((value) => {
                    // Assign value to validation
                    validation.data = value;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle count error
                    this.handleCountError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                })
        });
    }

    /**
     * Post count hook
     * @param validation 
     * @param query
     * @param args 
     */
    protected postCount(validation: ValidationResult<number, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<number, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Get entity
     * @param entity 
     * @param populate
     * @param args 
     */
    public async get(entity: TEntity, populate: IPopulate[], ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Init validation
        const validation = new ValidationResult<TEntity, TMessage>(entity);

        try {
            // Call pre get
            await this.preGet(validation, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call peri get
            await this.periGet(validation, populate, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call post get
            return this.postGet(validation, ...args);
        }
        catch (validation) {
            // Pass validation
            return validation;
        }
    }

    /**
     * Pre get hook
     * @param validation 
     * @param args 
     */
    protected preGet(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri get hok
     * @param validation 
     * @param args 
     */
    protected periGet(validation: ValidationResult<TEntity, TMessage>, populate: IPopulate[], ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Save entity
            this.dao.get(validation.data as TEntity, populate, ...args)
                .then((value) => {
                    // Assign value to validation
                    validation.data = value;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle get error
                    this.handleGetError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                })
        });
    }

    /**
     * Post get hook
     * @param validation 
     * @param args 
     */
    protected postGet(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Get single entity by query
     * @param query 
     * @param args 
     */
    public async single(query: IQuery, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Init validation
        const validation = new ValidationResult<TEntity, TMessage>();

        try {
            // Call pre single
            await this.preSingle(validation, query, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call peri single
            await this.periSingle(validation, query, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call post single
            return this.postSingle(validation, query, ...args);
        }
        catch (validation) {
            // Return validation
            return validation;
        }
    }

    /**
     * Pre single hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected preSingle(validation: ValidationResult<TEntity, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri single hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected periSingle(validation: ValidationResult<TEntity, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // First get list
            this.dao.getList({
                ...query,
                limit: 1
            }, ...args)
                .then((items) => {
                    // Check if any items were found
                    if (!items || !items.length) {
                        // Do nothing
                        return validation;
                    }

                    // Assign item
                    validation.data = items.pop();

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle single error
                    this.handleSingleError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }

    /**
     * Post single hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected postSingle(validation: ValidationResult<TEntity, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Get list of entities
     * @param query 
     * @param args 
     */
    public async getList(query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        // Init validation
        const validation = new ValidationResult<IQueryResult<TEntity>, TMessage>({
            items: [],
            total: 0,
            pageSize: query.limit,
            page: Math.round((query.skip) || 0 / (query.limit || 1)) + 1
        });

        try {
            // Call pre get list
            await this.preGetList(validation, query, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call peri get list
            await this.periGetList(validation, query, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call post get list
            return this.postGetList(validation, query, ...args);
        }
        catch (validation) {
            // Return validation
            return validation;
        }
    }

    /**
     * Pre get list hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected preGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri get list hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected periGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // First get list
            this.dao.getList(query, ...args)
                .then((items) => {
                    // Assign items
                    (validation.data as IQueryResult<TEntity>).items = items;

                    // Now get total count
                    return this.dao.count({
                        filter: query.filter,
                        term: query.term
                    });
                })
                .then((total) => {
                    // Assign total
                    (validation.data as IQueryResult<TEntity>).total = total;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle get error
                    this.handleGetListError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }

    /**
     * Post get list
     * @param validation 
     * @param query 
     * @param args 
     */
    protected postGetList(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Remove
     * @param query 
     * @param args 
     */
    public async remove(query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // Init validation
        const validation = new ValidationResult<any, TMessage>();

        try {
            // Call pre remove
            await this.preRemove(validation, query, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call peri remove
            await this.periRemove(validation, query, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call post remove
            return this.postRemove(validation, query, ...args);
        }
        catch (validation) {
            // Return validation
            return validation;
        }
    }

    /**
     * Pre remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected preRemove(validation: ValidationResult<any, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected periRemove(validation: ValidationResult<any, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Remove 
            this.dao.remove(query, ...args)
                .then((result) => {
                    // Assign Data
                    validation.data = result;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle error
                    this.handleRemoveError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }

    /**
     * Post remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected postRemove(validation: ValidationResult<any, TMessage>, query: IQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Change state
     * @param entity 
     * @param args 
     */
    public async changeState(entity: TEntity, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // Init validation
        const validation = new ValidationResult<TEntity, TMessage>(entity);

        try {
            // Call pre change state
            await this.preChangeState(validation, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call peri change state
            await this.periChangeState(validation, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call post change state
            return this.postChangeState(validation, ...args);
            
        }
        catch (validation) {
            // Return validation
            return validation;
        }
    }

    /**
     * Pre change state hook
     * @param validation 
     * @param args 
     */
    protected preChangeState(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri change state
     * @param validation 
     * @param args 
     */
    protected periChangeState(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        throw new Error("[@calf:entity.service] Change state not implemented!");
    }

    /**
     * Post change state
     * @param validation 
     * @param args 
     */
    protected postChangeState(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Update 
     * @param query 
     * @param payload 
     * @param args 
     */
    public async update(query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // Init validation
        const validation = new ValidationResult<any, TMessage>();

        try {
            // Call pre update 
            await this.preUpdate(validation, query, payload, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call peri update
            await this.periUpdate(validation, query, payload, ...args);

            // Check validation
            if (!validation.isValid) {
                // Return validation
                return validation;
            }

            // Call post update
            return this.postUpdate(validation, query, payload, ...args);
        }
        catch (validation) {
            // Return validation
            return validation;
        }
    }

    /**
     * Pre update hook
     * @param validation 
     * @param query 
     * @param payload 
     * @param args 
     */
    protected preUpdate(validation: ValidationResult<any, TMessage>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Peri update hook
     * @param validation 
     * @param query 
     * @param payload 
     * @param args 
     */
    protected periUpdate(validation: ValidationResult<any, TMessage>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // Create new promise
        return new Promise((resolve, reject) => {
            // Update
            this.dao.update(query, payload, ...args)
                .then((result) => {
                    // Assign Data
                    validation.data = result;

                    // Resolve
                    return resolve(validation);
                })
                .catch((error) => {
                    // Handle error
                    this.handleUpdateError(validation, error)
                        .then((validation) => resolve(validation))
                        .catch((validation) => reject(validation));
                });
        });
    }

    /**
     * Post update hook
     * @param validation 
     * @param query 
     * @param payload 
     * @param args 
     */
    protected postUpdate(validation: ValidationResult<any, TMessage>, query: IQuery, payload: any, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        return Promise.resolve(validation);
    }

    /**
     * Handle update error
     * @param validation 
     * @param error 
     */
    protected handleUpdateError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle change state error
     * @param validation 
     * @param error 
     */
    protected handleChangeStateError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle save error
     * @param error 
     */
    protected handleSaveError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle get error
     * @param validation 
     * @param error 
     */
    protected handleGetError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle single error
     * @param validation 
     * @param error 
     */
    protected handleSingleError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle count error
     * @param validation 
     * @param error 
     */
    protected handleCountError<TError>(validation: ValidationResult<number, TMessage>, error: TError): Promise<ValidationResult<number, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle get list error
     * @param validation 
     * @param error 
     */
    protected handleGetListError<TError>(validation: ValidationResult<IQueryResult<TEntity>, TMessage>, error: TError): Promise<ValidationResult<IQueryResult<TEntity>, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle remove error
     * @param validation 
     * @param error 
     */
    protected handleRemoveError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        return this.handleDaoError<TError>(validation, error);
    }

    /**
     * Handle dao error
     * @param validation 
     * @param error 
     */
    protected handleDaoError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        // Reject
        return Promise.reject(validation);
    }
}