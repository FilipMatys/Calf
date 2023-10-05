// External modules
import { Entity, Property, PropertyType, Serializable, Timestamp } from "@calf/serializable";

// Import library
import { SchemaParser } from "../lib/parsers/schema.parser";
import { QueryBuilder } from "../lib/builders/query.builder";
import { SQLiteParser } from "../lib/parsers/sqlite.parser";

@Entity("ClassWithKeywords")
@Timestamp()
class ClassWithKeywords extends Serializable {

    @Property(PropertyType.STRING)
    public name?: string = undefined;
    
    @Property(PropertyType.STRING)
    public order?: string = undefined;
    
    @Property("property", PropertyType.STRING)
    public custom?: string = undefined;
}

describe("SQLite", () => {
    // Init parser
    const schemaParser = new SchemaParser(); 

    // Get schema
    const schema = schemaParser.parse(ClassWithKeywords);

    // Get builder
    const builder = new QueryBuilder<ClassWithKeywords>();

    // Get parser
    const sqLiteParser = new SQLiteParser();

    console.log(builder.insert(schema, { _id: null, name: "Name", order: "Order", custom: "Custom" }));
    console.log(builder.select(schema, { filter: { order: "1", custom: "2" }, select: ["order"] }));
    console.log(sqLiteParser.rowFromSQLite(schema, { cOrder: "1", property: "2" }));
});