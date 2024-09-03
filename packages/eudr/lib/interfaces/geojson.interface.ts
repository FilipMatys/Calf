// Enums
import { GeometryType } from "../enums/geometry-type.enum";

/**
 * Geojson
 * @description Namespace for Geojson
 */
export namespace Geojson {

    /**
     * Feature collection
     * @description Interface for Feature collection
     */
    export interface IFeatureCollection {
        type: "FeatureCollection";
        features?: IFeature[];
    }

    /**
     * Feature
     * @description Interface for Feature
     */
    export interface IFeature<TProperties = void> {
        type: "Feature",
        geometry?: IGeometry;
        properties?: TProperties;
    }

    /**
     * Geometry
     * @description Interface for Geometry
     */
    export interface IGeometry {
        type?: GeometryType;
        coordinates?: [number, number] | [number, number][] | [number, number][][] | [number, number][][][];
    }
}