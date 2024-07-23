// Enums
import { ActivityType } from "../enums/activity-type.enum";
import { OperatorIdentifierType } from "../enums/operator-identifier-type.enum";
import { OperatorType } from "../enums/operator-type.enum";

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
        operatorType?: OperatorType;
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
        operator?: IOperator;
        activityType?: ActivityType;
        countryOfActivity?: string;
        countryOfEntry?: string;
        commodities?: ICommodity[];
        geoLocationConfidential?: boolean;
        associatedStatements?: IAssociatedStatement[];
    }

    /**
     * Associated statement
     * @description Interface for Associated statement
     */
    export interface IAssociatedStatement {
        referenceNumber?: string;
        verificationNumber?: string;
    }

    /**
     * Operator
     * @description Interface for Operator
     */
    export interface IOperator {
        nameAndAddress?: INameAndAddress;
        referenceNumbers?: IReferenceNumber[];
        email?: string;
        phone?: string;
    }

    /**
     * Name and address
     * @description Interface for Name and address
     */
    export interface INameAndAddress {
        name?: string;
        country?: string;
        address?: string;
    }

    /**
     * Reference number
     * @description Interface for Reference number
     */
    export interface IReferenceNumber {
        identifierType?: OperatorIdentifierType;
        identifierValue?: string;
    }

    /**
     * Commodity
     * @description Interface for Commodity
     */
    export interface ICommodity {
        descriptor?: IDescriptor;
        hsHeading?: string;
        speciesInfo?: ISpeciesInfo[];
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
     * Species info
     * @description Interface  for Species info
     */
    export interface ISpeciesInfo {
        scientificName?: string;
        commonName?: string;
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