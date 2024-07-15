// Interfaces
import { IRetrievalRequestData } from "../interfaces/retrieval.interface";

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
    constructor(data: IRetrievalRequestData) {
        // Call super
        super();

        // Build body
        this.body
            .ele(null, "v1:GetStatementInfoRequest")
            .ele(null, "v1:identifier")
            .txt(data.identifier);
    }
}