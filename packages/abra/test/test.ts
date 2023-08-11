// External modules
import { AbraClient, AbraModule } from "../lib/abra";

describe("AbraClient", async () => {

    // Initialize Abra client
    AbraClient.initialize({ ssl: true, host: "", instance: "", auth: { username: "", password: "" } });

    AbraClient.Api.execute("post", AbraModule.BillsOfDelivery, ["import", "spmassemblylists", "4s6df4ds65f4"])
});