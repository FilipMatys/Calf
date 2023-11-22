// External modules
import fetch from "node-fetch";
import * as moment from "moment";

// Interfaces
import { IExchangeRate } from "../interfaces/exchange-rate.interface";

/**
 * Exchange market service
 * @description Service for Exchange market
 */
export class ExchangeMarketService {

    // Set URL for exchange market
    private readonly URL: string = "https://www.cnb.cz/en/financial-markets/foreign-exchange-market";

    // Set URL for fixing
    private readonly URL_FIXING: string = `${this.URL}/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt`;

    /**
     * Fixing
     * @param date 
     */
    public async fixing(date: Date = new Date()): Promise<IExchangeRate[]> {
        // Init result
        const result: IExchangeRate[] = [];

        // Init params
        const params: string = `?date=${moment(date).format("DD.MM.YYYY")}`;

        // Make request
        const response = await fetch(`${this.URL_FIXING}${params}`, { method: "get" });

        // Get response content
        const content = await response.text();

        // Split content into parts
        const [head, _, ...rates] = content.split(/\r?\n/).filter((line) => line.length);

        // Process header
        const [fDate, fNumber] = head.split("#");

        // Get date
        const rDate = moment(fDate, "DD MMM YYYY ").toDate();
        // Get number
        const rNumber = Number(fNumber);

        // Iterate rates
        for (let rIndex = 0; rIndex < (rates || []).length; rIndex++) {
            // Parse line
            const [rCountry, _, rAmount, rCurrency, rValue] = rates[rIndex].split("|");

            // Add rate to result
            result.push({ date: rDate, number: rNumber, country: rCountry, amount: Number(rAmount), currency: rCurrency, value: Number(rValue) });
        }

        // Return result
        return result;
    }
}