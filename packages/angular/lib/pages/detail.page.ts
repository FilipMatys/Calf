// External modules
import { ValidationResult, EntityService } from "@calf/common";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { OnDestroy, OnInit } from "@angular/core";
import { Serializable } from "@calf/serializable";

// Classes
import { Subscriber } from "../classes/subscriber.class";


/**
 * Angular detail page
 */
export abstract class DetailPage<TEntity extends Serializable, TMessage = string> implements OnInit, OnDestroy {

    /**
     * Current route
     */
    protected abstract route: ActivatedRoute;

    /**
     * Subscriber
     */
    protected readonly subscriber: Subscriber = new Subscriber();

    /**
     * Object identifier in route
     */
    protected identifier: string = "id";

    /**
     * Constructor
     * @param service 
     */
    constructor(protected service: EntityService<TEntity, TMessage>) { }

    /**
     * On init hook
     */
    public ngOnInit(): void {
        // Subscribe to URL params
        this.subscriber.register("params:change", this.route.paramMap.subscribe((params: ParamMap) => this.onDetail(params)));
    }

    /**
     * On destroy hook
     */
    public ngOnDestroy(): void {
        // Clear subscriptions
        this.subscriber.clear();
    }

    /**
     * On detail hook
     * @param params 
     */
    protected async onDetail(params: ParamMap): Promise<void> {
        // Get detail
        await this.get({ _id: params.get(this.identifier) } as TEntity);
    }

    /**
     * Get entity
     * @param entity 
     */
    protected async get(entity: TEntity): Promise<void> {
        // Get entity
        const validation = await this.service.get({ _id: entity._id } as TEntity);

        // Call on did get hook
        await this.onDidGet(validation);
    }

    /**
     * On did get hook
     * @param validation 
     */
    protected abstract onDidGet(validation: ValidationResult<TEntity, TMessage>): Promise<void>;
}