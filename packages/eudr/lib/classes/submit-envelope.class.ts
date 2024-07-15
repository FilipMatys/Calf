// Interfaces
import { Submit } from "../interfaces/submit.interface";

// Classes
import { SecureEnvelope } from "./secure-envelope.class";

/**
 * Submit envelope
 * @description Envelope for Submit service
 */
export class SubmitEnvelope extends SecureEnvelope {

    /**
     * Constructor
     * @param data 
     */
    constructor(data: Submit.IRequestData) {
        // Call super
        super();

        // Set root attributes
        this.root.att("xmlns:v1", "http://ec.europa.eu/tracesnt/certificate/eudr/submission/v1");
        this.root.att("xmlns:v11", "http://ec.europa.eu/tracesnt/certificate/eudr/model/v1");
        this.root.att("xmlns:v4", "http://ec.europa.eu/sanco/tracesnt/base/v4");

        // Build body by first creating request
        const request = this.body.ele(null, "v1:SubmitStatementRequest");

        // Set operator type
        request.ele(null, "v1:operatorType").txt("OPERATOR");
    }
}