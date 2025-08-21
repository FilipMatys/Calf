// External modules
import { ValidationResult, IListQueryResult, EntityService, IListQuery, IRemoveQuery } from "@calf/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Serializable } from "@calf/serializable";

// Daos
import { FakeDao } from "../daos/fake.dao";

/**
 * Angular service
 */
export abstract class AngularService<TEntity extends Serializable, TMessage = string> extends EntityService<TEntity, TMessage> {

    // Http client
    protected abstract http: HttpClient;

    // Prefix
    protected prefix: string[];

    // Http options
    protected httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    }

    /**
     * Constructor
     * @param prefix 
     */
    constructor(prefix: string[]) {
        // Call super to create fake dao
        super(new FakeDao());

        // Assign prefix
        this.prefix = prefix;
    }

    /**
     * Peri save hook
     * @param validation 
     * @param args 
     */
    protected async periSave(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.httpOptions.headers);

        try {
            // Make request
            const rValidation = await this.http.post<ValidationResult<TEntity, TMessage>>([...this.prefix, "save"].join("/"), validation.data, {
                headers: headers
            }).toPromise();

            // Assign data to validation
            Object.assign(validation, rValidation);

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleSaveError(validation, error);
        }
    }

    /**
    * Peri single hook
    * @param validation
    * @param query 
    * @param args 
    */
    protected async periSingle(validation: ValidationResult<TEntity, TMessage>, query: IListQuery, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.httpOptions.headers);

        try {
            // Make request
            const rValidation = await this.http.post<ValidationResult<TEntity, TMessage>>([...this.prefix, "single"].join("/"), query, {
                headers: headers
            }).toPromise();

            // Assign data to validation
            Object.assign(validation, rValidation);

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleSingleError(validation, error);
        }
    }

    /**
    * Peri get list hook
    * @param validation
    * @param query 
    * @param args 
    */
    protected async periGetList(validation: ValidationResult<IListQueryResult<TEntity>, TMessage>, query: IListQuery, ...args: any[]): Promise<ValidationResult<IListQueryResult<TEntity>, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.httpOptions.headers);

        try {
            // Make request
            const rValidation = await this.http.post<ValidationResult<IListQueryResult<TEntity>, TMessage>>([...this.prefix, "list"].join("/"), query, {
                headers: headers
            }).toPromise();

            // Assign data to validation
            Object.assign(validation, rValidation);

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleGetListError(validation, error);
        }
    }

    /**
     * Get detail of entity
     * @param entity 
     */
    public get(entity: TEntity): Promise<ValidationResult<TEntity, TMessage>> {
        return super.get(entity);
    }

    /**
     * Peri get hook
     * @param validation 
     * @param args 
     */
    protected async periGet(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.httpOptions.headers);

        try {
            // Make request
            const rValidation = await this.http.post<ValidationResult<TEntity, TMessage>>([...this.prefix, "get"].join("/"), validation.data, {
                headers: headers
            }).toPromise();

            // Assign data to validation
            Object.assign(validation, rValidation);

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleGetError(validation, error);
        }
    }


    /**
     * Peri remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected async periRemove(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<any, TMessage>> {

        // First alter headers
        const headers = await this.alterHeaders(this.httpOptions.headers);

        try {
            // Make request
            const rValidation = await this.http.post<ValidationResult<any, TMessage>>([...this.prefix, "remove"].join("/"), validation.data, {
                headers: headers
            }).toPromise();

            // Assign data to validation
            Object.assign(validation, rValidation);

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleRemoveError(validation, error);
        }
    }


    /**
     * Peri remove hook
     * @param validation 
     * @param query 
     * @param args 
     */
    protected async periRemoveList(validation: ValidationResult<TEntity, TMessage>, query: IRemoveQuery, ...args: any[]): Promise<ValidationResult<any, TMessage>> {
        // First alter headers
        const headers = await this.alterHeaders(this.httpOptions.headers);

        try {
            // Make request
            const rValidation = await this.http.post<ValidationResult<any, TMessage>>([...this.prefix, "list", "remove"].join("/"), query, {
                headers: headers
            }).toPromise();

            // Assign data to validation
            Object.assign(validation, rValidation);

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleRemoveListError(validation, error);
        }
    }

    /**
     * Peri change state hook
     * @param validation 
     * @param args 
     */
    protected async periChangeState(validation: ValidationResult<TEntity, TMessage>, ...args: any[]): Promise<ValidationResult<TEntity, TMessage>> {
        // First alter headers
        const headers = await this.alterHeaders(this.httpOptions.headers);

        try {
            // Make request
            const rValidation = await this.http.post<ValidationResult<TEntity, TMessage>>([...this.prefix, "state"].join("/"), validation.data, {
                headers: headers
            }).toPromise();

            // Assign data to validation
            Object.assign(validation, rValidation);

            // Return validation
            return validation;
        }
        catch (error) {
            // Handle error
            return this.handleGetError(validation, error);
        }
    }

    /**
     * Handle single error
     * @param validation 
     * @param error 
     */
    protected handleSingleError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle update error
     * @param validation 
     * @param error 
     */
    protected handleUpdateError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle change state error
     * @param validation 
     * @param error 
     */
    protected handleChangeStateError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle save error
     * @param error 
     */
    protected handleSaveError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle get error
     * @param validation 
     * @param error 
     */
    protected handleGetError<TError>(validation: ValidationResult<TEntity, TMessage>, error: TError): Promise<ValidationResult<TEntity, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle get list error
     * @param validation 
     * @param error 
     */
    protected handleGetListError<TError>(validation: ValidationResult<IListQueryResult<TEntity>, TMessage>, error: TError): Promise<ValidationResult<IListQueryResult<TEntity>, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle remove error
     * @param validation 
     * @param error 
     */
    protected handleRemoveError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle remove list error
     * @param validation 
     * @param error 
     */
    protected handleRemoveListError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        return this.handleHttpError<TError>(validation, error);
    }

    /**
     * Handle http error
     * @param validation 
     * @param error 
     */
    protected handleHttpError<TError>(validation: ValidationResult<any, TMessage>, error: TError): Promise<ValidationResult<any, TMessage>> {
        // Log error
        console.log(error);

        // Reject
        return Promise.reject(validation);
    }

    /**
    * Alter headers
    * @param headers
    */
    protected alterHeaders(headers: HttpHeaders): Promise<HttpHeaders> {
        return Promise.resolve(headers);
    }
}