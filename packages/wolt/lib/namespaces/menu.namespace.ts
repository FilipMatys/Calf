// Namespaces
import { Common } from "./common.namespace";

/**
 * Menu
 * @description Namespace for Menu
 */
export namespace Menu {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Service size
         * @description Enum for Service size
         */
        export enum ServingSize {
            Per100Grams = "per_100_grams",
            Per100Ml = "per_100_ml"
        }

        /**
         * Delivery method
         * @description Enum for Delivery method
         */
        export enum DeliveryMethod {
            Home = "homedelivery",
            TakeAway = "takeaway",
            EatIn = "eatin"
        }

        /**
         * Option type
         * @description Enum for Option type
         */
        export enum OptionType {
            SingleChoice = "SingleChoice",
            MultiChoice = "MultiChoice"
        }
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Menu
         * @description Interface for Menu
         */
        export interface IMenu extends Common.Interfaces.IIndexed {
            currency?: string;
            primary_language?: string;
            categories?: ICategory[];
        }

        /**
         * Category
         * @description Interface for Category
         */
        export interface ICategory extends Common.Interfaces.IIndexed {
            name?: Common.Interfaces.ILocalizedText[];
            description?: Common.Interfaces.ILocalizedText[];
            subcategories?: ICategory[];
            items?: IItem[];
            weekly_availability?: Common.Interfaces.IOpeningTime[];
        }

        /**
         * Item
         * @description 
         */
        export interface IItem {
            name?: Common.Interfaces.ILocalizedText[];
            description?: Common.Interfaces.ILocalizedText[];
            image_url?: string;
            price?: number;
            sales_tax_percentage?: number;
            alcohol_percentage?: number;
            caffeine_content?: ICaffeineContent;
            weekly_availability?: Common.Interfaces.IOpeningTime[];
            weekly_visibility?: Common.Interfaces.IOpeningTime[];
            enabled?: boolean;
            external_data?: string;
            quantity?: number;
            deposit?: IDeposit;
            gtin_barcode?: string;
            merchant_sku?: string;
            bundle_offer?: boolean;
        }

        /**
         * Option
         * @description Interface for Option
         */
        export interface IOption {
            name?: Common.Interfaces.ILocalizedText[];
            external_data?: string;
            type?: Enums.OptionType;
            selection_range?: Common.Interfaces.IRange;
        }

        /**
         * Product information
         * @description Interface for Production information
         */
        export interface IProductInformation {
            ingredients?: Common.Interfaces.ILocalizedText[];
            additives?: Common.Interfaces.ILocalizedText[];
            nutrition_facts?: Common.Interfaces.ILocalizedText[];
            allergens?: Common.Interfaces.ILocalizedText[];
            producer_information?: Common.Interfaces.ILocalizedText[];
            distributor_information?: Common.Interfaces.ILocalizedText[];
            country_of_origin?: Common.Interfaces.ILocalizedText[];
            conditions_of_use_and_storage?: Common.Interfaces.ILocalizedText[];
            regulatory_information?: Common.Interfaces.ILocalizedText[];
            nutrition_information?: INutritionInformation;
        }

        /**
         * Caffeine content
         * @description Interface for Caffeine content
         */
        export interface ICaffeineContent {
            serving_size?: Enums.ServingSize;
            value?: number;
        }

        /**
         * Deposit
         * @description Interface for Deposit
         */
        export interface IDeposit {
            price?: number;
            vat_percentage?: number;
        }

        /**
         * Option value
         * @description Interface for Option value
         */
        export interface IOptionValue {
            name?: Common.Interfaces.ILocalizedText[];
            selection_range?: Common.Interfaces.IRange;
            price?: number;
            vat_percentage?: number;
            enabled?: boolean;
            default?: number;
            external_data?: string;
            sub_option_values?: IOptionValue[];
            product_information?: IProductInformation;
        }

        /**
         * Nutrition information
         * @description Interface for Nutrition information
         */
        export interface INutritionInformation {
            serving_size?: Enums.ServingSize;
            nutrition_values?: INutritionValues;
        }

        /**
         * Nutrition values
         * @description Interface for Nutrition values
         */
        export interface INutritionValues {
            energy_kcal?: Common.Interfaces.IAmount;
            energy_kj?: Common.Interfaces.IAmount;
            fats?: Common.Interfaces.IAmount;
            saturated_fats?: Common.Interfaces.IAmount;
            mono_unsaturated_fats?: Common.Interfaces.IAmount;
            poly_unsaturated_fats?: Common.Interfaces.IAmount;
            carbohydrate?: Common.Interfaces.IAmount;
            sugar?: Common.Interfaces.IAmount;
            starch?: Common.Interfaces.IAmount;
            polyols?: Common.Interfaces.IAmount;
            protein?: Common.Interfaces.IAmount;
            salt?: Common.Interfaces.IAmount;
            sodium?: Common.Interfaces.IAmount;
            fibres?: Common.Interfaces.IAmount;
            vitamin_c?: Common.Interfaces.IAmount;
            potassium?: Common.Interfaces.IAmount;
            calcium?: Common.Interfaces.IAmount;
            magnesium?: Common.Interfaces.IAmount;
            chloride?: Common.Interfaces.IAmount;
            fluoride?: Common.Interfaces.IAmount;
        }
    }

    /**
     * Methods
     * @description Namespace for Methods
     */
    export namespace Methods {

        /**
         * Update inventory
         * @description Namespace for Update inventory
         */
        export namespace UpdateInventory {

            /**
             * Payload
             * @description Interface for Payload
             */
            export interface IPayload {

            }
        }

        /**
         * Update items
         * @description Namespace for Update items
         */
        export namespace UpdateItems {

            /**
             * Payload
             * @description Interface for Payload
             */
            export interface IPayload {

            }
        }

        /**
         * Update options
         * @description Namespace for Update options
         */
        export namespace UpdateOptions {

            /**
             * Payload
             * @description Interface for Payload
             */
            export interface IPayload {

            }
        }
    }
}