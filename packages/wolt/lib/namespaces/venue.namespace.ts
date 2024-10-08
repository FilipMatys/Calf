// Namespaces
import { Common } from "./common.namespace";

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
        export interface IVenue extends Common.Interfaces.IIndexed {
            status?: IStatus;
            contact_details?: IContactDetails;
            opening_times?: Common.Interfaces.IOpeningTime[];
            special_times?: Common.Interfaces.IOpeningTime[];
            delivery_area?: Common.Interfaces.ICoordinates[];
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
                availability?: Common.Interfaces.IOpeningTime[];
            }
        }
    }
}