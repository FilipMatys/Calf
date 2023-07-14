// External modules
import { PropertyType, IPropertyDefinition, Serializable, ISchema } from "@calf/serializable";

/**
 * Sqlite parser
 */
export class SQLiteParser {

    /**
     * Safe date
     * @param value 
     */
    private safeDate(value: any): Date {
        return value ? new Date(value) : null;
    }

    /**
     * Safe double
     * @param value 
     */
    private safeDouble(value: any): number {
        return isNaN(value) || value === null ? 0 : parseFloat(value);
    }

    /**
     * Safe integer
     * @param value 
     */
    private safeInteger(value: any): number {
        return isNaN(value) || value === null ? 0 : parseInt(value);
    }

    /**
     * Safe string
     * @param value
     */
    private safeString(value: string): string {
        return value.replace(/\'/g, "''");
    }

    /**
     * Safe object
     * @param value 
     */
    private safeObject(value: any): any {
        // Check if value is set
        if (!value) {
            // Nothing to parse
            return null;
        }

        // Check for string
        if (typeof value !== "string") {
            // Already parsed
            return value;
        }

        // Parse value
        return JSON.parse(value);
    }

    /**
     * Safe reference
     * @param value 
     */
    private safeReference(value: any): Serializable {
        return value ? { _id: value } : null;
    }

    /**
     * Row from SQLite
     * @param row 
     */
    public rowFromSQLite<T>(schema: ISchema<IPropertyDefinition>, row: any): T {
        // Init result
        const result: T = {} as any;

        // Iterate row keys
        Object.keys(row).forEach((key) => {
            // Check if name is in schema
            if (!(key in schema.properties)) {
                return;
            }

            // Map value
            (result as any)[key] = this.fromSQLite(schema.properties[key], row[key]);
        });

        // Return result
        return result;
    }

    /**
     * Type to sqlite
     * @param type 
     */
    public typeToSQLite(type: number): string {
        // Check type
        switch (type) {
            // Boolean, Date
            case PropertyType.BOOLEAN:
            case PropertyType.DATE:
                return "NUMERIC";
            // Double
            case PropertyType.DOUBLE:
                return "REAL";
            // Integer
            case PropertyType.INT:
                return "INTEGER";
            // All other
            default:
                return "TEXT";
        }
    }

    /**
     * From SQLite
     * @param definition 
     * @param value 
     */
    public fromSQLite(definition: IPropertyDefinition, value: any): any {
        // Parse
        const parse = (definition: IPropertyDefinition, value: any): any => {
            // Check type
            switch (definition.type) {
                // Boolean
                case PropertyType.BOOLEAN:
                    return !!value;
                // Date
                case PropertyType.DATE:
                    return this.safeDate(value);
                // Double
                case PropertyType.DOUBLE:
                    return this.safeDouble(value);
                // Integer
                case PropertyType.INT:
                    return this.safeInteger(value);
                // Mixed and embedded
                case PropertyType.MIXED:
                case PropertyType.EMBEDDED:
                    return this.safeObject(value);
                case PropertyType.REFERENCE:
                    return this.safeReference(value);
                // Buffer, text, oid and string
                case PropertyType.BUFFER:
                case PropertyType.TEXT:
                case PropertyType.OID:
                case PropertyType.STRING:
                default:
                    return value;

            }
        }

        // Check definition for array
        if (!definition.isArray) {
            // Parse value
            return parse(definition, value);
        }

        // Init result
        const result: any[] = [];

        // Get safe value
        const sValue = this.safeObject(value);

        // Check if sValue is set
        if (!sValue) {
            // Return value (not set)
            return sValue;
        }

        // Process array
        (sValue as Array<any>).forEach((item) => result.push(parse(definition, item)));

        // Return result
        return result;
    }

    /**
     * To SQLite
     * @param definition 
     * @param value 
     */
    public toSQLite(definition: IPropertyDefinition, value: any): any {
        // Parse function
        const parse = (definition: IPropertyDefinition, value: any): any => {
            // Check type
            switch (definition.type) {
                // Boolean
                case PropertyType.BOOLEAN:
                    return value ? 1 : 0;
                // Date
                case PropertyType.DATE:
                    // Check if value is set
                    if (!value) {
                        return 'null';
                    }

                    // Check instance
                    if (value instanceof Date) {
                        return value.getTime();
                    }
                    else {
                        return new Date(value).getTime();
                    }

                // Double
                case PropertyType.DOUBLE:
                    return this.safeDouble(value);
                // Integer
                case PropertyType.INT:
                    return this.safeInteger(value);
                // Mixed and embedded
                case PropertyType.MIXED:
                case PropertyType.EMBEDDED:
                    // Check if value is set
                    if (!value) {
                        return 'null';
                    }

                    // Stringify
                    return `'${this.safeString(JSON.stringify(value))}'`;
                // Reference
                case PropertyType.REFERENCE:
                    // Check if value is set
                    if (!value) {
                        return 'null';
                    }

                    // Check for string
                    if (value instanceof String) {
                        return `'${value}'`;
                    }
                    else {
                        // Check for _id
                        if (value._id) {
                            return `'${value._id}'`;
                        }
                        else {
                            return 'null';
                        }
                    }

                // Buffer, text, oid and string
                case PropertyType.BUFFER:
                case PropertyType.TEXT:
                case PropertyType.OID:
                case PropertyType.STRING:
                default:
                    return value ? `'${this.safeString(value)}'` : 'null';
            }
        }

        // Check definition for array
        if (!definition.isArray) {
            // Parse value
            return parse(definition, value);
        }

        // Check if value is set
        if (!value) {
            // No value
            return 'null';
        }

        // Init result
        const result: any[] = [];

        // Property is array, so we need to parse each value
        (value as Array<any>).map((item) => {
            // Check type
            switch (definition.type) {
                // Boolean
                case PropertyType.BOOLEAN:
                    return item ? 1 : 0;

                // Date
                case PropertyType.DATE:
                    // Check if item is set
                    if (!item) {
                        return null;
                    }

                    // Check for date instance
                    if (item instanceof Date) {
                        return item.getTime();
                    }
                    else {
                        return new Date(item).getTime();
                    }

                // Reference
                case PropertyType.REFERENCE:
                    // Process reference, checking for id as 
                    // the value itself
                    if (item instanceof String) {
                        return item;
                    }
                    // Check for _id
                    else if (item._id) {
                        return item._id;
                    }
                    // Invalid value
                    else {
                        return null;
                    }

                // Default value
                default:
                    return item ? item : null;
            }
        }).forEach((item) => result.push(item));

        // Stringify result
        return `'${JSON.stringify(result)}'`;
    }
}