// Data
import { ISchema } from "../interfaces/schema.interface";
import { IPropertyDefinition } from "../interfaces/property-definition.interface";

// Parsers
import { BaseParser } from "./base.parser";
import { EntityParser } from "./entity.parser";
import { PropertyParser } from "./property.parser";

/**
 * Schema parser
 */
export class SchemaParser extends BaseParser<ISchema<IPropertyDefinition>> {

    /**
     * Parse target
     * @param target 
     */
    public parse(target: new () => any): ISchema<IPropertyDefinition> {
        // Initialize schema
        const schema: ISchema<IPropertyDefinition> = { 
            entity: {},
            properties: {}
        };

        // Init entity parser
        const eParser: EntityParser = new EntityParser();

        // Get entity definition
        schema.entity = eParser.parse(target);

        // Check for extends
        if (schema.entity && schema.entity.extends && schema.entity.extends.length) {
            // Process each entity
            schema.entity.extends.forEach((extend) => this.mapProperties(extend, schema));
        }

        // Map properties
        this.mapProperties(target, schema);

        // Return schema
        return schema;
    }

    /**
     * Map properties
     * @param target 
     * @param schema 
     */
    private mapProperties(target: new () => any, schema: ISchema<IPropertyDefinition>): void {
        // Init property parser
        const pParser: PropertyParser = new PropertyParser();

        // Get target instance, otherwise we wont get access
        // to its properties
        const instance = new target();
        // And keep original
        const original = instance;

        // Initialize array of property names
        const propertyNames: string[] = this.getPropertyNames(instance);

        // Iterate each property name to get property definition
        propertyNames.forEach((name) => {
            // Get definition
            const pDefinition = pParser.parse(original, name);

            // Check if any definition was found
            if (!pDefinition) {
                return;
            }

            // Assign definition to schema
            // This condition is not needed, but typescript compilers
            // does not like it when it is not there
            if (schema.properties) {
                schema.properties[name] = pDefinition;
            }
        });
    }

    /**
     * Get property names
     * @param target 
     */
    private getPropertyNames(target: Object): string[] {
        // Init result
        const names: string[] = [];

        // Get all properties, inluding those from prototypes
        for (; target != null; target = Object.getPrototypeOf(target)) {
            // Get own property names
            const op = Object.getOwnPropertyNames(target);

            // Iterate names
            for (var index = 0; index < op.length; index++) {
                // Add name to array if it is not already there
                if (names.indexOf(op[index]) == -1) {
                    names.push(op[index]);
                }
            }
        }

        // Return names
        return names;
    }
}