// Interfaces
import { Retrieval } from "../interfaces/retrieval.interface";

// Classes
import { SecureEnvelope } from "./secure-envelope.class";

/**
 * Retrieval envelope
 * @description Envelope for Retrieval service
 */
export class RetrievalEnvelope extends SecureEnvelope {

    /**
     * Constructor
     * @param data 
     */
    constructor(data: Retrieval.IRequestData) {
        // Call super
        super();

        // Set root attributes
        this.root.att("xmlns:v1", "http://ec.europa.eu/tracesnt/certificate/eudr/retrieval/v1");
        this.root.att("xmlns:v4", "http://ec.europa.eu/sanco/tracesnt/base/v4");

        // Build body
        this.body
            .ele(null, "v1:GetStatementInfoRequest")
            .ele(null, "v1:identifier")
            .txt(data.identifier);
    }
}