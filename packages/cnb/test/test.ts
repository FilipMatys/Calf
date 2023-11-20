import { CNB } from "../lib/cnb";

describe("CNB", async () => {

    // Get fixing
    const rates = await CNB.ExchangeMarket.fixing();

    console.log(rates);
});