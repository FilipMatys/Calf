import { Ecomail } from "../lib/ecomail";

describe("Ecomail", async () => {

    // Initialize ecomail
    Ecomail.initialize({
        host: "https://api2.ecomailapp.cz",
        key: "6094e4567d1e26094e4567d1e4"
    });

    // Get list
    const [list] = await Ecomail.Lists.list();

    // Get subscribers
    console.log(await Ecomail.Lists.subscribers(list));

    // Unsubscribe
    console.log(await Ecomail.Lists.unsubscribe(list, { email: "kratochviljiri@geph.cz" }));


});