// Interfaces
import { IGoodsMeasure } from "./goods-measure.interface";

/**
 * Descriptor
 * @description Interface for Descriptor
 */
export interface IDescriptor {
    descriptionOfGoods?: string;
    goodsMeasure?: IGoodsMeasure;
}