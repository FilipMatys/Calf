// External modules
import { IPropertyDefinition, ISchema, SchemaParser as BaseSchemaParser } from "@calf/serializable";

// Constants
import { SQLITE_KEYWORDS } from "../constants/keywords.constant";

/**
 * Schema parser
 */
export class SchemaParser extends BaseSchemaParser {

   /**
    * Parse target
    * @param target 
    */
   public parse(target: new () => any): ISchema<IPropertyDefinition> {
      // Get base schema
      const schema = super.parse(target);

      // Make sure to remove all "." from schema entity name
      schema.entity.name = schema.entity.name.replace(/\./g, "_");

      // Also process properties
      const pKeys = Object.keys(schema.properties);

      // Iterate property keys
      for (let index = 0; index < pKeys.length; index++) {
         // Get property key
         const pKey = pKeys[index];

         // Get definition
         const pDefinition = schema.properties[pKey];

         // Normalize property name
         SQLITE_KEYWORDS.indexOf(pDefinition.name.toUpperCase()) !== -1 && (pDefinition.name = `c${pDefinition.name}`);
      }

      // Return schema
      return schema;
   }
}