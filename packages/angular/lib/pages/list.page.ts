// External modules
import { OnInit } from "@angular/core";
import { Serializable } from "@calf/serializable";
import { ValidationResult, IListQueryResult, EntityService, IListQuery } from "@calf/common";

// Pages
import { SubscriberPage } from "./subscriber.page";

/**
 * List page
 * @description List page loads list of entities
 */
export abstract class ListPage<TEntity extends Serializable, TMessage = string> extends SubscriberPage implements OnInit {

    /**
     * Constructor
     * @param service 
     */
    constructor(private service: EntityService<TEntity, TMessage>) {
        // Call super
        super();
    }

    /**
     * On init hook
     */
    public ngOnInit(): void {
        // Get list
        this.getList();
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