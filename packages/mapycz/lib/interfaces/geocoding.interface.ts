// Interfaces
import { IPosition } from "./position.interface";

/**
 * Geocoding
 * @description name space for Geocoding
 */
export namespace Geocoding {

    /**
     * Geocode
     * @description Namespace for Geocode method
     */
    export namespace Geocode {

        /**
         * Params
         * @description Interface for Params
         */
        export interface IParams {
            query?: string;
            lang?: string;
            limit?: number;
            type?: string[];
            locality?: string[];
            preferBBox?: number[];
            preferNear?: number[];
            preferNearPrecision?: number;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse {
            items?: IResponseItem[];
            locality?: IResponseLocality[];
        }

        interface IResponseItem {
            name?: string;
            label?: string;
            position?: IPosition;
            type?: string;
            location?: string;
        }


        interface IResponseLocality {

        }
    }
}