// Interfaces
import { Retrieve } from "../interfaces/retrieve.interface";

// Classes
import { SecureEnvelope } from "./secure-envelope.class";

/**
 * Retrieve envelope
 * @description Envelope for Retrieve service
 */
export class RetrieveEnvelope extends SecureEnvelope {

    /**
     * Constructor
     * @param data 
     */
    constructor(data: Retrieve.IRequestData) {
        // Call super
        super();

        // Set root attributes
        this.root.att("xmlns:v1", "http://ec.europa.eu/tracesnt/certificate/eudr/retrieval/v1");
        this.root.att("xmlns:v4", "http://ec.europa.eu/sanco/tracesnt/base/v4");

        // Build body
        const request = this.body.ele(null, "v1:GetStatementInfoRequest");

        // Iterate identifiers
        (data.identifiers || []).forEach((identifier) => request.ele(null, "v1:identifier").txt(identifier));
    }
}