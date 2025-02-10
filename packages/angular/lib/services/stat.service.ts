/**
 * Abstract stat service class
 */
export abstract class StatService<TEnum> {

    // Enumeration
    protected enumeration: TEnum;

    // Is constant flag
    private isConstant: boolean = false;

    /**
     * Constructor
     * @param e 
     */
    constructor(e: TEnum) {
        // Assign values
        this.enumeration = e;

        // Check constant
        this.checkIsConstant();
    }

    /**
     * Get values
     */
    public getValues<T>(): T[] {
        // Init result array
        const values: T[] = [];

        // Iterate through enum values
        for (var n in this.enumeration) {
            // Check for constant or typeof number
            if (this.isConstant || typeof this.enumeration[n] === "number") {
                // Add value to array of values
                values.push(this.enumeration[n] as any);
            }
        }

        // Return result
        return values;
    }

    /**
     * Get labelled values
     */
    public getLabelledValues<T>(): { label: string, value: T }[] {
        // Map values
        return this.getValues<T>().map((v) => {
            // Create labelled value
            return {
                label: this.getLabel<T>(v),
                value: v
            }
        });
    }

    /**
     * Get label of given value
     * @param value 
     */
    public abstract getLabel<T>(value: T): string;

    /**
     * Get color
     * @param value 
     * @returns 
     */
    public getColor<T>(value: T): string { return ""; }

    /**
     * Get icon
     * @param value 
     * @returns 
     */
    public getIcon<T>(value: T): string { return ""; }

    /**
     * Get description
     * @param value 
     * @returns 
     */
    public getDescription<T>(value: T): string { return ""; }

    /**
     * Check if enumeration is constant
     */
    private checkIsConstant() {
        // Need to find at least one number value and one
        // string value
        let hasString: boolean = false;
        let hasNumber: boolean = false;

        // Iterate through enum values
        for (var n in this.enumeration) {
            // Check for number
            if (typeof this.enumeration[n] === "number") {
                hasNumber = true;
            }
            // Check for string
            else if (typeof this.enumeration[n] === "string") {
                hasString = true;
            }
        }

        // Assign value for isConstant flag
        this.isConstant = !hasNumber || !hasString;
    }
}