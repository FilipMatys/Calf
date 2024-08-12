// External modules
import fetch, { Response } from "node-fetch";
import { create } from "xmlbuilder2";

// Interfaces
import { Submit } from "../interfaces/submit.interface";
import { Retract } from "../interfaces/retract.interface";
import { Retrieve } from "../interfaces/retrieve.interface";
import { IEUDRConfig } from "../interfaces/config.interface";
import { IResponse } from "../interfaces/response.interface";
import { IFault } from "../interfaces/fault.interface";
import { Amend } from "../interfaces/amend.interface";

// Classes
import { SecureEnvelope } from "../classes/secure-envelope.class";
import { SubmitEnvelope } from "../classes/submit-envelope.class";
import { RetrieveEnvelope } from "../classes/retrieve-envelope.class";
import { RetractEnvelope } from "../classes/retract-envelope.class";
import { AmendEnvelope } from "../classes/amend-envelope.class";

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

        // Check for env response
        if (this.isEnvResponse(document)) {
            // Parse env fault
            response.fault = this.parseEnvFault(document);

            // Return response
            return response;
        }

        // Get body
        const body = document["S:Envelope"]["S:Body"];

        // Check status
        switch (response.status) {
            // 200
            case 200:
                // Check for response
                if (!body["ns5:SubmitStatementResponse"]) {
                    // Nothing to parse
                    break;
                }

                // Init response data
                response.data = { identifier: body["ns5:SubmitStatementResponse"]["ns5:ddsIdentifier"] };
                break;

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

    /**
     * Retrieve
     * @param envelope 
     */
    public async retrieve(envelope: RetrieveEnvelope): Promise<IResponse<Retrieve.IResponseData>> {
        // Send retrieve request
        const rResponse = await this.send("EUDRRetrievalServiceV1?wsdl", envelope) as any;

        // Init response
        const response: IResponse<Retrieve.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(await rResponse.text()).end({ format: "object" }) as any;

        // Check for env response
        if (this.isEnvResponse(document)) {
            // Parse env fault
            response.fault = this.parseEnvFault(document);

            // Return response
            return response;
        }

        // Get body
        const body = document["S:Envelope"]["S:Body"];

        // Check status
        switch (response.status) {
            // 200
            case 200:
                // Check if response data is present
                if (!body["ns4:GetStatementInfoResponse"] || !body["ns4:GetStatementInfoResponse"]["ns4:statementInfo"]) {
                    // Nothing to parse
                    break;
                }

                // Get info
                const info = body["ns4:GetStatementInfoResponse"]["ns4:statementInfo"];

                // Init response data
                response.data = {};

                // Set values
                response.data.identifier = info["ns4:identifier"];
                response.data.referenceNumber = info["ns4:referenceNumber"];
                response.data.verificationNumber = info["ns4:verificationNumber"];
                response.data.status = info["ns4:status"];
                break;

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

    /**
     * Amend
     * @param envelope 
     * @returns 
     */
    public async amend(envelope: AmendEnvelope): Promise<IResponse<Amend.IResponseData>> {
        // Send request
        const rResponse = await this.send("EUDRSubmissionServiceV1?wsdl", envelope);

        // Init response
        const response: IResponse<Amend.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(await rResponse.text()).end({ format: "object" }) as any;

        // Check for env response
        if (this.isEnvResponse(document)) {
            // Parse env fault
            response.fault = this.parseEnvFault(document);

            // Return response
            return response;
        }

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

        // Check for env response
        if (this.isEnvResponse(document)) {
            // Parse env fault
            response.fault = this.parseEnvFault(document);

            // Return response
            return response;
        }

        // Get body
        const body = document["S:Envelope"]["S:Body"];

        // Check status
        switch (response.status) {
            // 200
            case 200:
                // Set response data
                response.data = { status: body["ns6:RetractStatementResponse"]["ns6:status"] };
                break;

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

    /**
     * Is env response
     * @param document
     */
    private isEnvResponse(document: any): boolean {
        // Check for env
        return document["env:Envelope"] && document["env:Envelope"]["env:Body"];
    }

    /**
     * Parse env fault
     * @param document 
     */
    private parseEnvFault(document: any): IFault {
        // First get body
        const body = document["env:Envelope"]["env:Body"];

        // Now get fault
        const fault = body["env:Fault"];

        // Return fault
        return { code: fault["faultcode"], message: fault["faultstring"] };
    }
}