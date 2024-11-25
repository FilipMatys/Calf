// Namespaces
import { Common } from "./common.namespace";

/**
 * Address
 * @description Namespace for Address
 */
export namespace Address {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {
        /**
         * Address type
         * @description Enum for Address type
         */
        export enum AddressType {
            Exact = "EXACT",
            Partial = "PARTIAL"
        }

        /**
         * Lift presence
         * @description Enum for Lift presence
         */
        export enum LiftPresence {
            Present = "PRESENT",
            Missing = "MISSING",
            Unknown = "UNKNOWN"
        }

        /**
         * Building utilization
         * @description Enum for Building utilization
         */
        export enum BuildingUtilization {
            Industrial = "INDUSTRIAL",
            Farmhouse = "FARMHOUSE",
            Residential = "RESIDENTIAL",
            ForestryBuilding = "FORESTRY_BUILDING",
            Civic = "CIVIC",
            ApartmentComplex = "APARTMENT_COMPLEX",
            House = "HOUSE",
            Cottage = "COTTAGE",
            Hall = "HALL",
            Retail = "RETAIL",
            Hotel = "HOTEL",
            Warehouse = "WAREHOUSE",
            FarmBuilding = "FARM_BUILDING",
            Commercial = "COMMERCIAL",
            CivicBuilding = "CIVIC_BUILDING",
            IndustrialBuilding = "INDUSTRIAL_BUILDING",
            TransportationBuilding = "TRANSPORTATION_BUILDING",
            Garage = "GARAGE",
            Miscellaneous = "MISCELLANEOUS",
            Multifunctional = "MULTIFUNCTIONAL",
            Greenhouse = "GREENHOUSE",
            Dam = "DAM",
            Floodgates = "FLOODGATES",
            Levee = "LEVEE",
            Reservoir = "RESERVOIR",
            Weir = "WEIR",
            TransportationNaval = "TRANSPORTATION_NAVAL",
            WaterPowerPlant = "WATER_POWER_PLANT",
            WastewaterPlant = "WASTEWATER_PLANT",
            ConstructionSite = "CONSTRUCTION_SITE",
            Unknown = "UNKNOWN"
        }

        /**
         * Building sewer
         * @description Enum for Building sewer
         */
        export enum BuildingSewer {
            SewerConnection = "SEWER_CONNECTION",
            WaterPurification = "WATER_PURIFICATION",
            Septic = "SEPTIC",
            Without = "WITHOUT",
            Unknown = "UNKNOWN"
        }

        /**
         * Construction type
         * @description Enum for Construction type
         */
        export enum ConstructionType {
            BrickBlock = "BRICK_BLOCK",
            Stone = "STONE",
            StoneBrick = "STONE_BRICK",
            Panel = "PANEL",
            Adobe = "ADOBE",
            Timber = "TIMBER",
            Monolith = "MONOLITH",
            StoneBrickBlock = "STONE_BRICK_BLOCK",
            Other = "OTHER",
            Unknown = "UNKNOWN"
        }

        /**
         * Heating system
         * @description Enum for Heating system
         */
        export enum HeatingSystem {
            CentralBuilding = "CENTRAL_BUILDING",
            CentralRemote = "CENTRAL_REMOTE",
            Local = "LOCAL",
            Other = "OTHER",
            Unknown = "UNKNOWN"
        }

        /**
         * Water supply
         * @description Enum for Water supply
         */
        export enum WaterSupply {
            Present = "PRESENT",
            Missing = "MISSING",
            Unknown = "UNKNOWN"
        }

        /**
         * Gas connection
         * @description Enum for Gas connection
         */
        export enum GasConnection {
            Line = "LINE",
            Tank = "TANK",
            Without = "WITHOUT",
            InHouse = "IN_HOUSE",
            Unknown = "UNKNOWN"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Address
         * @description Interface for Address
         */
        export interface IAddress {
            type?: Enums.AddressType;
            values?: IAddressResponseValues;
            coordinates?: Common.Interfaces.ICoordinates;
            realEstateDetails?: IRealEstateDetails;
        }

