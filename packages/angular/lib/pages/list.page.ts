// External modules
import { ValidationResult, IListQueryResult, EntityService, IListQuery } from "@calf/common";
import { Serializable } from "@calf/serializable";
import { OnDestroy, OnInit } from "@angular/core";

// Classes
import { Subscriber } from "../classes/subscriber.class";

/**
 * List page
 * @description List page loads list of entities
 */
export abstract class ListPage<TEntity extends Serializable, TMessage = string> implements OnInit, OnDestroy {

    /**
     * Subscriber
     */
    protected readonly subscriber: Subscriber = new Subscriber();

    /**
     * Constructor
     * @param service 
     */
    constructor(private service: EntityService<TEntity, TMessage>) { }

    /**
     * On init hook
     */
    public ngOnInit(): void {
        // Get list
        this.getList();
    }

    /**
     * On destroy hook
     */
    public ngOnDestroy(): void {
        // Clear subscriptions
        this.subscriber.clear();
    }

    /**
     * Get list
     * @param query 
     */
    protected async getList(query: IListQuery = {}): Promise<void> {
        // Get list of entities
        const validation = await this.service.getList(query);

        // Call on did get list hook
        await this.onDidGetList(validation);
    }

    /**
     * On did get list hook
     * @param validation 
     */
    protected abstract onDidGetList(validation: ValidationResult<IListQueryResult<TEntity>, TMessage>): Promise<void>;
}