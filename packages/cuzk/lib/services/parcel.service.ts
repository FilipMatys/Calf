// External modules
import { Response } from "node-fetch";

// Interfaces
import { ICallbackFn } from "../interfaces/callback.interface";
import { Parcel } from "../interfaces/parcel.interface";

// Services
import { RequestService } from "./request.service";

/**
 * Parcel service
 * @description Get parcel information
 */
export class ParcelService extends RequestService {

    // Default path
    private readonly PATH: string[] = ["api", "v1", "Parcely"];

    /**
     * Get by id
     * @param id
     * @param callback 
     * @returns 
     */
    public getById(id: string, callback?: ICallbackFn<Parcel.GetById.IResponse>): Promise<Parcel.GetById.IResponse> {
        // Make request
        return this.get([...this.PATH, id], null, callback);
    }

    /**
     * Neighboring
     * @param id 
     * @param callback 
     * @returns 
     */
    public neighboring(id: string, callback?: ICallbackFn<Parcel.Neighboring.IResponse>): Promise<Parcel.Neighboring.IResponse> {
        // Make request
        return this.get([...this.PATH, "SousedniParcely", id], null, callback);
    }

    /**
     * Search
     * @param params 
     * @param callback 
     * @returns 
     */
    public search(params: Parcel.Search.IParams, callback?: ICallbackFn<Parcel.Search.IResponse>): Promise<Parcel.Search.IResponse> {
        // Make request
        return this.get([...this.PATH, "Vyhledani"], params, callback);
    }

    /**
     * Search
     * @param params 
     * @param callback 
     * @returns 
     */
    public getByPolygon(params: Parcel.GetByPolygon.IParams, callback?: ICallbackFn<Parcel.GetByPolygon.IResponse>): Promise<Parcel.GetByPolygon.IResponse> {
        // Make request
        return this.get([...this.PATH, "Polygon"], params, callback);
    }

    /**
     * Parse response
     * @param response 
     * @returns 
     */
    protected parseResponse<TResult>(response: Response): Promise<TResult> {
        console.log(response);

        // Parse as json
        return response.json();
    }
}