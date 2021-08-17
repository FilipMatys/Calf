/**
 * Utilities
 */
export class Utilities {

    /**
     * Singleton
     */
    protected constructor() { }

    /**
     * Convert to radians
     * @param degrees 
     */
    public static toRadians(degrees: number): number {
        return degrees * (Math.PI / 180);
    }

    /**
     * Get mercator
     * @param lat 
     * @returns 
     */
    public static mercator(lat: number): number {
        return Math.log(Math.tan(lat * 0.5 + Math.PI / 4));
    }

    /**
     * Returns haversine
     * @param value 
     */
    public static hav(value: number): number {
        // Get sin half
        const sinHalf = Math.sin(value * 0.5);

        // Multiply
        return sinHalf * sinHalf;
    }

    /**
     * Wrap
     * @param n 
     * @param min 
     * @param max 
     * @returns 
     */
    public static wrap(n: number, min: number, max: number): number {
        return (n >= min && n < max) ? n : (this.mod(n - min, max - min) + min);
    }

    /**
     * Get non negative remainder of x / m
     * @param x 
     * @param m 
     * @returns 
     */
    public static mod(x: number, m: number): number {
        return ((x % m) + m) % m;
    }

    /**
     * Restrict x to range [low, high]
     * @param x 
     * @param low 
     * @param high 
     * @returns 
     */
    public static clamp(x: number, low: number, high: number): number {
        return x < low ? low : (x > high ? high : x);
    }

    /**
     * Inverse mercator
     * @param y 
     * @returns 
     */
    public static inverseMercator(y: number): number {
        return 2 * Math.atan(Math.exp(y)) - Math.PI / 2;
    }

    /**
     * Get hav() distance
     * @param lat1 
     * @param lat2 
     * @param dLng 
     * @returns 
     */
    public static havDistance(lat1: number, lat2: number, dLng: number): number {
        return this.hav(lat1 - lat2) + this.hav(dLng) * Math.cos(lat1) * Math.cos(lat2);
    }
}