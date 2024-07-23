/**
 * Error code
 * @description Enum for Error code
 */
export enum ErrorCode {
    WebServiceUserNotOperator = "EUDR_WEBSERVICE_USER_NOT_EUDR_OPERATOR",
    WebServiceUserFromManyOperator = "EUDR_WEBSERVICE_USER_FROM_MANY_OPERATOR",
    WebServiceUserActivityNotAllowed = "EUDR_WEBSERVICE_USER_ACTIVITY_NOT_ALLOWED",
    ActivityCountryCodeInvalid = "EUDR_ACTIVITY_COUNTRY_CODE_INVALID",
    OperatorEORIForActivityMissing = "EUDR_OPERATOR_EORI_FOR_ACTIVITY_MISSING",
    EntryOrExitCountryCodeInvalid = "EUDR_ENTRY_OR_EXIT_COUNTRY_CODE_INVALID",
    BehalfOperatorNotProvided = "EUDR_BEHALF_OPERATOR_NOT_PROVIDED",
    ActivityTypeNotCompatible = "EUDR_ACTIVITY_TYPE_NOT_COMPATIBLE",
    CommoditiesHsCodeInvalid = "EUDR_COMMODITIES_HS_CODE_INVALID",
    CommoditiesDescriptorNetMassEmpty = "EUDR_COMMODITIES_DESCRIPTOR_NET_MASS_EMPTY",
    CommoditiesDescriptorQuantityMissing = "EUDR_COMMODITIES_DESCRIPTOR_QUANTITY_MISSING",
    CommoditiesDescriptorUniversalUnitMissing = "EUDR-COMMODITIES-DESCRIPTOR-UNIVERSAL-UNIT-MISSING",
    CommodityProducerCountryCodeInvalid = "EUDR_COMMODITY_PRODUCER_COUNTRY_CODE_INVALID",
    CommoditiesProducerGeoEmpty = "EUDR_COMMODITIES_PRODUCER_GEO_EMPTY",
    CommoditiesProducerGeoInvalid = "EUDR_COMMODITIES_PRODUCER_GEO_INVALID",
    CommoditiesProducerGeoLatitudeInvalid = "EUDR_COMMODITIES_PRODUCER_GEO_LATITUDE_INVALID",
    CommoditiesProducerGeoLongitudeInvalid = "EUDR_COMMODITIES_PRODUCER_GEO_LONGITUDE_INVALID",
    CommoditiesProducerGeoPolygonInvalid = "EUDR_COMMODITIES_PRODUCER_GEO_POLYGON_INVALID",
    CommoditiesProducerGeoAreaInvalid = "EUDR_COMMODITIES_PRODUCER_GEO_AREA_INVALID",
    MaximumGeoSizeReached = "EUDR_MAXIMUM_GEO_SIZE_REACHED",
    ReferencedDDSInvalid = "EUDR_REFERENCED_DDS_INVALID",
    MaximumReferencedDDSReached = "EUDR_MAXIMUM_REFERENCED_DDS_REACHED"
}