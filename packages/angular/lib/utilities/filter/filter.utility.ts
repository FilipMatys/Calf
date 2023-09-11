// External modules
import { NavigationExtras, ParamMap } from '@angular/router';
import { Subject, Observable } from "rxjs";

// Data
import { FilterItem } from "./filter-item.class";

// Services
import { AngularService } from "../../services/angular.service";

/** Filter utility */
export class Filter {

    // Filter items
    public readonly items: { [key: string]: FilterItem<any> } = {}

    // On filter change
    protected changeSource: Subject<NavigationExtras> = new Subject<NavigationExtras>();
    public $change: Observable<NavigationExtras> = this.changeSource.asObservable();

    // On params
    protected paramsSource: Subject<void> = new Subject<void>();
    public $params: Observable<void> = this.paramsSource.asObservable();

    /**
     * Register filter
     * @param name 
     * @param type
     * @param value 
     * @param service 
     */
    public register<TValue>(name: string, type: number, value: TValue, service?: AngularService<any, any>): void {
        this.items[name] = new FilterItem(type, value, service);
    }

    /**
     * Remove filter
     * @param name 
     */
    public remove(name: string): void {
        delete this.items[name];
    }

    /**
     * Check if filter is set
     * @param name 
     */
    public isSet(name: string): boolean {
        return name in this.items && this.items[name].isSet();
    }

    /**
     * Check if filter is registered
     * @param name 
     */
    public isRegistered(name: string): boolean {
        return name in this.items;
    }

    /**
     * Get filter value
     * @param name 
     */
    public get<TValue>(name: string): TValue {
        // Check if filter exists
        if (!this.isRegistered(name)) {
            throw new Error(`Filter '${name}' not registered. Did you forget to call 'register(${name})?'`);
        }

        // Get value
        return this.items[name].value;
    }

    /**
     * Set value
     * @param name 
     * @param value 
     * @param omit
     */
    public set<TValue>(name: string, value: TValue, omit: boolean = false): void {
        // Check if filter exists
        if (!this.isRegistered(name)) {
            throw new Error(`Filter '${name}' not registered. Did you forget to call 'register(${name})?'`);
        }

        // Set value
        this.items[name].value = value;

        // Check whether to omit change
        if (omit) {
            return;
        }

        // Call on change hook
        this.onChange();
    }

    /**
     * Params
     * @param params 
     */
    public params(params: ParamMap): void {
        // Iterate filters
        for (let name in this.items) {
            // Check if name is in params
            if (!params.has(name)) {
                continue;
            }

            // Set filter value
            this.items[name].fromParam(params.getAll(name));
        }

        // Emit params
        this.paramsSource.next();
    }

    /** On change */
    private onChange(): void {
        // Init extras
        let extras: NavigationExtras = { queryParams: {} };
        
        // Iterate filters
        for (let name in this.items) {
            // Check if item is set
            if (this.items[name].isSet()) {
                // Add to extras
                (extras.queryParams as any)[name] = this.items[name].toParam();
            }
        }

        // Emit change
        this.changeSource.next(extras);
    }
}