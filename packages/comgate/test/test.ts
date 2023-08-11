// External modules
import fetch from "node-fetch";

// Lib
import { ComGate, RequestService, Status } from "../lib/comgate";

/**
 * HTTP request service
 */
class HttpRequestService extends RequestService {
    /**
     * Get request
     * @param endpoint 
     */
    public async get<TResult>(endpoint: string): Promise<TResult> {
        // Get url
        const url = new URL(endpoint);

        // Make request
        const response = await fetch(url, {
            method: "get",
            headers: { "Content-type": "application/json" }
        });

        // Return result
        return response.json();
    }

    /**
     * Post request
     * @param endpoint 
     */
    public async post<TPayload, TResult>(endpoint: string, payload: TPayload): Promise<TResult> {
        // Get url
        const url = new URL(endpoint);

        // Make request
        const response = await fetch(url, {
            method: "post",
            body: JSON.stringify(payload),
            headers: { "Content-type": "application/json" }
        });

        // Return result
        return response.json();
    }
}

describe("ComGate", async () => {
    // Init client
    const client = new ComGate();

    // Initialize
    client.init({ url: "http://192.168.1.105", port: 33350, password: "27924505" }, new HttpRequestService());

    // Get info
    console.log(await client.terminal({ checkOnline: true }));

    // Get transaction id
    const transactionId = "kokotinka" + Math.random();

    console.log("Starting closing");

    // Start payment
    const pResponse = await client.closing({
        request: {
            transactionId: transactionId
        }
    });

    console.log(pResponse);

    console.log("Polling for result");

    await new Promise<void>((resolve) => {
        // Create interval
        const interval = setInterval(async () => {
            // Get status
            const response = await client.status({ transactionId: transactionId });

            console.log(response);

            // Check for finished status
            if (response.status === Status.Finished) {
                // Clear interval
                clearInterval(interval);

                // Resolve
                resolve();
            }
        }, 2000);
    });

    // Get result
    const rResponse = await client.result({ transactionId: transactionId });

    console.log(rResponse);

    // Confirm
    const cResponse = await client.confirm({ transactionId: transactionId, confirm: true });

    console.log(cResponse);
});