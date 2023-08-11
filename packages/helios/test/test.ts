import { HeliosClient, HeliosRequestMethod, HeliosRuntime, IHeliosResult, HeliosMerchandiseManagementDocumentsProcedureParameters, IHeliosBrowse, HeliosProcedures, HeliosProcedureActionType, HeliosProcedureResultSelect } from "../lib/helios";

// Login
const login = async (): Promise<HeliosRuntime | null> => {
    // // Execute login
    const lResponse = await HeliosClient.Execute.login(HeliosRuntime.create(""), {
        Domain: "",
        PluginSysName: "eServerEE",
        Version: "1.0",
        Username: "eshop_dev",
        Password: "Heslo123"
    });

    // Check response
    if (!lResponse.fields) {
        return null;
    }

    // Create runtime
    const runtime = HeliosRuntime.create(lResponse.fields.Result);

    // Change database
    console.log(await HeliosClient.Execute.changeDatabase(runtime, {
        Version: "1.0",
        DatabaseName: "Helios_cvicna_test"
    }));

    // Return runtime
    return runtime;
}

// Logout
const logout = async (runtime: HeliosRuntime): Promise<void> => {
    // Execute login
    await HeliosClient.Execute.logout(runtime, {
        Version: "1.0"
    });
}

// Calculate invoice
const calculateInvoice = async (runtime: HeliosRuntime, id: number) => {
    // Init recalculation parameters
    const recalculation = new HeliosProcedures.MerchandiseManagementDocumentsRecalc.Parameters();

    // Assign parameters
    recalculation.ErrorMsg = undefined;
    recalculation.ErrorNum = undefined;
    recalculation.ResultSELECT = undefined;
    recalculation.Action = undefined;
    recalculation.Language = undefined;
    recalculation.Legislation = undefined;
    recalculation.IDDoklad = id;

    // Run procedure
    const response = await HeliosClient.Execute.runProcedure<string>(runtime, {
        Name: HeliosProcedures.MerchandiseManagementDocumentsRecalc.Name,
        Parameters: recalculation.toString()
    });

    console.log(JSON.stringify(response));

    // Load recalculation
    recalculation.fromString(response.fields.Result);

    // Return recalculation
    return recalculation;
}

// Upload invoice item
const uploadInvoiceItem = async (runtime: HeliosRuntime, id: number, itemId?: number) => {
    // Init item parameters
    const item = new HeliosProcedures.MerchandiseManagementTransactions.Parameters();

    item.ID = null;
    item.Action = HeliosProcedureActionType.INSERT;
    item.ResultSELECT = HeliosProcedureResultSelect.SELECT;
    item.PovolitDuplicitu = true;

    // Check for itemId
    if (itemId) {
        // Insert or update action
        item.Action = HeliosProcedureActionType.INSERT_OR_UPDATE;

        // Set ID
        item.ID = itemId;
    }

    // Assign values
    item.IDDoklad = id;
    item.IDZboSklad = 5294;
    item.CisloOrg = 19209;
    item.DruhPohybuZbo = 18;
    item.Mena = "CZK";
    item.Kurz = 1;
    item.VstupniCena = 0;
    item.SazbaDPH = null;
    item.VstupniCenaProPrepocet = 0;
    item.ZakazanoDPH = 1;
    item.JCbezDaniKC = 100;
    item.Mnozstvi = 10;
    item.StredNaklad = "00100041005";

    // Run procedure
    const response = await HeliosClient.Execute.runProcedure<string>(runtime, {
        Name: HeliosProcedures.MerchandiseManagementTransactions.Name,
        Parameters: item.toString()
    });

    console.log(JSON.stringify(response));

    // Load item
    item.fromString(response.fields.Result);

    // Return item
    return item;
}

// Upload invoice header
const uploadInvoiceHeader = async (runtime: HeliosRuntime, id?: number): Promise<HeliosMerchandiseManagementDocumentsProcedureParameters> => {
    // Init header parameters
    const header = new HeliosProcedures.MerchandiseManagementDocuments.Parameters();

    // Init basic parameters
    header.ID = null;
    header.Action = HeliosProcedureActionType.INSERT;
    header.ResultSELECT = HeliosProcedureResultSelect.SELECT;

    // Check for id
    if (id) {
        // Insert or update action
        header.Action = HeliosProcedureActionType.INSERT_OR_UPDATE;

        // Set ID
        header.ID = id;
    }

    // Assign values
    header.DruhPohybuZbo = 18;
    header.DUZP = new Date();
    header.DatPorizeni = new Date();
    header.DatPovinnostiFa = new Date();
    header.DatumDoruceni = new Date();
    header.RadaDokladu = "200";
    header.CisloOrg = 19209;
    header.Mena = "CZK";
    header.Kurz = 1;
    header.SazbaDPH = null;
    header.StredNaklad = "00100041005";

    // Run procedure
    const response = await HeliosClient.Execute.runProcedure<string>(runtime, {
        Name: HeliosProcedures.MerchandiseManagementDocuments.Name,
        Parameters: header.toString()
    });

    console.log(JSON.stringify(response));

    // Load header
    header.fromString(response.fields.Result);

    // Return header
    return header;
}

describe("HeliosClient", async () => {

    // Initialize client
    HeliosClient.initialize({
        ssl: true,
        host: "api.klobouckalesni.cz",
        port: 443,
        version: "1.0",
        hostPath: "helios-orange",
        defaultRequestMethod: HeliosRequestMethod.Post,
        defaultCustomHeaders: { "x-api-key": "GT29PHJqx9VFYTcv" },
        runtimeTimeout: 1000 * 60 * 30,
        debug: true,
        delayBetweenRequests: 0,
        browseResponseLimit: 10
    });

    // Login
    let runtime = await login();
    //let runtime = HeliosRuntime.create("0129D946EB114934A5AC08FDFCE00F0F");

    // Check runtime
    if (!runtime) {
        // Nothing else to do
        return;
    }

    try {
        // Init contacts
        const contacts: string[] = ["kratochviljiri@geph.cz", "matysfilip@geph.cz"];

        // Iterate contacts
        for (let index = 0; index < contacts.length; index++) {
            // Get contact
            const contact = contacts[index];

            // Execute action
            const response = await HeliosClient.Execute.runExternalAction(runtime, {
                ActionID: "586",
                Parameters: [34727, 6, contact]
            });

            console.log(JSON.stringify(response));
        }

        // // Init documents
        // const documents: number[] = [653194];

        // for (let index = 0; index < documents.length; index++) {
        //     // Get document
        //     const document = documents[index];

        //     // Execute action
        //     const response = await HeliosClient.Execute.runExternalAction<IHeliosResult<IHeliosBrowse>>(runtime, {
        //         ActionID: "580",
        //         Parameters: [document],
        //         Version: "1.0"
        //     }, (response) => {
        //         console.log(JSON.stringify(response));

        //         // Check for error
        //         if (response.fields.IsError) {
        //             // Return null
        //             return null;
        //         }

        //         try {
        //             // Check response attributes
        //             if (!(response.fields.Result.fields.Attributes || []).length) {
        //                 // Return null
        //                 return null;
        //             }

        //             // Return response params
        //             return [{ "ID": 653194 }];
        //         }
        //         catch (e) {
        //             // Return null
        //             return null;
        //         }
        //     });

        //     console.log(JSON.stringify(response));
        // }
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await logout(runtime);
    }
});