// External modules
import { OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Serializable } from "@calf/serializable";
import { ValidationResult, EntityService } from "@calf/common";

// Pages
import { SubscriberPage } from "./subscriber.page";

/**
 * Angular detail page
 */
export abstract class DetailPage<TEntity extends Serializable, TMessage = string> extends SubscriberPage implements OnInit {

    /**
     * Current route
     */
    protected abstract route: ActivatedRoute;

    /**
     * Object identifier in route
     */
    protected identifier: string = "id";

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
        // Subscribe to URL params
        this.register("paramsChange", this.route.paramMap.subscribe((params: ParamMap) => {
            // Check if we are on detail or creating new one
            return params.has(this.identifier) ? this.onDetail(params) : this.onCreate(params);
        }));
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
     * On create hook
     * @param params 
     */
    protected async onCreate(params: ParamMap): Promise<void> {
        // Do nothing
        return;
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
     * Save entity
     * @param entity 
     */
    protected async save(entity: TEntity): Promise<void> {
        // Save entity
        const validation = await this.service.save(entity);

        // Call on did save hook
        await this.onDidSave(validation);
    }

    /**
     * On did get hook
     * @param validation 
     */
    protected abstract onDidGet(validation: ValidationResult<TEntity, TMessage>): Promise<void>;
    
    /**
     * On did save hook
     * @param validation 
     */
    protected abstract onDidSave(validation: ValidationResult<TEntity, TMessage>): Promise<void>;
}