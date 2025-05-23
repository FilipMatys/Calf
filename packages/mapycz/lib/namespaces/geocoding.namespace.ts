// Namespaces
import { Common } from "./common.namespace";

/**
 * Geocoding
 * @description Namespace for Geocoding 
 */
export namespace Geocoding {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Entity type
         * @description Enum for Entity type
         */
        export enum EntityType {
            RegionalAddress = "regional.address",
            RegionalCountry = "regional.country",
            RegionalRegion = "regional.region",
            RegionalMunicipality = "regional.municipality",
            RegionalStreet = "regional.street",
            RegionalMunicipalityPart = "regional.municipality_part",
            PointOfInterest = "poi",
            Coordinate = "coordinate",
            Regional = "regional"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Reverse params
         * @description Interface for Reverse params
         */
        export interface IReverseParams {
            lang?: string;
            lon?: number;
            lat?: number;
        }

        /**
         * Geocode params
         * @description Interface for Geocode params
         */
        export interface IGeocodeParams {
            query?: string;
            lang?: string;
            limit?: number;
            type?: Enums.EntityType[];
            locality?: string[];
            preferBBox?: number[];
            preferNear?: number[];
            preferNearPrecision?: number;
        }

        /**
         * Suggest params
         * @description Interface for Suggest params
         */
        export interface ISuggestParams extends IGeocodeParams { }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse {
            items?: IItem[];
        }

        /**
         * Reverse response
         * @description Interface for Reverse response
         */
        export interface IReverseResponse extends IResponse { }

        /**
         * Geocode response
         * @description Interface for Geocode response
         */
        export interface IGeocodeResponse extends IResponse { }

        /**
         * Suggest response
         * @description Interface for Suggest response
         */
        export interface ISuggestResponse extends IResponse { }

        /**
         * Item
         * @description Interface for Item
         */
        export interface IItem {
            label?: string;
            name?: string;
            type?: Enums.EntityType;
            position?: Common.Interfaces.IPosition;
            location?: string;
            regionalStructure?: IRegionalStructure[];
            zip?: string;
        }

        /**
         * Regional structure
         * @description Interface for Regional structure
         */
        export interface IRegionalStructure {
            name?: string;
            type?: Enums.EntityType;
            isoCode?: string;
        }
    }
}