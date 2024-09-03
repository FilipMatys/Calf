import { Geojson } from "./geojson.interface";

/**
 * Producer
 * @description Interface for Producer
 */
export interface IProducer {
    country?: string;
    name?: string;
    geometryGeojson?: Geojson.IFeatureCollection;
}