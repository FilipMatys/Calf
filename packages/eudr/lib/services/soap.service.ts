// External modules
import fetch from "node-fetch";
import { Observable, Subject } from "rxjs";
import { create } from "xmlbuilder2";

// Interfaces
import { IEUDRConfig } from "../interfaces/config.interface";
import { IResponse } from "../interfaces/response.interface";
import { ISoapExchange } from "../interfaces/soap-exchange.interface";
import { ISoapResponse } from "../interfaces/soap-response.interface";
import { IFault } from "../interfaces/fault.interface";

// Namespaces
import { Submit } from "../namespaces/submit.namespace";
import { Retract } from "../namespaces/retract.namespace";
import { Info } from "../namespaces/info.namespace";
import { Amend } from "../namespaces/amend.namespace";
import { Statement } from "../namespaces/statement.namespace";
import { Echo } from "../namespaces/echo.namespace";

// Envelopes
import { SecureEnvelope } from "../envelopes/secure.envelope";
import { SubmitEnvelope } from "../envelopes/submit.envelope";
import { InfoEnvelope } from "../envelopes/info.envelope";
import { RetractEnvelope } from "../envelopes/retract.envelope";
import { AmendEnvelope } from "../envelopes/amend.envelope";
import { EchoEnvelope } from "../envelopes/echo.envelope";
import { StatementEnvelope } from "../envelopes/statement.envelope";

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
     * Exchange source
     * @description Source for exchange
     */
    private readonly exchangeSource: Subject<ISoapExchange> = new Subject<ISoapExchange>();

    /**
     * Exchange
     * @description Observable exchange
     */
    public readonly exchange$: Observable<ISoapExchange> = this.exchangeSource.asObservable();

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
    public async send<TEnvelope extends SecureEnvelope>(service: string, envelope: TEnvelope): Promise<ISoapResponse> {
        // Set username and password
        envelope.setUsernameAndPassword(this.username, this.password);

        // Convert envelope to string
        const body = envelope.toString();

        // Make post request
        const response = await fetch([this.host, service].join("/"), {
            // Set method
            method: "post",
            // Set body 
            body: body,
            // Set headers
            headers: { "Content-type": "text/xml" }
        });

        // Init response
        const sResponse: ISoapResponse = { status: response.status };

        // Get data
        sResponse.data = await response.text();

        // Emit exchange
        this.exchangeSource.next({ status: sResponse.status, request: body, response: sResponse.data });

        // Return result
        return sResponse;
    }

    /**
     * Echo
     * @param envelope 
     */
    public async echo(envelope: EchoEnvelope): Promise<IResponse<Echo.Interfaces.IResponseData>> {
        // Send echo request
        const rResponse = await this.send("EudrEchoService?wsdl", envelope);

        // Init response
        const response: IResponse<Echo.Interfaces.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(rResponse.data).end({ format: "object" }) as any;

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
                if (!body["ns3:EudrEchoResponse"]) {
                    // Nothing to parse
                    break;
                }

                // Init response data
                response.data = { status: body["ns3:EudrEchoResponse"]["ns3:status"] };
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
     * Submit
     * @param envelope 
     * @returns 
     */
    public async submit(envelope: SubmitEnvelope): Promise<IResponse<Submit.Interfaces.IResponseData>> {
        // Send submit request
        const rResponse = await this.send("EUDRSubmissionServiceV1?wsdl", envelope);

        // Init response
        const response: IResponse<Submit.Interfaces.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(rResponse.data).end({ format: "object" }) as any;

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
     * Statement
     * @param envelope 
     */
    public async statement(envelope: StatementEnvelope): Promise<IResponse<Statement.Interfaces.IResponseData>> {
        // Send retrieve request
        const rResponse = await this.send("EUDRRetrievalServiceV1?wsdl", envelope);

        // Init response
        const response: IResponse<Statement.Interfaces.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(rResponse.data).end({ format: "object" }) as any;

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
                // TODO
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
     * Info
     * @param envelope 
     */
    public async info(envelope: InfoEnvelope): Promise<IResponse<Info.Interfaces.IResponseData>> {
        // Send retrieve request
        const rResponse = await this.send("EUDRRetrievalServiceV1?wsdl", envelope);

        // Init response
        const response: IResponse<Info.Interfaces.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(rResponse.data).end({ format: "object" }) as any;

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
    public async amend(envelope: AmendEnvelope): Promise<IResponse<Amend.Interfaces.IResponseData>> {
        // Send request
        const rResponse = await this.send("EUDRSubmissionServiceV1?wsdl", envelope);

        // Init response
        const response: IResponse<Amend.Interfaces.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(rResponse.data).end({ format: "object" }) as any;

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
    public async retract(envelope: RetractEnvelope): Promise<IResponse<Retract.Interfaces.IResponseData>> {
        // Send request
        const rResponse = await this.send("EUDRSubmissionServiceV1?wsdl", envelope);

        // Init response
        const response: IResponse<Retract.Interfaces.IResponseData> = {};

        // Set status
        response.status = rResponse.status;

        // Parse response as json
        const document = create(rResponse.data).end({ format: "object" }) as any;

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