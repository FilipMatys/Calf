import { Authentication } from "./authentication.namespace";

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
         * Day of the week
         * @description Enum for Day of the week
         */
        export enum DayOfTheWeek {
            Monday = "MONDAY",
            Tuesday = "TUESDAY",
            Wednesday = "WEDNESDAY",
            Thursday = "THURSDAY",
            Friday = "FRIDAY",
            Saturday = "SATURDAY",
            Sunday = "SUNDAY"
        }

        /**
         * Unit of measure
         * @description Enum for Unit of measure
         */
        export enum UnitOfMeasure {
            Gram = "g",
            MilliGram = "mg"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Request options
         * @description Interface for Request options
         */
        export interface IRequestOptions<TPayload> {
            path: string[];
            authentication?: Authentication.Interfaces.IAuthentication;
            payload?: TPayload;
        }

        /**
         * Indexed
         * @description Interface for Indexed
         */
        export interface IIndexed {
            id?: string;
        }

        /**
         * Range
         * @description Interface for Range
         */
        export interface IRange {
            min?: number;
            max?: number;
        }

        export interface IAmount {
            value?: number;

        }

        /**
         * Localized text
         * @description Interface for Localized text
         */
        export interface ILocalizedText {
            lang?: string;
            value?: string;
        }

        /**
         * Opening time
         * @description Interface for Opening time
         */
        export interface IOpeningTime {
            opening_day?: Enums.DayOfTheWeek;
            opening_time?: string;
            closing_day?: Enums.DayOfTheWeek;
            closing_time?: string;
        }

        /**
         * Coordinates
         * @description Interface for Coordinates
         */
        export interface ICoordinates {
            lon?: number;
            lat?: number;
        }
    }
}