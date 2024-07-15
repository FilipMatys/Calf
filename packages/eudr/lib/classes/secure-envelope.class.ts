// External modules
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { createHash } from "crypto";

// Classes
import { Envelope } from "./envelope.class";

/**
 * Secure envelope
 * @description Envelope secured with WS
 */
export class SecureEnvelope extends Envelope {

    /**
     * Security
     * @description Envelope security
     */
    protected readonly security: XMLBuilder;

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super();

        // Init security
        this.security = this.header.ele(null, "wsse:Security", {
            ["xmlns:wsse"]: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd",
            ["xmlns:wsu"]: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
        });

        // Set security client id
        this.security.ele("v4:WebServiceClientId").txt("eudr-repository");
    }

    /**
     * Set username and password
     * @param username 
     * @param password 
     */
    public setUsernameAndPassword(username: string, password: string): void {
        // Get date
        const date = new Date();

        // First create timestamp
        const timestamp = this.security.ele(null, "wsu:Timestamp");

        // Set timestamp attribute
        timestamp.att("wsu:Id", `TS-${Buffer.from(this.dateToXMLDate(date)).toString("hex").toUpperCase()}`);

        // Set values
        timestamp.ele(null, "wsu:Created").txt(this.dateToXMLDate(date));
        timestamp.ele(null, "wsu:Expires").txt(this.dateToXMLDate(new Date(date.getTime() + (1000 * 600))));


        // Now create token
        const token = this.security.ele(null, "wsse:UsernameToken");

        // Set token attribute
        token.att("wsu:Id", `UsernameToken-${Buffer.from(this.dateToXMLDate(date)).toString("hex").toUpperCase()}`);

        // Create nonce
        const nonce = createHash("sha1").update(this.dateToXMLDate(date) + Math.random()).digest("base64");

        // Password digest
        const passwordDigest = (nonce: string, created: string, password: string): string => {
            // Create password hash
            const pHash = createHash("sha1");
            // Get raw none
            const rNonce = Buffer.from(nonce, "base64").toString("binary");
            // Update password hash
            pHash.update(rNonce + created + password);

            // Return password
            return pHash.digest("base64");
        }

        // Set values
        token.ele(null, "wsse:Username").txt(username);
        token.ele(null, "wsse:Password", { ["Type"]: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordDigest" }).txt(passwordDigest(nonce, this.dateToXMLDate(date), password));
        token.ele(null, "wsse:Nonce", { ["EncodingType"]: "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" }).txt(nonce)
        token.ele(null, "wsu:Created").txt(this.dateToXMLDate(date));
    }
}