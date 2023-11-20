// Services
import { ExchangeMarketService } from "../services/exchange-market.service";

/**
 * CNB
 * @description Czech national bank
 */
export abstract class CNB {

    // Singleton
    private constructor() {}

    /**
     * Exchange market
     * @description Services for the exchange market
     */
    public static readonly ExchangeMarket: ExchangeMarketService = new ExchangeMarketService();
}