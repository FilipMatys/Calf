// Interfaces
import { IPath } from "../interfaces/path.interface";
import { ICoordinates } from "../interfaces/coordinates.interface";

// Constants
import { EARTH_RADIUS } from "../constants/earth-radius.constant";

// Utilities
import { Utilities } from "./utilities.class";

/**
 * Poly
 * @description Methods that work with
 * poly lines
 */
export class Poly {

    /**
     * Singleton
     */
    protected constructor() { }

    /**
     * Decode 
     * @description Decode polyline into path
     * @param polyline 
     */
    public static decode(polyline: string): IPath {
        // Init result
        const path: IPath = new Array(Math.floor(polyline.length / 2));

        // Init variables
        const length: number = polyline.length || 0;
        let index: number = 0;
        let lat: number = 0;
        let lng: number = 0;

        // Iterate polyline
        for (var pointIndex = 0; index < length; ++pointIndex) {
            var result = 1;
            var shift = 0;
            var b;
            do {
                b = polyline.charCodeAt(index++) - 63 - 1;
                result += b << shift;
                shift += 5;
            } while (b >= 0x1f);
            lat += ((result & 1) ? ~(result >> 1) : (result >> 1));
            result = 1;
            shift = 0;
            do {
                b = polyline.charCodeAt(index++) - 63 - 1;
                result += b << shift;
                shift += 5;
            } while (b >= 0x1f);
            lng += ((result & 1) ? ~(result >> 1) : (result >> 1));
            path[pointIndex] = { lat: lat * 1e-5, lng: lng * 1e-5 };
        }
        path.length = pointIndex;

        // Return result
        return path;
    }

    /**
     * Is location on path
     * @param point 
     * @param poly 
     * @param tolerance 
     * @returns 
     */
    public static isLocationOnPath(point: ICoordinates, poly: IPath, tolerance: number): boolean {
        return this.locationIndexOnEdgeOrPath(point, poly, false, tolerance) >= 0;
    }

    /**
     * Location index on edge or path
     * @param point 
     * @param poly 
     * @param closed 
     * @param toleranceEarth 
     */
    public static locationIndexOnEdgeOrPath(point: ICoordinates, poly: IPath, closed: boolean, toleranceEarth: number): number {
        // Get poly size
        const size = poly.length;

        // Check size
        if (!size) {
            return -1;
        }

        // Get tolerance
        const tolerance = toleranceEarth / EARTH_RADIUS;
        const havTolerance = Utilities.hav(tolerance);
        const lat3 = Utilities.toRadians(point.lat);
        const lng3 = Utilities.toRadians(point.lng);
        const prev = poly[closed ? (size - 1) : 0];
        let lat1 = Utilities.toRadians(prev.lat);
        let lng1 = Utilities.toRadians(prev.lng);

        // Init index
        let idx = 0;

        const minAcceptable = lat3 - tolerance;
        const maxAcceptable = lat3 + tolerance;
        let y1 = Utilities.mercator(lat1);
        const y3 = Utilities.mercator(lat3);
        const xTry: number[] = [0, 0, 0];

        // Iterate poly
        for (let index = 0; index < size; index++) {
            // Get point
            const point2 = poly[index];

            // Init values
            const lat2 = Utilities.toRadians(point2.lat);
            const y2 = Utilities.mercator(lat2);
            const lng2 = Utilities.toRadians(point2.lng);

            // Check boundaries
            if (Math.max(lat1, lat2) >= minAcceptable && Math.min(lat1, lat2) <= maxAcceptable) {
                // We offset longitudes by -lng1; the implicit x1 is 0
                const x2 = Utilities.wrap(lng2 - lng1, -Math.PI, Math.PI);
                const x3Base = Utilities.wrap(lng3 - lng1, -Math.PI, Math.PI);
                xTry[0] = x3Base;
                xTry[1] = x3Base + 2 * Math.PI;
                xTry[2] = x3Base - 2 * Math.PI;

                // Iterate tries
                for (let index = 0; index < xTry.length; index++) {
                    // Get try
                    const x3 = xTry[index];
                    const dy = y2 - y1;
                    const len2 = x2 * x2 + dy * dy;
                    const t = len2 <= 0 ? 0 : Utilities.clamp((x3 * x2 + (y3 - y1) * dy) / len2, 0, 1);
                    const xClosest = t * x2;
                    const yClosest = y1 + t * dy;
                    const latClosest = Utilities.inverseMercator(yClosest);
                    const havDist = Utilities.havDistance(lat3, latClosest, x3 - xClosest);

                    // Compare distance with tolerance
                    if (havDist < havTolerance) {
                        return Math.max(0, idx - 1);
                    }
                }
            }

            // Update values for next point
            lat1 = lat2;
            lng1 = lng2;
            y1 = y2;
            idx++;
        }

        // Return -1
        return -1;
    }
}