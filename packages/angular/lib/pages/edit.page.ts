// External modules
import { Serializable } from "@calf/serializable";
import { ValidationResult } from "@calf/common";
import { DetailPage } from "./detail.page";
import { ParamMap } from "@angular/router";

/**
 * Angular edit page
 */
export abstract class EditPage<TEntity extends Serializable, TMessage = string> extends DetailPage<TEntity, TMessage> {

    /**
     * On init hook
     */
    public ngOnInit(): void {
        // Subscribe to URL params
        this.subscriber.register("params:change", this.route.paramMap.subscribe((params: ParamMap) => {
            // Check if we are on detail or creating new one
            return params.has(this.identifier) ? this.onDetail(params) : this.onCreate(params);
        }));
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
     * On did save hook
     * @param validation 
     */
    protected abstract onDidSave(validation: ValidationResult<TEntity, TMessage>): Promise<void>;
}