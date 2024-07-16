// Interfaces
import { Submission } from "../interfaces/submission.interface";

// Classes
import { SecureEnvelope } from "./secure-envelope.class";

/**
 * Submission envelope
 * @description Envelope for Submission service
 */
export class SubmissionEnvelope extends SecureEnvelope {

    /**
     * Constructor
     * @param data 
     */
    constructor(data: Submission.IRequestData) {
        // Call super
        super();

        // Set root attributes
        this.root.att("xmlns:v1", "http://ec.europa.eu/tracesnt/certificate/eudr/submission/v1");
        this.root.att("xmlns:v11", "http://ec.europa.eu/tracesnt/certificate/eudr/model/v1");
        this.root.att("xmlns:v4", "http://ec.europa.eu/sanco/tracesnt/base/v4");

        // Build body by first creating request
        const request = this.body.ele(null, "v1:SubmitStatementRequest");

        // Set operator type
        request.ele(null, "v1:operatorType").txt("OPERATOR");

        // Check if statement is set
        if (!data.statement) return;

        // Add statement
        const statement = request.ele(null, "v1:statement");

        // Set statement values
        data.statement.internalReferenceNumber && (statement.ele(null, "v11:internalReferenceNumber").txt(data.statement.internalReferenceNumber));
        data.statement.activityType && (statement.ele(null, "v11:activityType").txt(data.statement.activityType));
        data.statement.countryOfEntry && (statement.ele(null, "v11:countryOfEntry").txt(data.statement.countryOfEntry));
        data.statement.countryOfActivity && (statement.ele(null, "v11:countryOfActivity").txt(data.statement.countryOfActivity));

        // Iterate commodities
        for (let cIndex = 0; cIndex < (data.statement.commodities || []).length; cIndex++) {
            // Get commodity
            const commodity = data.statement.commodities[cIndex];

            // Create commodity element
            const commodities = statement.ele(null, "v11:commodities");

            // Check for descriptors
            if (commodity.descriptor) {
                // Set descriptors
                const descriptors = commodities.ele(null, "v11:descriptors");

                // Set basic values
                commodity.descriptor.descriptionOfGoods && (descriptors.ele(null, "v11:descriptionOfGoods").txt(commodity.descriptor.descriptionOfGoods));

                // Check for goods measure
                if (commodity.descriptor.goodsMeasure) {
                    // Set goods measure
                    const measure = descriptors.ele(null, "v11:goodsMeasure");

                    // Set values
                    measure.ele(null, "v11:volume").txt(`${commodity.descriptor.goodsMeasure.volume || 0}`);
                    measure.ele(null, "v11:netWeight").txt(`${commodity.descriptor.goodsMeasure.netWeight || 0}`);
                    measure.ele(null, "v11:numberOfUnits").txt(`${commodity.descriptor.goodsMeasure.numberOfUnits || 0}`);
                }
            }

            // Set basic values
            commodity.hsHeading && (commodities.ele(null, "v11:hsHeading").txt(commodity.hsHeading));

            // Set producers
            for (let pIndex = 0; pIndex < (commodity.producers || []).length; pIndex++) {
                // Get producer
                const producer = commodity.producers[pIndex];

                // Create producer element
                const producers = commodities.ele(null, "v11:producers");

                // Set values
                producer.country && (producers.ele(null, "v11:country").txt(producer.country));
                producer.name && (producers.ele(null, "v11:name").txt(producer.name));
                producer.geometryGeojson && (producers.ele(null, "v11:geometryGeojson").txt(Buffer.from(JSON.stringify(producer.geometryGeojson)).toString("base64")));
            }
        }

        // Set geolocation confidentiality
        statement.ele(null, "v11:geoLocationConfidential").txt(data.statement.geoLocationConfidential ? "true" : "false");
    }
}