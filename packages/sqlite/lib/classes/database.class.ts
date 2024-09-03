// Classes
import { SQLiteConnection } from "./connection.class";
import { SQLiteDao } from "./dao.class";

/**
 * SQLite database
 */
export class SQLiteDatabase {

    // Connection
    protected static connection: SQLiteConnection;

    // Dictionary of daos
    protected static daos: { [name: string]: SQLiteDao<any> } = {};

    // Is ready flag for database
    protected static isReady: boolean = false;

    // Make constructor private
    private constructor() { };

    /**
     * Wait for database to be ready
     */
    public static async ready(): Promise<void> {
        // Check flag
        if (this.isReady) {
            // Already ready
            return;
        }

        // Create new promise
        return new Promise<void>((resolve) => {
            // Create interval to check 
            const interval = setInterval(() => {
                // Check for is ready
                if (!this.isReady) {
                    return;
                }

                // Clear interval
                clearInterval(interval);

                // Resolve
                return resolve();
            }, 50);
        });
    }

    /**
     * Initialize
     * @param connection 
     */
    public static async init(connection: SQLiteConnection): Promise<void> {
        // Assign connection
        this.connection = connection;

        // Connect
        await this.connection.connect();

        // Check whether to update schema
        if (await this.connection.isSchemaUpdateRequired()) {
            // Initialize daos
            await this.initDaos();
        }

        // Set database as ready
        this.isReady = true;
    }

    /**
     * Execute payload
     * @param payload 
     * @param params 
     */
    public static async execute<T>(payload: string | string[], params?: any): Promise<T> {
        // Try to execute query
        try {
            // Execute query
            const result = await this.connection.execute<T>(payload, params);

            // Resolve
            return Promise.resolve(result);
        }
        catch (e) {
            // Reject
            return Promise.reject(e);
        }
    }

    /**
     * Check if DAO is registered
     * @param name 
     */
    public static isRegistered(name: string): boolean {
        return name in this.daos;
    }

    /**
     * Register dao
     * @param name 
     * @param dao 
     */
    public static async register<T>(name: string, dao: SQLiteDao<T>): Promise<void> {
        // First check if is already registered
        if (this.isRegistered(name)) {
            // Already registered
            return;
        }

        // Assign dao
        this.daos[name] = dao;

        // Check for connection
        if (!this.connection || !this.connection.isConnected()) {
            // No connection
            return;
        }

        // Now check whether schema update is required
        if (!(await this.connection.isSchemaUpdateRequired())) {
            // No need to init
            return;
        }

        // Initialize dao
        await dao.init();
    }

    /**
     * Get dao
     * @param name 
     */
    public static dao<T>(name: string): SQLiteDao<T> {
        return this.daos[name];
    }

    /**
     * Init daos
     */
    private static async initDaos(): Promise<void> {
        // Get keys
        const keys: string[] = Object.keys(this.daos);

        // Iterate keys to initialize or daos
        for (let index = 0; index < keys.length; index++) {
            // Initialize dao
            await this.daos[keys[index]].init();
        }
    }
}