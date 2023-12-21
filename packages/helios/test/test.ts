// Import library
import { HeliosClient, HeliosProcedureActionType, HeliosProcedureResultSelect, HeliosProcedures, HeliosRequestMethod, HeliosRuntime, IHeliosDataSet } from "../lib/helios";

describe("HeliosClient", async () => {

    // Upload invoice
    const uploadInvoice = async (runtime: HeliosRuntime) => {
        // Init header parameters
        const header = new HeliosProcedures.MerchandiseManagementDocuments.Parameters();

        // Init basic parameters
        header.ID = null;
        header.Action = HeliosProcedureActionType.INSERT;
        header.ResultSELECT = HeliosProcedureResultSelect.SELECT;

        // Assign values
        header.DruhPohybuZbo = 13;
        header.DUZP = new Date("2022-11-30T07:31:25.235Z");
        header.DatPorizeni = header.DUZP;
        header.DatPovinnostiFa = header.DUZP;
        header.DatumDoruceni = header.DUZP;
        header.RadaDokladu = "110";
        header.CisloOrg = 1572;
        header.Mena = "CZK";
        header.Kurz = 1;
        header.StredNaklad = "00100090026";

        // Run procedure to create header
        const hResponse = await HeliosClient.Execute.runProcedure<string>(runtime, { Name: HeliosProcedures.MerchandiseManagementDocuments.Name, Parameters: header.toString() });

        // Check for error
        if (hResponse.fields.IsError) {
            // Log error
            console.error(hResponse.fields.ErrorMessage);

            // Return
            return;
        }

        // Parse response
        header.fromString(hResponse.fields.Result);

        // Init recalculation
        const recalculation = new HeliosProcedures.MerchandiseManagementDocumentsRecalc.Parameters();

        // Assign parameters
        recalculation.ErrorMsg = recalculation.ErrorNum = undefined;
        recalculation.ResultSELECT = recalculation.Action = undefined;
        recalculation.Language = recalculation.Legislation = undefined;
        recalculation.IDDoklad = header.ID;

        // Run procedure
        const rResponse = await HeliosClient.Execute.runProcedure<string>(runtime, { Name: HeliosProcedures.MerchandiseManagementDocumentsRecalc.Name, Parameters: recalculation.toString() });

        // Check for error
        if (rResponse.fields.IsError) {
            // Log error
            console.error(rResponse.fields.ErrorMessage);
        }
    }

    // Initialize client
    HeliosClient.initialize({
        ssl: true,
        host: "api.klobouckalesni.cz",
        port: 443,
        version: "1.0",
        hostPath: "helios-orange",
        defaultRequestMethod: HeliosRequestMethod.Get,
        defaultCustomHeaders: { "x-api-key": "GT29PHJqx9VFYTcv" },
        runtimeTimeout: 1000 * 60 * 30
    });

    // Observe communication
    HeliosClient.Execute.observe().subscribe((result) => console.log(result));

    // Execute login
    const lIResponse = await HeliosClient.Execute.login(HeliosRuntime.create(""), {
        Domain: "",
        PluginSysName: "eServerEE",
        Version: "1.0",
        Username: "eshop",
        Password: "Heslo123"
    });

    // Check response
    if (!lIResponse.fields) {
        return;
    }

    // Create runtime
    const runtime = HeliosRuntime.create(lIResponse.fields.Result);

    // Change database
    const cDResponse = await HeliosClient.Execute.changeDatabase(runtime, { Version: "1.0", DatabaseName: "Helios_cvicna_test" });

    // Upload invoice
    await uploadInvoice(runtime);

    // Logout
    const lOResponse = await HeliosClient.Execute.logout(runtime, { Version: "1.0" });
});