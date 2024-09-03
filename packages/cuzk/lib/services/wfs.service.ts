// External modules
import { Response } from "node-fetch";
import { xml2json } from "xml-js";

// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { WFS } from "../interfaces/wfs.interface";

// Services
import { RequestService } from "./request.service";

/**
 * WFS service
 * @description Simplified WFS service
 */
export class WFSService extends RequestService {

    /**
     * Get parcel
     * @param params 
     * @param callback 
     */
    public getParcel(params: WFS.GetParcel.IParams, callback?: ICallbackFn<WFS.GetParcel.IResponse>): Promise<WFS.GetParcel.IResponse> {
        // Make request
        return this.get([], {
            ...params,
            service: "wfs",
            version: "2.0.0",
            request: "GetFeature",
            STOREDQUERY_ID: "GetParcel"
        }, callback);
    }

    /**
     * Parse response
     * @param response 
     */
    protected async parseResponse<TResult>(response: Response): Promise<TResult> {
        // Get text
        const text = await response.text();

        console.log(xml2json(text, { compact: true }));

        // Convert
        return JSON.parse(xml2json(text, { compact: true }));
    }
}