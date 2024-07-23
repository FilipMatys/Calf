// Interfaces
import { ISpeciesInfo } from "./species-info.interface";
import { IDescriptor } from "./descriptor.interface";
import { IProducer } from "./producer.interface";

/**
 * Commodity
 * @description Interface for Commodity
 */
export interface ICommodity {
    descriptor?: IDescriptor;
    hsHeading?: string;
    speciesInfo?: ISpeciesInfo[];
    producers?: IProducer[];
}