// Interfaces
import { ICoordinates } from "./coordinates.interface";

/**
 * Location
 * @description Interface for Location
 */
export interface ILocation {
    street_address?: string;
    apartment?: string;
    city?: string;
    country?: string;
    formatted_address?: string;
    coordinates?: ICoordinates;
}