        /**
         * Address request values
         */
        export interface IAddressRequestValues {
            FIRST_LINE?: string;
            SECOND_LINE?: string;
            CITY_AND_DISTRICT?: string;
            ZIP?: string;
            STREET?: string;
            STREET_CODE?: string;
            PART_CODE?: string;
            CITY_CODE?: string;
            WHOLE_ADDRESS?: string;
            WHOLE_NUMBER?: string;
            NUMBER_1?: string;
            NUMBER_2?: string;
            NUMBER_3?: string;
            CONSCRIPTION_NUMBER?: string;
            PROVISIONAL_NUMBER?: string;
            STREET_NUMBER?: string;
            STREET_NUMBER_CHAR?: string;
            CODE?: string;
        }

        /**
         * Address response values
         * @description Interface for Address response values
         */
        export interface IAddressResponseValues {
            CODE?: string;
            STREET_NAME?: string;
            STREET_CODE?: string;
            CITY_NAME?: string;
            CITY_CODE?: string;
            POST_NAME?: string;
            ZIP?: string;
            CITY_AND_OPTIONAL_DISTRICT?: string;
            PART_NAME?: string;
            PART_CODE?: string;
            CITY_AREA_1_NAME?: string;
            CITY_AREA_1_CODE?: string;
            CITY_AREA_2_NAME?: string;
            CITY_AREA_2_CODE?: string;
            CITY_AREA_3_NAME?: string;
            CITY_AREA_3_CODE?: string;
            ELECTORAL_AREA_NAME?: string;
            ELECTORAL_AREA_CODE?: string;
            DISTRICT_NAME?: string;
            DISTRICT_CODE?: string;
            REGION_NAME?: string;
            REGION_CODE?: string;
            COUNTRY_NAME?: string;
            COUNTRY_CODE?: string;
            CONSCRIPTION_NUMBER?: string;
            PROVISIONAL_NUMBER?: string;
            STREET_NUMBER?: string;
            STREET_NUMBER_CHAR?: string;
            WHOLE_NUMBER?: string;
            FORMATTED_ADDRESS_FIRST_LINE?: string;
            FORMATTED_ADDRESS_FIRST_LINE_NO_NUMBER?: string;
            FORMATTED_ADDRESS_SECOND_LINE?: string;
            FORMATTED_ADDRESS_WHOLE?: string;
        }

        /**
         * Real estate details
         * @description Interface for Real estate details
         */
        export interface IRealEstateDetails {
            buildingCode?: number;
            landLotNumber1?: string;
            landLotNumber2?: string;
            cadastralUnitName?: string;
            cadastralUnitCode?: string;
            liftPresence?: Enums.LiftPresence;
            numberOfStoreys?: string;
            numberOfFlats?: string;
            floorArea?: string;
            buildingUtilization?: Enums.BuildingUtilization;
            buildingCoverage?: string;
            cubicalContent?: string;
            buildingSewer?: Enums.BuildingSewer;
            constructionType?: Enums.ConstructionType;
            heatingSystem?: Enums.HeatingSystem;
            waterSupply?: Enums.WaterSupply;
            gasConnection?: Enums.GasConnection;
            finishDate?: string;
        }

        /**
         * Hint
         * @description Interface for Hint
         */
        export interface IHint {
            message?: string;
            addresses?: IAddress[];
        }

        /**
         * Validate request 
         * @description Interface for Validate request
         */
        export interface IValidateRequest extends Common.Interfaces.IRequest {
            countries?: Common.Enums.Country[];
            values?: IAddressRequestValues;
        }

        /**
         * Validate response
         * @description Interface for Validate response
         */
        export interface IValidateResponse extends Common.Interfaces.IResponse<IValidateResult> { }

        /**
         * Validate result
         * @description Interface for Validate result
         */
        export interface IValidateResult {
            type?: Common.Enums.ResultType;
            addresses?: IAddress[];
            hint?: IHint;
        }
    }
}