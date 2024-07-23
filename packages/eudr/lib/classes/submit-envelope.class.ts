// Interfaces
import { Submit } from "../interfaces/submit.interface";

// Classes
import { SecureEnvelope } from "./secure-envelope.class";

/**
 * Submit envelope
 * @description Envelope for Submit service
 */
export class SubmitEnvelope extends SecureEnvelope {

    /**
     * Constructor
     * @param data 
     */
    constructor(data: Submit.IRequestData) {
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
        const statementEl = request.ele(null, "v1:statement");

        // Set statement values
        data.statement.internalReferenceNumber && (statementEl.ele(null, "v11:internalReferenceNumber").txt(data.statement.internalReferenceNumber));
        data.statement.activityType && (statementEl.ele(null, "v11:activityType").txt(data.statement.activityType));

        // Check for operator
        if (data.statement.operator) {
            // Create operator element
            const operatorEl = statementEl.ele(null, "v11:operator");

            // Iterate reference numbers
            for (let index = 0; index < (data.statement.operator.referenceNumbers || []).length; index++) {
                // Get number
                const referenceNumber = data.statement.operator.referenceNumbers[index];

                // Create reference number element
                const referenceNumberEl = operatorEl.ele(null, "v11:referenceNumber");

                // Assign values
                referenceNumber.identifierType && (referenceNumberEl.ele(null, "v11:identifierType").txt(referenceNumber.identifierType));
                referenceNumber.identifierValue && (referenceNumberEl.ele(null, "v11:identifierValue").txt(referenceNumber.identifierValue));
            }

            // Check for name and address
            if (data.statement.operator.nameAndAddress) {
                // Create name and address element
                const nameAndAddressEl = operatorEl.ele(null, "v11:nameAndAddress");

                // Set values
                data.statement.operator.nameAndAddress.name && (nameAndAddressEl.ele(null, "v4:name").txt(data.statement.operator.nameAndAddress.name));
                data.statement.operator.nameAndAddress.country && (nameAndAddressEl.ele(null, "v4:country").txt(data.statement.operator.nameAndAddress.country));
                data.statement.operator.nameAndAddress.address && (nameAndAddressEl.ele(null, "v4:address").txt(data.statement.operator.nameAndAddress.address));
            }

            // Set plain values
            data.statement.operator.email && (operatorEl.ele(null, "v11:email").txt(data.statement.operator.email));
            data.statement.operator.phone && (operatorEl.ele(null, "v11:phone").txt(data.statement.operator.phone));
        }

        // Set country values
        data.statement.countryOfEntry && (statementEl.ele(null, "v11:countryOfEntry").txt(data.statement.countryOfEntry));
        data.statement.countryOfActivity && (statementEl.ele(null, "v11:countryOfActivity").txt(data.statement.countryOfActivity));

        // Iterate commodities
        for (let cIndex = 0; cIndex < (data.statement.commodities || []).length; cIndex++) {
            // Get commodity
            const commodity = data.statement.commodities[cIndex];

            // Create commodity element
            const commoditiesEl = statementEl.ele(null, "v11:commodities");

            // Check for descriptors
            if (commodity.descriptor) {
                // Set descriptors
                const descriptorsEl = commoditiesEl.ele(null, "v11:descriptors");

                // Set basic values
                commodity.descriptor.descriptionOfGoods && (descriptorsEl.ele(null, "v11:descriptionOfGoods").txt(commodity.descriptor.descriptionOfGoods));

                // Check for goods measure
                if (commodity.descriptor.goodsMeasure) {
                    // Set goods measure
                    const measureEl = descriptorsEl.ele(null, "v11:goodsMeasure");

                    // Set values
                    measureEl.ele(null, "v11:volume").txt(`${commodity.descriptor.goodsMeasure.volume || 0}`);
                    measureEl.ele(null, "v11:netWeight").txt(`${commodity.descriptor.goodsMeasure.netWeight || 0}`);
                    measureEl.ele(null, "v11:numberOfUnits").txt(`${commodity.descriptor.goodsMeasure.numberOfUnits || 0}`);
                }
            }

            // Set basic values
            commodity.hsHeading && (commoditiesEl.ele(null, "v11:hsHeading").txt(commodity.hsHeading));

            // Set producers
            for (let pIndex = 0; pIndex < (commodity.producers || []).length; pIndex++) {
                // Get producer
                const producer = commodity.producers[pIndex];

                // Create producer element
                const producersEl = commoditiesEl.ele(null, "v11:producers");

                // Set values
                producer.country && (producersEl.ele(null, "v11:country").txt(producer.country));
                producer.name && (producersEl.ele(null, "v11:name").txt(producer.name));
                producer.geometryGeojson && (producersEl.ele(null, "v11:geometryGeojson").txt(Buffer.from(JSON.stringify(producer.geometryGeojson)).toString("base64")));
            }
        }

        // Set geolocation confidentiality
        statementEl.ele(null, "v11:geoLocationConfidential").txt(data.statement.geoLocationConfidential ? "true" : "false");

        // Append associated statements
        for (let index = 0; index < (data.statement.associatedStatements || []).length; index++) {
            // Get statement
            const aStatement = data.statement.associatedStatements[index];

            // Create element
            const associatedStatementsEl = statementEl.ele(null, "v11:associatedStatements");

            // Set values
            aStatement.referenceNumber && (associatedStatementsEl.ele(null, "v11:referenceNumber").txt(aStatement.referenceNumber));
            aStatement.verificationNumber && (associatedStatementsEl.ele(null, "v11:verificationNumber").txt(aStatement.verificationNumber));
        }
    }
}