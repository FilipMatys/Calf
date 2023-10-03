// External modules
import "reflect-metadata";

// Data
import { IPropertyDefinition } from "../interfaces/property-definition.interface";
import { IProperty } from "../interfaces/property.interface";
import { IDefault } from "../interfaces/default.interface";
import { IRequired } from "../interfaces/required.interface";
import { IUnique } from "../interfaces/unique.interface";
import { IArray } from "../interfaces/array.interface";
import { IIndexed } from "../interfaces/indexed.interface";

// Symbols
import { DEFAULT_METADATA_KEY } from "../symbols/default.symbol";
import { PROPERTY_METADATA_KEY } from "../symbols/property.symbol";
import { REQUIRED_METADATA_KEY } from "../symbols/required.symbol";
import { UNIQUE_METADATA_KEY } from "../symbols/unique.symbol";
import { ARRAY_METADATA_KEY } from "../symbols/array.symbol";
import { INDEXED_METADATA_KEY } from "../symbols/indexed.symbol";

// Parsers
import { BaseParser } from "./base.parser";

/**
 * Property parser
 */
export class PropertyParser extends BaseParser<IPropertyDefinition> {

    /**
     * Parse property
     * @param target 
     * @param property 
     */
    public parse(target: Object, name: string): IPropertyDefinition | undefined {
        // Property
        const property = this.getProperty(target, name);

        // Check property
        if (!property) {
            return undefined;
        }

        // Check for property name
        !property.name && (property.name = name);

        // Default
        const lDefault = this.getDefault(target, name);

        // Required
        const required = this.getRequired(target, name);

        // Unique
        const unique = this.getUnique(target, name);

        // Array
        const array = this.getArray(target, name);

        // Indexed
        const indexed = this.getIndexed(target, name);

        // Check for property type definition
        if (property.type instanceof Array) {
            // Set array as true
            array.isArray = true;

            // Extract type
            property.type = property.type[0];
        }

        // Now merge those into one
        return Object.assign({}, property, lDefault, required, unique, array, indexed);
    }

    /**
     * Get property
     * @param target 
     * @param property 
     */
    private getProperty(target: Object, name: string): IProperty {
        // Get data from metadata
        return Reflect.getMetadata(PROPERTY_METADATA_KEY, target, name);
    }

    /**
     * Get default
     * @param target 
     * @param name 
     */
    private getDefault(target: Object, name: string): IDefault<any> {
        // Init default definition
        const lDefault: IDefault<any> = { default: null };

        // Assign data from metadata
        return Object.assign(lDefault, Reflect.getMetadata(DEFAULT_METADATA_KEY, target, name) || {});
    }

    /**
     * Get required
     * @param target 
     * @param name 
     */
    private getRequired(target: Object, name: string): IRequired {
        // Init required definition
        const required: IRequired = { isRequired: false };

        // Assign data from metadata
        return Object.assign(required, Reflect.getMetadata(REQUIRED_METADATA_KEY, target, name) || {});
    }

    /**
     * Get unique
     * @param target 
     * @param name 
     */
    private getUnique(target: Object, name: string): IUnique {
        // Init unique definition
        const unique: IUnique = { isUnique: false };

        // Assign data from metadata
        return Object.assign(unique, Reflect.getMetadata(UNIQUE_METADATA_KEY, target, name) || {});
    }

    /**
     * Get array
     * @param target 
     * @param name 
     */
    private getArray(target: Object, name: string): IArray {
        // Init array definition
        const array: IArray = { isArray: false };

        // Assign data from metadata
        return Object.assign(array, Reflect.getMetadata(ARRAY_METADATA_KEY, target, name) || {});
    }

    /**
     * Get indexed
     * @param target 
     * @param name 
     */
    private getIndexed(target: Object, name: string): IIndexed {
        // Init indexed definition
        const indexed: IIndexed = { isIndexed: false };

        // Assign data from metadata
        return Object.assign(indexed, Reflect.getMetadata(INDEXED_METADATA_KEY, target, name) || {});
    }
}