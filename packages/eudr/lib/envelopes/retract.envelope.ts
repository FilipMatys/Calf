// Interfaces
import { Retract } from "../namespaces/retract.namespace";

// Classes
import { SecureEnvelope } from "./secure.envelope";

/**
 * Retract envelope
 * @description Envelope for Retract envelope
 */
export class RetractEnvelope extends SecureEnvelope {

    /**
     * Constructor
     * @param data 
     */
    constructor(data: Retract.IRequestData) {
        // Call super
        super();

        // Set root attributes
        this.root.att("xmlns:v1", "http://ec.europa.eu/tracesnt/certificate/eudr/submission/v1");
        this.root.att("xmlns:v4", "http://ec.europa.eu/sanco/tracesnt/base/v4");

        // Build body by first creating request
        const request = this.body.ele(null, "v1:RetractStatementRequest");

        // Set identifier
        request.ele(null, "v1:ddsIdentifier").txt(data.identifier);
    }
}