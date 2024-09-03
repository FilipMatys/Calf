/**
 * SQLite Connection
 */
export abstract class SQLiteConnection {

    /**
     * Connect to SQLite database
     */
    public abstract connect(): Promise<void>;

    /**
     * Execute
     * @param payload 
     * @param params 
     */
    public abstract execute<T>(payload: string | string[], params?: any): Promise<T>;

    /**
     * Check if is connected
     */
    public abstract isConnected(): boolean;

    /**
     * Is schema update required
     * @description Check whether schema update is required.
     * @returns
     */
    public async isSchemaUpdateRequired(): Promise<boolean> {
        // Return true
        return true;
    }
}