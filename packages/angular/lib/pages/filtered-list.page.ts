// External modules
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Serializable } from "@calf/serializable";

// Utilities
import { Filter } from "../utilities/filter/filter.utility";

// Pages
import { ListPage } from "./list.page";

/**
 * Filtered list page
 * @description List page with filtering ability
 */
export abstract class FilteredListPage<TEntity extends Serializable, TMessage = string> extends ListPage<TEntity, TMessage> {

    /**
     * Filter
     * @description Current state of filtered page
     */
    public filter: Filter = new Filter();

    /**
     * Router
     */
    protected abstract router: Router;

    /**
     * Current route
     */
    protected abstract route: ActivatedRoute;

    /**
     * On init hook
     */
    public ngOnInit(): void {
        // Subscribe to filter events
        this.subscriber.register("filter:change", this.filter.$change.subscribe((extras) => this.onFilterChange(extras)));
        this.subscriber.register("params:change", this.filter.$params.subscribe(() => this.onParamsChange()));

        // Subscribe to query params
        this.subscriber.register("queryParams:change", this.route.queryParamMap.subscribe((params) => this.filter.params(params)));
    }

    /**
     * On filter change
     * @param extras 
     */
    protected onFilterChange(extras: NavigationExtras): void {
        // Reload current route with given extras
        this.router.navigate([], extras);
    }

    /**
     * On params change
     */
    protected async onParamsChange(): Promise<void> {
        // Get list
        await this.getList();
    }
}