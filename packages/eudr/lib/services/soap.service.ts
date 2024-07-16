// External modules
import fetch from "node-fetch";
import { create } from "xmlbuilder2";

// Interfaces
import { Submission } from "../interfaces/submission.interface";
import { Retrieval } from "../interfaces/retrieval.interface";
import { IEUDRConfig } from "../interfaces/config.interface";

// Classes
import { SecureEnvelope } from "../classes/secure-envelope.class";
import { SubmissionEnvelope } from "../classes/submission-envelope.class";
import { RetrievalEnvelope } from "../classes/retrieval-envelope.class";

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
     */
    public async send<TEnvelope extends SecureEnvelope, TResponse>(service: string, envelope: TEnvelope): Promise<TResponse> {
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

        // TODO
        return null
    }

    /**
     * Submit
     * @param envelope 
     * @returns 
     */
    public async submit(envelope: SubmissionEnvelope): Promise<Submission.IResponseData> {
        // Send submit request
        return this.send("EUDRSubmissionServiceV1?wsdl", envelope);
    }

    /**
     * Retrieve
     * @param envelope 
     */
    public async retrieve(envelope: RetrievalEnvelope): Promise<Retrieval.IResponseData> {
        // Send retrieve request
        return this.send("EUDRRetrievalServiceV1?wsdl", envelope);
    }
}