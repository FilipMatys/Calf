// External modules
import { ISchema, IPropertyDefinition } from "@calf/serializable";
import { IQuery } from "@calf/common";

// Parsers
import { SQLiteParser } from "../parsers/sqlite.parser";

/**
 * Query builder
 */
export class QueryBuilder<T> {

    // Init sqlite parser
    private sqLiteParser: SQLiteParser = new SQLiteParser();

    /**
     * Build select
     * @param select
     */
    private buildSelect(select: string[]): string {
        // Check if select is set
        if (!select || !select.length) {
            return "SELECT *";
        }

        // Otherwise return selected properties
        return `SELECT ${select.join(",")}`
    }

    /**
     * Build from
     * @param name 
     */
    private buildFrom(name: string): string {
        return `FROM ${name}`;
    }

    /**
     * Build limit
     * @param limit 
     */
    private buildLimit(limit: number): string {
        return `LIMIT ${limit}`;
    }

    /**
     * Build offset
     * @param offset 
     */
    private buildOffset(offset: number): string {
        return `OFFSET ${offset}`;
    }

    /**
     * Build order by
     * @param orderBy 
     */
    private buildOrderBy(orderBy: string[]): string {
        // Init list of columns to order by
        const columns: string[] = [];

        // Iterate through order by columns
        orderBy.forEach((ob) => {
            // Check for "-" sign
            if (ob.startsWith("-")) {
                // DESCENDING
                columns.push(`${ob.substr(1)} DESC`);
            }
            else {
                // ASCENDING
                columns.push(`${ob} ASC`);
            }
        });

        // Return order query
        return `ORDER BY ${columns.join(",")}`;
    }

