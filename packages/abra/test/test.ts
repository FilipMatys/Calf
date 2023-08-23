import { AbraClient, AbraModule } from "../lib/abra";


describe("abra", async () => {

    await AbraClient.initialize({
        host: "",
        port: 1111,
        ssl: false,
        instance: "",
        auth: { username: "", password:"" }
    })

    const res = await AbraClient.Api.getList(AbraModule.Firms, { take: 1 })

    console.log(res)
});