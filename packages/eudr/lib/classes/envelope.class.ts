// External modules
import { create } from "xmlbuilder2";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";

/**
 * Envelope
 * @description 
 */
export class Envelope {

    /**
     * Content
     * @description Envelope content
     */
    protected readonly content: XMLBuilder;

    /**
     * Root
     * @description Envelope root
     */
    protected readonly root: XMLBuilder;

    /**
     * Header
     * @description Envelope heder
     */
    protected readonly header: XMLBuilder;

    /**
     * Body
     * @description Envelope body
     */
    protected readonly body: XMLBuilder;

    /**
     * Constructor
     */
    constructor() {
        // Init content
        this.content = create({ encoding: "UTF-8" });

        // First create root
        this.root = this.content.ele(null, "soapenv:Envelope");

        // Set soapenv attribute
        this.root.att("xmlns:soapenv", "http://schemas.xmlsoap.org/soap/envelope/");

        // Now create header and body
        this.header = this.root.ele(null, "soapenv:Header");
        this.body = this.root.ele(null, "soapenv:Body");
    }

    /**
     * To string
     * @description Convert envelope to string
     * @returns
     */
    public toString(): string {
        // Convert builder to string
        return this.content.end();
    }

    /**
     * Date to XML date
     * @param date 
     */
    protected dateToXMLDate(date: Date): string {
        // Convert date to ISO string
        return date.toISOString();
    }
}