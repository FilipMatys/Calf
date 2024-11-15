// Interfaces
import { Statement } from "../namespaces/statement.namespace";

// Classes
import { SecureEnvelope } from "./secure.envelope";

/**
 * Statement envelope
 * @description Envelope for Statement service
 */
export class StatementEnvelope extends SecureEnvelope {

    /**
     * Constructor
     * @param data 
     */
    constructor(data: Statement.Interfaces.IRequestData) {
        // Call super
        super();

        // Set root attributes
        this.root.att("xmlns:v1", "http://ec.europa.eu/tracesnt/certificate/eudr/retrieval/v1");
        this.root.att("xmlns:v4", "http://ec.europa.eu/sanco/tracesnt/base/v4");

        // Build body
        const request = this.body.ele(null, "v1:GetStatementByIdentifiersRequest");

        // Iterate identifiers
        request.ele(null, "v1:referenceNumber").txt(data.referenceNumber);
        request.ele(null, "v1:verificationNumber").txt(data.verificationNumber);
    }
}