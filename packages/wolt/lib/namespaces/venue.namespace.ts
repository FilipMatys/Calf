// Interfaces
import { ICoordinates } from "../interfaces/coordinates.interface";
import { IIndexed } from "../interfaces/indexed.interface";

/**
 * Venue
 * @description Namespace for Venue
 */
export namespace Venue {

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
         * Status
         * @description Enum for Status
         */
        export enum Status {
            Online = "ONLINE",
            Offline = "OFFLINE"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Venue
         * @description 
         */
        export interface IVenue extends IIndexed {
            status?: IStatus;
            contact_details?: IContactDetails;
            opening_times?: IOpeningTime[];
            special_times?: IOpeningTime[];
            delivery_area?: ICoordinates[];
        }

        /**
         * Status
         * @description Interface for Status
         */
        export interface IStatus {
            is_open?: boolean;
            is_online?: boolean;
            is_ipad_free?: boolean;
        }

        /**
         * Contact details
         * @description Interface for Contact details
         */
        export interface IContactDetails {
            address?: string;
            phone?: string;
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
    }

    /**
     * Methods
     * @description Namespace for Methods
     */
    export namespace Methods {

        /**
         * Update status
         * @description Namespace for Update status
         */
        export namespace UpdateStatus {

            /**
             * Payload
             * @description Interface for Payload
             */
            export interface IPayload {
                status?: Enums.Status;
                until?: string;
            }
        }

        /**
         * Opening times
         * @description Namespace for Opening times
         */
        export namespace UpdateOpeningTimes {

            /**
             * Payload
             * @description Interface for Payload
             */
            export interface IPayload {
                availability?: Interfaces.IOpeningTime[];
            }
        }
    }
}