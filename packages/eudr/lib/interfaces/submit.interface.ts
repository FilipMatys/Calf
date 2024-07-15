/**
 * Submit
 * @description Namespace for Submit
 */
export namespace Submit {

    /**
     * Submit request data
     * @description Interface for Submit request data
     */
    export interface IRequestData {
        statement?: IStatement;
    }

    /**
     * Submit response data
     * @description Interface for Submit response data
     */
    export interface IResponseData {
        identifier?: string;
    }

    /**
     * Statement
     * @description Interface for Statement
     */
    export interface IStatement {
        internalReferenceNumber?: string;
        activityType?: string;
        countryOfActivity?: string;
        commodities?: ICommodity[];
        geoLocationConfidential?: boolean;
    }

    /**
     * Commodity
     * @description Interface for Commodity
     */
    export interface ICommodity {
        descriptor?: IDescriptor;
        hsHeading?: string;
        producers?: IProducer[];
    }

    /**
     * Goods measure
     * @description Interface for Goods measure
     */
    export interface IGoodsMeasure {
        volume?: number;
        netWeight?: number;
        numberOfUnits?: number;
    }

    /**
     * Descriptor
     * @description Interface for Descriptor
     */
    export interface IDescriptor {
        descriptionOfGoods?: string;
        goodsMeasure?: IGoodsMeasure;
    }

    /**
     * Producer
     * @description Interface for Producer
     */
    export interface IProducer {
        country?: string;
        name?: string;
        geometryGeojson?: any;
    }
}