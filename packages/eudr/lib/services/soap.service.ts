// External modules
import fetch from "node-fetch";
import { create } from "xmlbuilder2";

// Interfaces
import { Submit } from "../interfaces/submit.interface";
import { Retract } from "../interfaces/retract.interface";
import { Retrieve } from "../interfaces/retrieve.interface";
import { IEUDRConfig } from "../interfaces/config.interface";

// Classes
import { SecureEnvelope } from "../classes/secure-envelope.class";
import { SubmitEnvelope } from "../classes/submit-envelope.class";
import { RetrieveEnvelope } from "../classes/retrieve-envelope.class";
import { RetractEnvelope } from "../classes/retract-envelope.class";

/**
 * Soap service
 * @description Service to make soap requests
 */
export class SoapService {

    /**
     * Host
     * @description Request target host
     */
    private host: string;

    /**
     * Username
     * @description Request username
     */
    private username: string;

    /**
     * Password
     * @description Request password
     */
    private password: string;

    /**
     * Constructor
     * @param config 
     */
    constructor(config: IEUDRConfig) {
        // Assign config
        this.host = config.soapHost;
        this.username = config.soapUsername;
        this.password = config.soapPassword;
    }

    /**
     * Send
     * @param service 
     * @param envelope 
     * @returns 
     */
    public async send<TEnvelope extends SecureEnvelope>(service: string, envelope: TEnvelope): Promise<string> {
        // Set username and password
        envelope.setUsernameAndPassword(this.username, this.password);

        console.log(envelope.toPrettyString());

        // Make post request
        const response = await fetch([this.host, service].join("/"), {
            // Set method
            method: "post",
            // Set body 
            body: envelope.toString(),
            // Set headers
            headers: { "Content-type": "text/xml" }
        });

        // Get response
        const result = await response.text();

        // Parse response XML
        const document = create(result);

        console.log(document.end({ prettyPrint: true }));

        // Return result
        return result
    }

    /**
     * Submit
     * @param envelope 
     * @returns 
     */
    public async submit(envelope: SubmitEnvelope): Promise<Submit.IResponseData> {
        // Send submit request
        return this.send("EUDRSubmissionServiceV1?wsdl", envelope) as any;
    }

    /**
     * Retrieve
     * @param envelope 
     */
    public async retrieve(envelope: RetrieveEnvelope): Promise<Retrieve.IResponseData> {
        // Send retrieve request
        return this.send("EUDRRetrievalServiceV1?wsdl", envelope) as any;
    }

    /**
     * Retract
     * @param envelope 
     * @returns 
     */
    public async retract(envelope: RetractEnvelope): Promise<Retract.IRequestData> {
        // Send retract request
        return this.send("EUDRSubmissionServiceV1?wsdl", envelope) as any;
    }
}