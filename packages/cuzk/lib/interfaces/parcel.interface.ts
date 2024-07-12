/**
 * Parcel
 * @description Name space for Parcel
 */
export namespace Parcel {

    /**
     * Get by id
     * @description Namespace for Get by id
     */
    export namespace GetById {

        /**
         * Interface for Response
         * @description Interface for Response
         */
        export interface IResponse {
        }
    }

    export namespace Search {
        /**
         * Params
         * @description Interface for Params
         */
        export interface IParams {
            KodKatastralnihoUzemi?: number;
            TypParcely?: string;
            DruhCislovaniParcely?: number;
            KmenoveCisloParcely?: number;
            PoddeleniCislaParcely?: number;
            PuvodParcelyZE?: number;
            Identifikace?: string;
        }

        /**
         * Interface for Response
         * @description Interface for Response
         */
        export interface IResponse {
        }
    }

    export namespace GetByPolygon {

        /**
         * Params
         * @description Interface for Params
         */
        export interface IParams {
            SeznamSouradnic?: string;
            Identifikace?: string;
        }

        /**
         * Interface for Response
         * @description Interface for Response
         */
        export interface IResponse {
        }
    }

    export namespace Neighboring {

        /**
         * Interface for Response
         * @description Interface for Response
         */
        export interface IResponse {
        }
    }
}