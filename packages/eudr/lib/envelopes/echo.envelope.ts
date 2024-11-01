// Classes
import { SecureEnvelope } from "./secure.envelope";

/**
 * Echo envelope
 * @description Envelope for Echo service
 */
export class EchoEnvelope extends SecureEnvelope {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super();

        // Set root attributes
        this.root.att("xmlns:echo", "http://ec.europa.eu/tracesnt/eudr/echo");
        this.root.att("xmlns:v4", "http://ec.europa.eu/sanco/tracesnt/base/v4");

        // Build body
        this.body
            .ele(null, "echo:EudrEchoRequest")
            .ele(null, "echo:query")
            .txt("hello");
    }
}