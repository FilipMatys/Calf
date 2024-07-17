// Interfaces
import { IFault } from "./fault.interface";

/**
 * Response
 * @description Interface for Response
 */
export interface IResponse<TData> {
    data?: TData;
    fault?: IFault;
    status?: number;
}