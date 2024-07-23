/**
 * Operator identifier type
 * @description Interface for Operator identifier type
 */
export enum OperatorIdentifierType {
    /**
     * Economic Operators Registration and Identification number (EORI), see http://ec.europa.eu/taxation_customs/dds2/eos/eori_home.jsp
     */
    EconomicOperatorsRegistrationAndIdentificationNumber = "eori",
    /**
     * VAT identification number (VATIN), see http://en.wikipedia.org/wiki/VAT_identification_number, http://en.wikipedia.org/wiki/VAT_identification_number
     */
    VatIdentificationNumber = "vat",
    /**
     * Indian Corporate Identity Number, see http://taxguru.in/company-law/cin-corporate-identification-number-for-companies-how-it-is-structured.html
     */
    CorporateIdentityNumber = "cin",
    /**
     * The nine-digit D-U-N-S Number, see http://en.wikipedia.org/wiki/Data_Universal_Numbering_System
     */
    Duns = "duns",
    /**
     * Registration number in official national company register
     */
    CompanyRegister = "comp_reg",
    /**
     * National company number, http://business.belgium.be/en/managing_your_business/setting_up_your_business/main_steps/company_number/
     */
    CompanyNumber = "comp_num",
    /**
     * Central Business Register, see https://cvr.dk/Site/Forms/CMS/DisplayPage.aspx?pageid=21
     */
    CentralBusinessRegister = "cbr",
    /**
     * Ship's managing company IMO number, see http://en.wikipedia.org/wiki/IMO_numbers
     */
    ShipsManagingCompanyIMONumber = "ship_man_comp_imo",
    /**
     * Ship's registered owner IMO number, see http://en.wikipedia.org/wiki/IMO_numbers
     */
    ShipsRegisteredOwnerIMONumber = "ship_reg_owner_imo",
    /**
     * Northern Ireland Retail Movement Scheme
     */
    RetailMovementScheme = "remos",
    /**
     * Global location number
     */
    GlobalLocationNumber = "gln",
    /**
     * Tax Identification Number (TIN), see http://ec.europa.eu/taxation_customs/taxation/tax_cooperation/mutual_assistance/tin/index_en.htm
     */
    TaxIdentificationNumber = "tin"
}