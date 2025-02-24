// Interfaces
import { ICustomValidationFn } from "../interfaces/custom-validation-fn.interface";

// Enums
import { Boundaries } from "../enums/boundaries.enum";

/**
 * Validation result
 * @description Object being handled between function calls
 */
export class ValidationResult<TData, TMessage = string> {

    // Data
    public data?: TData;

    // Is valid flag
    public isValid: boolean;

    // List of errors
    public errors: TMessage[];

    // List of warnings
    public warnings: TMessage[];

    // List of messages
    public messages: TMessage[];

    /**
     * Constructor
     * @param data 
     */
    constructor(data?: TData) {
        // Assign data
        this.data = data;

        // Set is valid flag
        this.isValid = true;

        // Init arrays
        this.errors = [];
        this.warnings = [];
        this.messages = [];
    }

    /**
     * Add error
     * @param error 
     */
    public addError(error: TMessage): void {
        // Add error
        this.errors.push(error);

        // Set validation flag
        this.isValid = false;
    }

    /**
     * Add warning
     * @param warning
     */
    public addWarning(warning: TMessage): void {
        // Add warning
        this.warnings.push(warning);
    }

    /**
     * Add message
     * @param message 
     */
    public addMessage(message: TMessage): void {
        // Add message
        this.messages.push(message);
    }

    /**
     * Append validations
     * @param validations 
     */
    public append(...validations: ValidationResult<any, TMessage>[]): boolean {
        // Iterate validations
        validations.forEach((v) => {
            // Update is valid flag
            this.isValid = this.isValid && v.isValid;

            // Concat lists
            this.errors = this.errors.concat(v.errors);
            this.warnings = this.warnings.concat(v.warnings);
            this.messages = this.messages.concat(v.messages);
        });

        // Return current validation flag
        return this.isValid;
    }

    /**
     * Append as warnings
     * @param validations 
     * @description Append validations and converts its 
     * errors to warnings. Does not modify validation flag
     */
    public appendAsWarnings(...validations: ValidationResult<any, TMessage>[]): boolean {
        // Iterate validations
        validations.forEach((v) => {
            // Concat lists
            this.warnings = this.warnings.concat(v.warnings, v.errors);
            this.messages = this.messages.concat(v.messages);
        });

        // Return current validation flag
        return this.isValid;
    }

    /**
     * Validate
     * @description Validate using custom validation function
     * @param fn 
     * @param error 
     * @returns 
     */
    public validate(fn: ICustomValidationFn<TData>, error: TMessage): boolean {
        // Process result from custom function
        return this.processResult(fn(this.data as TData), error);
    }

