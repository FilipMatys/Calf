// Enums
import { RequestContentType } from "../enums/request-content-type.enum";

/**
 * Request headers
 */
export interface IRequestHeaders {
    ["Authorization"]?: string;
    ["Content-Type"]?: RequestContentType;
    ["Accept"]: RequestContentType;
}