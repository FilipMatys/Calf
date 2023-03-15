// External modules
import { Serializable } from "@calf/serializable";

// Data
import { FilterType } from "./filter-type.enum";

// Services
import { AngularService } from "../../services/angular.service";

/** Filter item */
export class FilterItem<TValue> {

    // Type
    private type: number;

    // Value
    public value: TValue;

    // Service
    private service?: AngularService<any, any>;

    /**
     * Constructor
     * @param type 
     * @param value 
     * @param service
     */
    constructor(type: number, value: TValue, service?: AngularService<any, any>) {
        // Assign type
        this.type = type;

        // Assign value
        this.value = value;

        // Assign service
        this.service = service;
    }

    /**
     * Check if value is set
     */
    public isSet(): boolean {
        return (typeof this.value !== 'undefined')
            && this.value !== null
            && (this.value as any) !== ''
            && (!(this.value instanceof Array) || this.value.length !== 0);
    }

    /**
     * Convert filter item value 
     * to param value
     */
    public toParam(): any {
        // Get param value
        switch (this.type) {
            // Serializable
            case FilterType.SERIALIZABLE:
                return (this.value as Serializable)._id;
            // Array of serializable
            case FilterType.ARRAY_OF_SERIALIZABLE:
                return (<any>this.value as Serializable[]).map((v) => v._id);
            // Date
            case FilterType.DATE:
                return (<Date>(this.value as any)).toISOString();
            // Boolean
            case FilterType.BOOLEAN:
                return this.value ? 1 : 0;
            // All other
            case FilterType.NUMBER:
            case FilterType.TEXT:
            case FilterType.ARRAY:
            default:
                return this.value;

        }
    }

    /**
     * Get value from param
     * @param value 
     */
    public fromParam(params: any[]) {
        // Get value from param value
        switch (this.type) {
            // Serializable
            case FilterType.SERIALIZABLE:
                (this.value as Serializable) = { _id: params.pop() };
                break;
            // Array of serializable
            case FilterType.ARRAY_OF_SERIALIZABLE:
                (<any[]>(this.value as any)) = params.map((v) => { return { _id: v } });
                break;
            // Number
            case FilterType.NUMBER:
                (<number>(this.value as any)) = parseFloat(params.pop());
                break;
            // Date
            case FilterType.DATE:
                (<Date>(this.value as any)) = new Date(params.pop());
                break;
            case FilterType.BOOLEAN:
                (<boolean>(this.value as any)) = !!Number(params.pop());
                break;
            // Array
            case FilterType.ARRAY:
                (<any[]>(this.value as any)) = params;
                break;

            // All other
            case FilterType.TEXT:
            default:
                this.value = params.pop();
        }

        // We might also need to load serializable
        if (this.type === FilterType.SERIALIZABLE && this.service) {
            // Get serializable
            this.service.get(this.value)
                .then((validation) => {
                    // Check validation
                    if (!validation.isValid) {
                        return;
                    }

                    // Assign data
                    Object.assign(this.value as Object, validation.data as TValue);
                });
        }

        // Also we might need to load serializable in case of array of them
        if (this.type === FilterType.ARRAY_OF_SERIALIZABLE && this.service) {
            // Get each serializable
            Promise.all((<any>this.value as any[]).map((serializable) => (this.service as AngularService<any, any>).get(serializable)))
                .then((validations) => {
                    // Process validations
                    (this.value as any) = validations
                        // Only valid
                        .filter((validation) => validation.isValid)
                        // Get data
                        .map((validation) => validation.data);
                });
        }
    }
}