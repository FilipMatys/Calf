// External modules
import { expect } from "chai";

// Import library
import { Property, PropertyType, Entity, Default, Required, Unique, Timestamp, SchemaParser, Extends } from "../lib/serializable";

class Human {
    @Property(PropertyType.DOUBLE)
    public height: number = 0;
}

class Thing {

    @Property(PropertyType.DOUBLE)
    public weight: number = 0;
}

@Entity("Person")
@Extends(Thing, Human)
@Timestamp()
class Person {

    @Required()
    @Unique()
    @Property(PropertyType.DOUBLE)    
    public age: number = 0;

    @Property("name", PropertyType.TEXT)
    @Default<string>("Mr Smith")
    public name?: string = undefined;
}

// EXPORT TEST
describe("Serializable", () => {
    // Init parser
    let parser = new SchemaParser();

    console.log(parser.parse(Person));
});