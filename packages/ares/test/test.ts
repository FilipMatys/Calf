import { ARES } from "../lib/ares";

describe("ARES", async () => {

    const subject = await ARES.EconomicSubjects.returnEconomicSubject("00006947");

    // Get subject
    console.log(subject);
});