    /**
     * Is true
     * @param selector 
     * @param error 
     */
    public isTrue(selector: (d: TData) => boolean, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData), error);
    }

    /**
     * Is false
     * @param selector 
     * @param error 
     */
    public isFalse(selector: (d: TData) => boolean, error: TMessage): boolean {
        return this.processResult(!selector(this.data as TData), error);
    }

    /**
     * Must
     * @param expression 
     * @param error 
     */
    public must(expression: boolean, error: TMessage): boolean {
        return this.processResult(expression, error);
    }

    /**
     * Is defined
     * @param selector 
     * @param error 
     */
    public isDefined(selector: (d: TData) => any, error: TMessage): boolean {
        // Get value
        const value = selector(this.data as TData);

        // Get result
        return this.processResult(typeof value !== 'undefined' && value !== null, error);
    }

    /**
     * Is not empty
     * @param selector 
     * @param error 
     */
    public isNotEmpty(selector: (d: TData) => string | any[], error: TMessage): boolean {
        return this.processResult(!!selector(this.data as TData).length, error);
    }

    /**
     * Is defined and not empty
     * @param selector 
     * @param error 
     */
    public isDefinedAndNotEmpty(selector: (d: TData) => string | any[], error: TMessage): boolean {
        return this.isDefined(selector, error) && this.isNotEmpty(selector, error);
    }

    /**
     * Contains
     * @param selector 
     * @param value 
     * @param error 
     */
    public contains<TValue>(selector: (d: TData) => string | TValue[], value: TValue, error: TMessage): boolean {
        return this.processResult((selector(this.data as TData) as TValue[]).indexOf(value) !== -1, error);
    }

    /**
     * Starts with
     * @param selector 
     * @param substring 
     * @param error 
     */
    public startsWith(selector: (d: TData) => string, substring: string, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData).startsWith(substring), error);
    }

    /**
     * Ends with
     * @param selector 
     * @param substring 
     * @param error 
     */
    public endsWith(selector: (d: TData) => string, substring: string, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData).endsWith(substring), error);
    }

    /**
     * Is of length
     * @param selector 
     * @param length 
     * @param error 
     */
    public isOfLength(selector: (d: TData) => string | any[], length: number, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData).length === length, error);
    }

    /**
     * Is longer
     * @param selector 
     * @param length 
     * @param error 
     */
    public isLonger(selector: (d: TData) => string | any[], length: number, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData).length > length, error);
    }

    /**
     * Is shorter
     * @param selector 
     * @param length 
     * @param error 
     */
    public isShorter(selector: (d: TData) => string | any[], length: number, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData).length < length, error);
    }

    /**
     * Is longer or of length
     * @param selector 
     * @param length 
     * @param error 
     */
    public isLongerOrOfLength(selector: (d: TData) => string | any[], length: number, error: TMessage): boolean {
        // Get value
        const value = selector(this.data as TData);

        // Process result
        return this.processResult(value.length === length || value.length > length, error);
    }

    /**
     * Is shorter or of length
     * @param selector 
     * @param length 
     * @param error 
     */
    public isShorterOfLength(selector: (d: TData) => string | any[], length: number, error: TMessage): boolean {
        // Get value
        const value = selector(this.data as TData);

        // Process result
        return this.processResult(value.length === length || value.length < length, error);
    }

    /**
     * Is equal
     * @param selector 
     * @param value 
     * @param error 
     */
    public isEqual<V>(selector: (d: TData) => V, value: V, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData) === value, error);
    }

    /**
     * Is greater
     * @param selector 
     * @param value 
     * @param error 
     */
    public isGreater(selector: (d: TData) => number, value: number, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData) > value, error);
    }

    /**
     * Is between
     * @param selector 
     * @param start 
     * @param boundaries
     * @param end 
     * @param error 
     */
    public isBetween(selector: (d: TData) => number, min: number, max: number, boundaries: Boundaries, error: TMessage): boolean {
        // Get value
        const lValue = selector(this.data as TData);

        // Check boundaries
        switch (boundaries) {
            // Exclusive
            case Boundaries.Exclusive:
                return this.processResult(lValue > min && lValue < max, error);

            // Inclusive/default
            case Boundaries.Inclusive:
            default:
                return this.processResult(lValue >= min && lValue <= max, error);
        }
    }

    /**
     * Is greater or equal
     * @param selector 
     * @param value 
     * @param error 
     */
    public isGreaterOrEqual(selector: (d: TData) => number, value: number, error: TMessage): boolean {
        // Get value
        const lValue = selector(this.data as TData);

        // Process result
        return this.processResult(lValue === value || lValue > value, error);
    }

    /**
     * Is lesser
     * @param selector 
     * @param value 
     * @param error 
     */
    public isLesser(selector: (d: TData) => number, value: number, error: TMessage): boolean {
        return this.processResult(selector(this.data as TData) < value, error);
    }

    /**
     * Is lesser or equal
     * @param selector 
     * @param value 
     * @param error 
     */
    public isLesserOrEqual(selector: (d: TData) => number, value: number, error: TMessage): boolean {
        // Get value
        const lValue = selector(this.data as TData);

        // Process result
        return this.processResult(lValue === value || lValue < value, error);
    }

    /**
     * Is match
     * @param selector 
     * @param regexp 
     * @param error 
     */
    public isMatch(selector: (d: TData) => string, regexp: RegExp, error: TMessage): boolean {
        return this.processResult(regexp.test(selector(this.data as TData)), error);
    }

    /**
     * Process result
     * @param result 
     * @param message 
     */
    private processResult(result: boolean, message: TMessage): boolean {
        // Add error if result was negative
        !result && this.addError(message);

        // Return result
        return result;
    }
}