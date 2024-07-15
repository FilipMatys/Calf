// Classes
import { SecureEnvelope } from "./secure-envelope.class";

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

        // Build body
        this.body
            .ele(null, "echo:EudrEchoRequest")
            .ele(null, "echo:query")
            .txt("hello");
    }
}