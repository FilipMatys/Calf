/**
 * Merchandise management document type
 * @description Possible types of merchandise management document
 */
export enum MerchandiseManagementDocumentType {

    /**
     * Příjem na sklad 
     */
    ReceiptOfGoods = 0,

    /**
     * Storno příjmu
     */
    ReceiptOfGoodsCancellation = 1,

    /**
     * Výdej ze skladu
     */
    IssueOfGoods = 2,

    /**
     * Storno výdeje
     */
    IssueOfGoodsCancellation = 3,

    /**
     * Výdej v evid. ceně
     */
    IssueOfGoodsInRegisteredPrice = 4,

    /**
     * Vydaná objednávka
     */
    IssuedOrder = 6,

    /**
     * Reklamace dod
     */
    SupplyComplaint = 7,

    /**
     * Reklamace odb
     */
    ClientComplaint = 8,

    /**
     * Expediční příkaz
     */
    ShippingOrder = 9,

    /**
     * Rezervace
     */
    Reservation = 10,

    /**
     * Nabídka
     */
    Offer = 11,

    /**
     * Sestava
     */
    Composition = 12,

    /**
     * Vydaná faktura
     */
    IssuedInvoice = 13,

    /**
     * Vydaný dobropis
     */
    IssuedCreditNote = 14,

    /**
     * Přijatá faktura
     */
    AcceptedInvoice = 18,

    /**
     * Přijatý dobropis
     */
    AcceptedCreditNote = 19
}