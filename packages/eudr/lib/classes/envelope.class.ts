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
        this.content = create({});

        // First create root
        this.root = this.content.ele(null, "soapenv:Envelope");

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
        return this.content.end({ prettyPrint: true });
    }

    /**
     * Date to XML date
     * @param date 
     */
    protected dateToXMLDate(date: Date): string {
        // Local pad function
        const pad = (value: number) => value < 10 ? '0' + value : value;

        // Process date
        return date.getUTCFullYear() + '-'
            + pad(date.getUTCMonth() + 1) + '-'
            + pad(date.getUTCDate()) + 'T'
            + pad(date.getUTCHours()) + ':'
            + pad(date.getUTCMinutes()) + ':'
            + pad(date.getUTCSeconds()) + 'Z';
    }
}