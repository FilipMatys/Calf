/**
 * Common
 * @description Namespace for Common
 */
export namespace Common {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Result code
         * @description Enum for Result code
         */
        export enum ResultCode {
            Ok = "OK",
            Fail = "FAIL"
        }

        /**
         * Country
         * @description Enum for Country
         */
        export enum Country {
            Czechia = "CZ",
            Slovakia = "SK"
        }

        /**
         * Result type
         * @description Enum for Result type
         */
        export enum ResultType {
            Hit = "HIT",
            PartialHit = "PARTIAL_HIT",
            Nothing = "NOTHING",
            Many = "MANY",
            TooMany = "TOO_MANY"
        }

        /**
         * Coordinates type
         * @description Enum for Coordinates type
         */
        export enum CoordinatesType {
            Exact = "EXACT",
            Center = "CENTER",
            Approximate = "APPROXIMATE"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Request
         * @description Interface for Request
         */
        export interface IRequest {
            id?: number;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse<TResult> {
            id?: number;
            resultCode?: Enums.ResultCode;
            errorMessage?: string;
            result?: TResult;
        }

        /**
         * Coordinates
         * @description Interface for Coordinates
         */
        export interface ICoordinates {
            type?: Enums.CoordinatesType;
            jtsX?: number;
            jtsY?: number;
            gpsLat?: number;
            gpsLng?: number;
        }
    }
}