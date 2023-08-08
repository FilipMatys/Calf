/**
 * Shipping details
 * @description Shipping details
 */
export interface IShippingDetails {
     name: string,
     address1: string,
     address2?: string,
     address3?: string,
     city: string,
     postalCode: string,
     country: number, // ISO 3166-1 
     countrySubdivision?: number, // ISO 3166-2 
     phone?: string,
     email?: string,
     method?: string
}