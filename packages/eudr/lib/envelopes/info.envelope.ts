// Interfaces
import { Info } from "../namespaces/info.namespace";

// Classes
import { SecureEnvelope } from "./secure.envelope";

/**
 * Info envelope
 * @description Envelope for Info service
 */
export class InfoEnvelope extends SecureEnvelope {

    /**
     * Constructor
     * @param data 
     */
    constructor(data: Info.Interfaces.IRequestData) {
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