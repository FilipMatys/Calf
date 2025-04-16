// Namespaces
import { Common } from "./common.namespace";

/**
 * Terminal list
 * @description Namespace for Terminal list
 */
export namespace TerminalList {

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse {
            ResultCode?: Common.Enums.ResultCode;
            DeviceId?: string;
            POITerminalList?: Common.Interfaces.IPOITerminal[];
        }
    }
}