    /**
     * Build where
     * @param schema 
     * @param payload 
     */
    private buildWhere(schema: ISchema<IPropertyDefinition>, payload: any): string {
        // Init query
        const dbQuery: string[] = ["WHERE"];

        // Create local parser function
        const parse = (payload: any): string => {
            // Init conditions
            const conditions: string[] = [];

            // Process payload
            Object.keys(payload).forEach((key) => {
                // Check for $and
                if (key === "$and") {
                    // Init and conditions
                    const andConditions: string[] = [];

                    // Parse conditions
                    payload[key].forEach((cond: any) => andConditions.push(parse(cond)));

                    // Add conditions
                    conditions.push(`(${andConditions.join(" AND ")})`);
                }
                // Check for $or
                else if (key === "$or") {
                    // Init or conditions
                    const orConditions: string[] = [];

                    // Parse conditions
                    payload[key].forEach((cond: any) => orConditions.push(parse(cond)));

                    // Add conditions
                    conditions.push(`(${orConditions.join(" OR ")})`);
                }
                // Else
                else {
                    // Check if key is in schema
                    if (!(key in schema.properties)) {
                        // Ignore key
                        return;
                    }

                    // Get value
                    const value: any = payload[key];

                    // Check for null value
                    if (value === null) {
                        // Add condition
                        conditions.push(`${key} IS NULL`);
                    }
                    // Check if value is primitive or object with no operator
                    else if (value !== Object(value) || !Object.keys(value).filter(k => k.startsWith("$")).length) {
                        // Add condition
                        conditions.push(`${key} = ${this.sqLiteParser.toSQLite(schema.properties[key], value)}`);
                    }
                    // Value is object with operator
                    else {
                        // Init and conditions as the operators may behave as AND
                        const andConditions: string[] = [];

                        // Process all operators
                        Object.keys(value).forEach((operator) => {
                            // Get operator value
                            const oValue = value[operator];

                            // Process operator
                            switch (operator) {
                                // EQUAL
                                case "$eq":
                                    // Check operator value
                                    if (oValue !== null) {
                                        // Add equal query
                                        andConditions.push(`${key} = ${this.sqLiteParser.toSQLite(schema.properties[key], oValue)}`);
                                    }
                                    else {
                                        // Add null query
                                        andConditions.push(`${key} IS NULL`);
                                    }
                                    break;

                                // Not EQUAL
                                case "$ne":
                                    // Check operator value
                                    if (oValue !== null) {
                                        // Add NOT equal query
                                        andConditions.push(`${key} != ${this.sqLiteParser.toSQLite(schema.properties[key], oValue)}`);
                                    }
                                    else {
                                        // Add null query
                                        andConditions.push(`${key} IS NOT NULL`);
                                    }
                                    break;

                                // LIKE
                                case "$like":
                                    andConditions.push(`${key} LIKE '${oValue}'`);
                                    break;

                                // GREATER
                                case "$gt":
                                    // Add greater query
                                    andConditions.push(`${key} > ${this.sqLiteParser.toSQLite(schema.properties[key], oValue)}`);
                                    break;

                                // GREATER or EQUAL
                                case "$gte":
                                    // Add greater or equal query
                                    andConditions.push(`${key} >= ${this.sqLiteParser.toSQLite(schema.properties[key], oValue)}`);
                                    break;

                                // LESSER
                                case "$lt":
                                    // Add lesser query
                                    andConditions.push(`${key} < ${this.sqLiteParser.toSQLite(schema.properties[key], oValue)}`);
                                    break;

                                // LESSER or EQUAL
                                case "$lte":
                                    // Add lesser or equal query
                                    andConditions.push(`${key} <= ${this.sqLiteParser.toSQLite(schema.properties[key], oValue)}`);
                                    break;

                                // IN
                                case "$in":
                                    // Add in query
                                    andConditions.push(`${key} IN (${(oValue as Array<any>).map((item) => this.sqLiteParser.toSQLite(schema.properties[key], item)).join(',')})`);
                                    break;

                                // Not IN
                                case "$nin":
                                    // Add not in query
                                    andConditions.push(`${key} NOT IN (${(oValue as Array<any>).map((item) => this.sqLiteParser.toSQLite(schema.properties[key], item)).join(',')})`);
                                    break;

                            }
                        });

                        // Add conditions
                        conditions.push(`${andConditions.join(" AND ")}`);
                    }
                }
            });

            // Return conditions
            return `(${conditions.join(" AND ")})`;
        };

        // Parse payload
        dbQuery.push(parse(payload));

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Insert query
     * @param schema 
     * @param payload 
     */
    public insert(schema: ISchema<IPropertyDefinition>, payload: T): string {
        // Init query
        const dbQuery: string[] = [`INSERT INTO ${schema.entity.name}`];

        // Init list of fields and values
        const fields: string[] = [];
        const values: any[] = [];

        // We need to go through the schema properties
        Object.keys(schema.properties).forEach((key: string) => {
            // Get definition
            const definition = schema.properties[key];
            // Get value
            const value = (payload as any)[key];

            // Init db value
            let dbValue: any;

            // Check for value
            if (typeof (value) === undefined) {
                // Check for default value
                if (typeof (definition.default) === undefined) {
                    return;
                }
                else {
                    // Assign default value as db value
                    dbValue = this.sqLiteParser.toSQLite(definition, definition.default);
                }
            }
            else {
                dbValue = this.sqLiteParser.toSQLite(definition, value);
            }

            // Add field and value
            fields.push(key);
            values.push(dbValue);
        });

        // Add fields and values
        dbQuery.push(`(${fields.join(',')})`, "VALUES", `(${values.join(',')})`);

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Update query
     * @param schema 
     * @param query 
     * @param payload 
     */
    public update(schema: ISchema<IPropertyDefinition>, query: IQuery, payload: T): string {
        // Init query
        const dbQuery: string[] = ["UPDATE", schema.entity.name, "SET"];

        // Init list of updates
        const updates: string[] = [];

        // Iterate payload
        Object.keys(payload).forEach((key) => {
            // Check if key is in schema
            if (!(key in schema.properties)) {
                return;
            }

            // Add assignment
            updates.push(`${key}=${this.sqLiteParser.toSQLite(schema.properties[key], (payload as any)[key])}`);
        });

        // Add updates to db query
        dbQuery.push(updates.join(", "));

        // Check for where
        if (query.filter && Object.keys(query.filter).length) {
            dbQuery.push(this.buildWhere(schema, query.filter));
        }

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Delete query
     * @param schema 
     * @param query 
     */
    public delete(schema: ISchema<IPropertyDefinition>, query: IQuery): string {
        // Init query
        const dbQuery: string[] = ["DELETE"];

        // From
        dbQuery.push(this.buildFrom(schema.entity.name));

        // Check for where
        if (query.filter && Object.keys(query.filter).length) {
            dbQuery.push(this.buildWhere(schema, query.filter));
        }

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Select query
     * @param schema 
     * @param query 
     */
    public select(schema: ISchema<IPropertyDefinition>, query: IQuery): string {
        // Init query
        const dbQuery: string[] = [];

        // Select
        dbQuery.push(this.buildSelect(query.select));
        // From
        dbQuery.push(this.buildFrom(schema.entity.name));

        // Check for where
        if (query.filter && Object.keys(query.filter).length) {
            dbQuery.push(this.buildWhere(schema, query.filter));
        }

        // Check for order by
        if (query.sort && query.sort.length) {
            dbQuery.push(this.buildOrderBy(query.sort));
        }

        // Check for limit
        if (query.limit) {
            dbQuery.push(this.buildLimit(query.limit));
        }

        // Check for offset/skip
        if (query.skip) {
            dbQuery.push(this.buildOffset(query.skip));
        }

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Count query
     * @param schema 
     * @param query 
     */
    public count(schema: ISchema<IPropertyDefinition>, query: IQuery): string {
        // Call select with COUNT(*)
        return this.select(schema, {
            ...query,
            populate: [],
            sort: [],
            select: ["COUNT(*)"]
        });
    }

    /**
     * Create table
     * @param schema 
     */
    public createTable(schema: ISchema<IPropertyDefinition>): string {
        // Init db query
        const dbQuery: string[] = ["CREATE TABLE IF NOT EXISTS", schema.entity.name];

        // Init fields list
        const fields: string[] = [];

        // Process fields
        Object.keys(schema.properties).forEach((key) => {
            // Add field
            fields.push(`${key} ${this.sqLiteParser.typeToSQLite(schema.properties[key].type)}`);
        });

        // Add fields to query
        dbQuery.push(`(${fields.join(", ")})`);

        // Return query
        return dbQuery.join(" ");
    }

    /**
     * Alter table columns
     * @param schema 
     */
    public alterTableColumns(schema: ISchema<IPropertyDefinition>): string[] {
        // Init queries
        const dbQueries: string[] = [];

        // Process fields
        Object.keys(schema.properties).forEach((key) => {
            // Add field
            dbQueries.push(`ALTER TABLE ${schema.entity.name} ADD COLUMN ${key} ${this.sqLiteParser.typeToSQLite(schema.properties[key].type)}`);
        });

        // Return queries
        return dbQueries;
    }
}