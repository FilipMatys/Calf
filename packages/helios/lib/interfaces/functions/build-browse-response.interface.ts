// Interfaces
import { IHeliosBrowseResult } from "../results/browse.interface";

/**
 * Build browse response function
 * @description Function to build browse response
 */
export interface IHeliosBuildBrowseResponseFn<TResponse> {
    (response: IHeliosBrowseResult): Promise<TResponse> | TResponse | Promise<null> | null;
}