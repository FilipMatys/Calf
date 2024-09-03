// External modules
import { Response } from "node-fetch";

/**
 * Callback function
 * @description Interface for callback function
 */
export interface ICallbackFn<TResult> {
    (error: any, response: Response | undefined, result: TResult | undefined): any;
}