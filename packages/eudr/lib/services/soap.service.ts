// External modules
import fetch, { Response } from "node-fetch";
import { create } from "xmlbuilder2";

// Interfaces
import { Submit } from "../interfaces/submit.interface";
import { Retract } from "../interfaces/retract.interface";
import { Retrieve } from "../interfaces/retrieve.interface";
import { IEUDRConfig } from "../interfaces/config.interface";
import { IResponse } from "../interfaces/response.interface";

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
    public async send<TEnvelope extends SecureEnvelope>(service: string, envelope: TEnvelope): Promise<Response> {
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

        // Return result
        return response as any;
    }

    /**
     * Submit
     * @param envelope 
     * @returns 
     */
    public async submit(envelope: SubmitEnvelope): Promise<IResponse<Submit.IResponseData>> {
        // Send submit request
        const rResponse = await this.send("EUDRSubmissionServiceV1?wsdl", envelope);

        // Init response
        const response: IResponse<Submit.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(await rResponse.text()).end({ format: "object" }) as any;

        // Get body
        const body = document["S:Envelope"]["S:Body"];

        console.log(JSON.stringify(body));

        // Return response
        return response;
    }

    /**
     * Retrieve
     * @param envelope 
     */
    public async retrieve(envelope: RetrieveEnvelope): Promise<IResponse<Retrieve.IResponseData>> {
        // Send retrieve request
        return this.send("EUDRRetrievalServiceV1?wsdl", envelope) as any;
    }

    /**
     * Retract
     * @param envelope 
     * @returns 
     */
    public async retract(envelope: RetractEnvelope): Promise<IResponse<Retract.IResponseData>> {
        // Send request
        const rResponse = await this.send("EUDRSubmissionServiceV1?wsdl", envelope);

        // Init response
        const response: IResponse<Retract.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(await rResponse.text()).end({ format: "object" }) as any;

        // Get body
        const body = document["S:Envelope"]["S:Body"];

        // Check status
        switch (response.status) {
            // 500
            case 500:
                // Init fault
                response.fault = {};

                // Set values
                response.fault.code = body["ns0:Fault"]["faultcode"];
                response.fault.message = body["ns0:Fault"]["faultstring"];
                break;
        }

        // Return response
        return response;
    }
}