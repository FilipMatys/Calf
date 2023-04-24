// Models
import { IAbraModel } from "./abra.model";

/**
 * Abra Help desk user
 * @description Interface for Abra Help desk user
 */
export interface IAbraHelpDeskUser extends IAbraModel {
    Email?: string;
    FirstName?: string;
    LastName?: string;
    PhoneNumber?: string;
    ReqID?: string;
    ReqUserName?: string;
    SecUser_ID?: string;
}

/**
 * Accrual row
 * @description Interface for Accrual
 */
export interface IAccAccrualRow extends IAbraModel {
    AccDate$DATE?: string;
    Amount?: number;
    AmountInCurrency?: number;
    Parent_ID?: string;

}

/**
 * Accrual
 * @description Interface for Accrual
 */
export interface IAccAccrual extends IAbraModel {
    AccrualsDateFrom$DATE?: string;
    AccrualsDateTo$DATE?: string;
    PeriodCount?: number;
    PeriodType?: number;
    Rows?: IAccAccrualRow[];
    SourceDocAccDate$DATE?: string;
    SourceDocRow_ID?: string;
    SourceDocType?: string;
    SourceDoc_ID?: string;
    SourceDocumentAllRows?: boolean;
    TotalRowAmountInCurrency?: number;
    TotalRowLocalAmount?: number;
    UserChange?: boolean;
}

/**
 * Document queue period
 * @description Interface for Document queue period
 */
export interface IAccDocQueuePeriod extends IAbraModel {
    DocQueue_ID?: string;
    LastNumber?: number;
    Period_ID?: string;
}

/**
 * Document queue
 * @description Interface for Document queue
 */
export interface IAccDocQueue extends IAbraModel {
    AccountWhere?: boolean;
    AutoFillHole?: boolean;
    Code?: string;
    DocumentType?: string;
    Hidden?: boolean;
    LastNumbers?: IAccDocQueuePeriod[];
    Name?: string;
    Note?: string;
    ReverseAccounting?: boolean;
    ReverseDepositAccounting?: boolean;
    SummaryAccounted?: boolean;
}

/**
 * Document queue unused number
 * @description Interface for Document queue unused number
 */
export interface IAccDocQueueUnusedNumber extends IAbraModel {
    CorrectedAt$DATE?: string;
    CreatedAt$DATE?: string;
    OrdNumber?: number;
    Origin?: number;
    Parent_ID?: string;
    PriorityUser_ID?: string;
    Reserved?: boolean;
}

/**
 * Group
 * @description Interface for Group
 */
export interface IAccGroup extends IAbraModel {
    CustGroup?: string;
}

/**
 * Account
 * @description Interface for Account
 */
export interface IAccount extends IAbraModel {
    AccountType?: string;
    AccountTypeIndex?: number;
    BalanceAccount?: boolean;
    Code?: string;
    Hidden?: boolean;
    IsCostForProjectControl?: boolean;
    IsIncomplete?: boolean;
    IsRevenueForProjectControl?: boolean;
    Name?: string;
    Parent2_ID?: string;
    Parent_ID?: string;
    PrintToAcumulatedStatement?: boolean;
    Short?: boolean;
    Taxable?: boolean;
    Transferable?: boolean;
    TypeOfActivity?: number;
    VATIndex_ID?: string;
    AccountTypeName?: string;
    ParentCode?: string;
    ParentCode2?: string;
}

/**
 * Account beginning
 * @description Interface for Account beginning
 */
export interface IAccountBeginnings extends IAbraModel {
    Account_ID?: string;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    CreditAmount?: number;
    DebitAmount?: number;
    Division_ID?: string;
    Period_ID?: string;
}

/**
 * Preset definition
 * @description Interface for Preset definition row
 */
export interface IAccPresetDefinitionRow extends IAbraModel {
    Condition?: string;
    ContinueEvaluation?: boolean;
    CreditAccountExpr?: string;
    CreditAccount_ID?: string;
    CreditBusOrderExpr?: string;
    CreditBusOrder_ID?: string;
    CreditBusProjectExpr?: string;
    CreditBusProject_ID?: string;
    CreditBusTransactionExpr?: string;
    CreditBusTransaction_ID?: string;
    CreditDivisionExpr?: string;
    CreditDivision_ID?: string;
    DebitAccountExpr?: string;
    DebitAccount_ID?: string;
    DebitBusOrderExpr?: string;
    DebitBusOrder_ID?: string;
    DebitBusProjectExpr?: string;
    DebitBusProject_ID?: string;
    DebitBusTransactionExpr?: string;
    DebitBusTransaction_ID?: string;
    DebitDivisionExpr?: string;
    DebitDivision_ID?: string;
    Exceptable?: boolean;
    ExpressionRow?: boolean;
    Parent_ID?: string;
    PosIndex?: number;
    RowType?: number;
    TextExpr?: string;
}

/**
 * Preset definition split amount row
 * @description Interface for Preset definition split amount row
 */
export interface IAccPresetDefinitionSplitAmountRow extends IAbraModel {
    AmountExpr?: string;
    Condition?: string;
    CreditAccountExpr?: string;
    CreditAccount_ID?: string;
    CreditBusOrderExpr?: string;
    CreditBusOrder_ID?: string;
    CreditBusProjectExpr?: string;
    CreditBusProject_ID?: string;
    CreditBusTransactionExpr?: string;
    CreditBusTransaction_ID?: string;
    CreditDivisionExpr?: string;
    CreditDivision_ID?: string;
    DebitAccountExpr?: string;
    DebitAccount_ID?: string;
    DebitBusOrderExpr?: string;
    DebitBusOrder_ID?: string;
    DebitBusProjectExpr?: string;
    DebitBusProject_ID?: string;
    DebitBusTransactionExpr?: string;
    DebitBusTransaction_ID?: string;
    DebitDivisionExpr?: string;
    DebitDivision_ID?: string;
    ExpressionRow?: boolean;
    Parent_ID?: string;
    PosIndex?: number;
    RowType?: number;
    TextExpr?: string;
    Text2?: string;
}

/**
 * Preset definition
 * @description Interface for Preset definition
 */
export interface IAccPresetDefinition extends IAbraModel {
    Basic?: boolean;
    Code?: string;
    ComputedDocQueue?: string;
    DocQueue_ID?: string;
    DocumentType?: string;
    Hidden?: boolean;
    Name?: string;
    Rows?: IAccPresetDefinitionRow[];
    SplitAmountDefs?: IAccPresetDefinitionSplitAmountRow[];
}

/**
 * Price list restriction use
 * @description Interface for Price list restriction use
 */
export interface IPriceListRestrictionUse extends IAbraModel {
    Firm_ID?: string;
    Parent_ID?: string;
    RestrictionType?: number;
    Store_ID?: string;
}

/**
 * Price list rounding
 * @description Interface for Price list rounding
 */
export interface IPriceListRounding extends IAbraModel {
    AmountTo?: number;
    ConstantToAdd?: number;
    Currency_ID?: string;
    Parent_ID?: string;
    PosIndex?: number;
    PriceRounding?: number;
    RoundingBase?: number;
    RoundingType?: number;
}

/**
 * Action price list
 * @description Interface for Action price list
 */
export interface IActionPriceList extends IAbraModel {
    ByDateOfWeek?: boolean;
    ByTime?: boolean;
    Code?: string;
    CreationDate$DATE?: string;
    DateFrom$DATE?: string;
    DateTo$DATE?: string;
    DealerDiscountExcluded?: boolean;
    DocumentDiscountExcluded?: boolean;
    FinancialDiscountExcluded?: boolean;
    Friday?: boolean;
    Hidden?: boolean;
    IndividualDiscountExcluded?: boolean;
    ManagedBy_ID?: string;
    Monday?: boolean;
    Name?: string;
    Note?: string;
    PriceListRoundings?: IPriceListRounding[];
    Priority?: number;
    QuantityDiscountExcluded?: boolean;
    RestrictionUses?: IPriceListRestrictionUse[];
    Saturday?: boolean;
    Sunday?: boolean;
    Thursday?: boolean;
    TimeFrom?: string;
    TimeTo?: string;
    Tuesday?: boolean;
    Wednesday?: boolean;
    Comment?: string;
}

/**
 * Action tiered price
 * @description Interface for Action tiered price
 */
export interface IActionTieredPrice extends IAbraModel {
    Discount?: number;
    FirstPrice?: boolean;
    Parent_ID?: string;
    PosIndex?: number;
    PriceFromDiscount?: boolean;
    QuantityFrom?: number;
    SellingPrice?: number;
}

/**
 * Action store price row
 * @description Interface for Action store price row
 */
export interface IActionStorePriceRow extends IAbraModel {
    Amount?: number;
    Parent_ID?: string;
    Price_ID?: string;
    QUnit?: string;
    TieredPrice?: boolean;
    TieredPrices?: IActionTieredPrice[];
    UnitRate?: number;
    OverrateTieredPrices?: boolean;
}

/**
 * Action store price
 * @description Interface for Action store price
 */
export interface IActionStorePrice extends IAbraModel {
    PriceList_ID?: string;
    StoreCard_ID?: string;
    PriceRows?: IActionStorePriceRow[];
}

/**
 * Additional cost
 * @description Interface for Additional cost
 */
export interface IAdditionalCost extends IAbraModel {
    CustomsAmount?: number;
    CustomsIsLocal?: boolean;
    CustomsTariff?: number;
    IntrastatAffectKind?: number;
    OtherCostAmount?: number;
    OtherCostIsLocal?: boolean;
    OtherCostTariff?: number;
    OtherCostUsed?: boolean;
    SpendingTaxAmount?: number;
    SpendingTaxIsLocal?: boolean;
    SpendingTaxTariff?: number;
    TransportationAmount?: number;
    TransportationIsLocal?: boolean;
    TransportationTariff?: number;
    TransportationUsed?: boolean;
}

/**
 * Address
 * @description Interface for Address
 */
export interface IAddress extends IAbraModel {
    City?: string;
    Country?: string;
    CountryCode?: string;
    Databox?: string;
    EMail?: string;
    FaxNumber?: string;
    GPS?: string;
    Location?: string;
    PhoneNumber1?: string;
    PhoneNumber2?: string;
    PostCode?: string;
    Recipient?: string;
    Street?: string;
    ZIP?: string;
    OfficialCity?: string;
    OfficialHouseNumber?: string;
    OfficialStreet?: string;
    ShortAddress?: string;
}

/**
 * Auto server queue item recipient
 * @description Interface for Queue item recipient
 */
export interface IAutoServerQueueItemRecipient extends IAbraModel {
    Email?: string;
    Parent_ID?: string;
    PosIndex?: number;
    RecipientType?: number;
    SecurityGroup_ID?: string;
    SecurityRole_ID?: string;
    SecurityUser_ID?: string;
    SentKind?: number;
}

/**
 * Auto server queue item
 * @description Interface for Queue item
 */
export interface IAutoServerQueueItem extends IAbraModel {
    CorrectedBy_ID?: string;
    CreatedAt$DATE?: string;
    CreatedBy_ID?: string;
    Description?: string;
    Recipients?: any[];
    RunAs_ID?: string;
    SPID?: number;
    SchedulerItem_ID?: string;
    StateKind?: number;
    Subject?: string;
    TaskCLSID?: string;
    TaskParameters?: string;
    RunAsPassword?: string;
    SchedulerCode?: string;
    SchedulerName?: string;
    StateKindStr?: string;
    TaskDisplayName?: string;
}

/**
 * Auto server scheduler item recipient
 * @description Interface Auto server scheduler item recipient
 */
export interface IAutoServerSchedulerItemRecipient extends IAbraModel {
    Email?: string;
    Parent_ID?: string;
    PosIndex?: number;
    RecipientType?: number;
    SecurityGroup_ID?: string;
    SecurityRole_ID?: string;
    SecurityUser_ID?: string;
    SentKind?: number;
}

/**
 * Auto server scheduler item
 * @description Interface Auto server scheduler item
 */
export interface IAutoServerSchedulerItem extends IAbraModel {
    Code?: string;
    CorrectedBy_ID?: string;
    CreatedBy_ID?: string;
    Description?: string;
    ExecutionDateKind?: number;
    ExecutionLogMaxAge?: number;
    IsActive?: boolean;
    IsActiveForTestConnection?: boolean;
    LastScheduledDateTime$DATE?: string;
    Name?: string;
    NotificationKind?: number;
    Recipients?: IAutoServerSchedulerItemRecipient[];
    RepeatToDate$DATE?: string;
    RepetitionCount?: number;
    RepetitionCounter?: number;
    RepetitionDay?: number;
    RepetitionDaysInWeek?: string;
    RepetitionKind?: number;
    RepetitionMonth?: number;
    RepetitionPeriodKind?: number;
    RepetitionTime$DATE?: string;
    RepetitionWeek?: number;
    RunAs_ID?: string;
    RunSoonAsPossible?: boolean;
    ScheduledDateTime$DATE?: string;
    Site?: string;
    StartDateTime$DATE?: string;
    Subject?: string;
    TaskCLSID?: string;
    TaskContext?: string;
    TaskParameters?: string;
    WeekendCorrectionKind?: number;
    LastScheduledDateTimeStr?: string;
    PlanDescription?: string;
    RunAsPassword?: string;
    ScheduledDateTimeStr?: string;
    TaskDisplayName?: string;
}

/**
 * Auto server task end log
 * @description Interface for Auto server task end log
 */
export interface IAutoServerTaskEndLog extends IAbraModel {
    FinishedAt$DATE?: string;
    Note?: string;
    ResultKind?: number;
    TaskLog_ID?: string;
    ResultKindStr?: string;
}

/**
 * Auto server task log
 * @description Interface for Auto server task log
 */
export interface IAutoServerTaskLog extends IAbraModel {
    CreatedAt$DATE?: string;
    Description?: string;
    InstanceID?: string;
    QueueItem_ID?: string;
    SPID?: number;
    SchedulerItem_ID?: string;
    TaskCLSID?: string;
    TaskParameters?: string;
}

/**
 * B2b export
 * @description Interface for B2b export
 */
export interface IB2bExport extends IAbraModel {
    CorrectedBy_ID?: string;
    CreatedBy_ID?: string;
    Data?: string;
    DataSource?: string;
    ExportID?: string;
    Hash?: string;
    IsForm?: boolean;
    Owner_ID?: string;
    System?: boolean;
    Title?: string;
    VisibleFrom$DATE?: string;
    VisibleTo$DATE?: string;
}

/**
 * Balance exchange difference
 * @description Interface for Balance exchange difference
 */
export interface IBalanceExchangeDifference extends IAbraModel {
    AccDate$DATE?: string;
    AccDocQueue_ID?: string;
    AccPresetDef_ID?: string;
    Amount?: number;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    CorrectedBy_ID?: string;
    CreatedBy_ID?: string;
    Description?: string;
    Division_ID?: string;
    DocDate$DATE?: string;
    DocQueue_ID?: string;
    FirmOffice_ID?: string;
    Firm_ID?: string;
    OrdNumber?: number;
    Original?: boolean;
    PDocumentType?: string;
    PDocument_ID?: string;
    Period_ID?: string;
    Person_ID?: string;
    Profit?: boolean;
    AccountingType?: number;
    Country_ID?: string;
    Currency_ID?: string;
    Dirty?: boolean;
    IsAccounted?: boolean;
    LocalRefCurrency_ID?: string;
    NewRelatedDocument_ID?: string;
    NewRelatedType?: number;
    RefCurrency_ID?: string;
}

/**
 * Bank account row
 * @description Interface for Bank account row
 */
export interface IBankAccountRow extends IAbraModel {
    Beginning?: number;
    BeginningLocal?: number;
    Parent_ID?: string;
    Period_ID?: string;
}

/**
 * Bank account
 * @description Interface for Bank account
 */
export interface IBankAccount extends IAbraModel {
    Account_ID?: string;
    Address_ID?: string;
    BankAccount?: string;
    BankCountry_ID?: string;
    BankStatement_ID?: string;
    ClientIdentificationNumber?: string;
    Currency_ID?: string;
    Division_ID?: string;
    FirstOpenPeriod_ID?: string;
    Hidden?: boolean;
    IBANCode?: string;
    LastOpenPeriod_ID?: string;
    Name?: string;
    PaymentOrder_ID?: string;
    PostalAccountNumber?: string;
    QRIBANCode?: string;
    Rows?: IBankAccountRow[];
    SpecSymbol?: string;
    SwiftCode?: string;
    FirstAmount?: number;
    FirstLocalAmount?: number;
}

/**
 * Bank account exchange difference
 * @description Interface for Bank account exchange difference
 */
export interface IBankAccountExchangeDifference extends IAbraModel {
    AccDate$DATE?: string;
    AccDocQueue_ID?: string;
    AccPresetDef_ID?: string;
    Amount?: number;
    BankAccount_ID?: string;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    CorrectedBy_ID?: string;
    CreatedBy_ID?: string;
    CurrRate?: number;
    Division_ID?: string;
    DocDate$DATE?: string;
    DocQueue_ID?: string;
    OrdNumber?: number;
    Period_ID?: string;
    Profit?: boolean;
    RefCurrRate?: number;
    AccountingType?: number;
    Country_ID?: string;
    Currency_ID?: string;
    Dirty?: boolean;
    IsAccounted?: boolean;
    LocalRefCurrency_ID?: string;
    NewRelatedDocument_ID?: string;
    NewRelatedType?: number;
    RefCurrency_ID?: string;
}

/**
 * Bank statement row
 * @description Interface for Bank statement row
 */
export interface IBankStatementRow extends IAbraModel {
    AccDate$DATE?: string;
    AccPresetDef_ID?: string;
    Account_ID?: string;
    Amount?: number;
    BankAccount?: string;
    BankStatementRow_ID?: string;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    Coef?: number;
    Credit?: boolean;
    CurrRate?: number;
    Currency_ID?: string;
    Division_ID?: string;
    DocDate$DATE?: string;
    ExpenseType_ID?: string;
    FirmText?: string;
    Firm_ID?: string;
    IncomeType_ID?: string;
    IsMultiPaymentRow?: boolean;
    LocalCoef?: number;
    LocalTAmount?: number;
    LocalZone_ID?: string;
    PAmount?: number;
    PDisKind?: number;
    PDocumentType?: string;
    PDocument_ID?: string;
    Parent_ID?: string;
    PosIndex?: number;
    RefCurrRate?: number;
    SpecSymbol?: string;
    TAmount?: number;
    Text?: string;
    VarSymbol?: string;
    Zone_ID?: string;
    LocalRefCurrency_ID?: string;
    RefCurrency_ID?: string;
}

/**
 * Bank statement
 * @description Interface for Bank statement
 */
export interface IBankStatement extends IAbraModel {
    AccDocQueue_ID?: string;
    BankAccount_ID?: string;
    CorrectedAt$DATE?: string;
    CorrectedBy_ID?: string;
    CreatedAt$DATE?: string;
    CreatedBy_ID?: string;
    CreditAmount?: number;
    DebitAmount?: number;
    Dirty?: boolean;
    DocDate$DATE?: string;
    DocQueue_ID?: string;
    ExternalNumber?: string;
    LocalCreditAmount?: number;
    LocalDebitAmount?: number;
    OrdNumber?: number;
    Period_ID?: string;
    NewRelatedDocument_ID?: string;
    NewRelatedType?: number;
    Rows?: IBankStatementRow[];
}

/**
 * Doc row batch
 * @description Interface for Doc row batch
 */
export interface IDocRowBatch extends IAbraModel {
    DeliveredQuantity?: number;
    Parent_ID?: string;
    PosIndex?: number;
    ProvideRowBatch_ID?: string;
    QUnit?: string;
    Quantity?: number;
    StoreBatch_ID?: string;
    UnitRate?: number;
    DeliveredQuantityStr?: string;
    MainUnitQuantity?: number;
    MainUnitRate?: number;
    NewBatch?: boolean;
    NewBatchComment?: string;
    NewBatchExpirationDate$DATE?: string;
    NewBatchName?: string;
    NewBatchSpecification?: string;
    StoreSubBatch_ID?: string;
    UnitQuantity?: number;
}

/**
 * Bill of delivery row
 * @description Interface for Bill of delivery row
 */
export interface IBillOfDeliveryRow extends IAbraModel {
    AdditionalCosts_ID?: string;
    BatchStatus?: number;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    ClosingIndex?: number;
    ClosingOrder?: number;
    CompletePrices?: boolean;
    DeliveredQuantity?: number;
    Division_ID?: string;
    DocRowBatches?: IDocRowBatch[];
    EtalonRate?: number;
    FlowSign?: number;
    FlowType?: string;
    IntrastatAmount?: number;
    IntrastatCurrency_ID?: string;
    IntrastatInputStatistic_ID?: string;
    IntrastatOutputStatistic_ID?: string;
    IntrastatRegion_ID?: string;
    IntrastatTransport?: boolean;
    InventoryCoupon?: boolean;
    LocalIntrastatAmount?: number;
    LocalTAmount?: number;
    OrderFlow?: number;
    OriginCountry_ID?: string;
    OriginalUnitPrice?: number;
    PMState_ID?: string;
    Parent_ID?: string;
    PosIndex?: number;
    PriceTransformationCoefficient?: number;
    ProductionTask_ID?: string;
    ProvideRowType?: string;
    ProvideRow_ID?: string;
    Provide_ID?: string;
    QUnit?: string;
    Quantity?: number;
    RDocumentRow_ID?: string;
    ReservedQuantity?: number;
    RowExtID?: string;
    RowType?: number;
    SourcePriceTransCoef?: number;
    StatisticAmount?: number;
    StoreCard_ID?: string;
    Store_ID?: string;
    TAmount?: number;
    Text?: string;
    ToIntrastat?: boolean;
    TotalPrice?: number;
    UnitPrice?: number;
    UnitRate?: number;
    Valuated?: boolean;
    ValuatedAt$DATE?: string;
    Capacity?: number;
    CapacityUnit?: number;
    DeliveredQuantityStr?: string;
    IntrastatStatus?: number;
    MainUnitQuantity?: number;
    MainUnitRate?: number;
    PercentPriceTransformationCoef?: number;
    ProvideRowDisplayName?: string;
    UnitQuantity?: number;
    Weight?: number;
    WeightUnit?: number;
}

/**
 * Bill of delivery
 * @description Interface for Bill of delivery
 */
export interface IBillOfDelivery extends IAbraModel {
    AccDate$DATE?: string;
    AccDocQueue_ID?: string;
    AccPresetDef_ID?: string;
    Address_ID?: string;
    AutoFillRowsPriceTransCoef?: number;
    Coef?: number;
    CorrectedAt$DATE?: string;
    CorrectedBy_ID?: string;
    Country_ID?: string;
    CreatedAt$DATE?: string;
    CreatedBy_ID?: string;
    CurrRate?: number;
    Currency_ID?: string;
    Description?: string;
    Dirty?: boolean;
    DocDate$DATE?: string;
    DocQueue_ID?: string;
    DocUUID?: string;
    DocumentType?: string;
    Finished?: boolean;
    FinishedAt$DATE?: string;
    FinishedBy_ID?: string;
    FirmOffice_ID?: string;
    Firm_ID?: string;
    IntrastatCompleteKind?: number;
    IntrastatDate$DATE?: string;
    IntrastatDeliveryTerm_ID?: string;
    IntrastatTransactionType_ID?: string;
    IntrastatTransportationType_ID?: string;
    InvalidAccounting?: boolean;
    IsAvailableForDelivery?: boolean;
    LocalCoef?: number;
    LocalZone_ID?: string;
    MasterDocCLSID?: string;
    MasterDocument_ID?: string;
    Options?: number;
    OrdNumber?: number;
    OutgoingTransfer_ID?: string;
    PMState_ID?: string;
    Period_ID?: string;
    Person_ID?: string;
    PricePrecision?: number;
    PriceTransformationCoefficient?: number;
    RDocumentType?: string;
    RDocument_ID?: string;
    RefCurrRate?: number;
    ResponsibleRole_ID?: string;
    ResponsibleUser_ID?: string;
    Rows?: IBillOfDeliveryRow[];
    TradeType?: number;
    TransportationType_ID?: string;
    VATCountry_ID?: string;
    VIESKind?: number;
    Zone_ID?: string;
    AccountingType?: number;
    Amount?: number;
    Capacity?: number;
    CapacityUnit?: number;
    CheckSetBatches?: boolean;
    Closed?: boolean;
    ClosedRowCount?: number;
    CurrRateInfo?: string;
    IsAccounted?: boolean;
    LocalAmount?: number;
    LocalRefCurrency_ID?: string;
    NewRelatedDocument_ID?: string;
    NewRelatedType?: number;
    PercentPriceTransformationCoef?: number;
    RefCurrency_ID?: string;
    ReverseDocumentInfo?: string;
    RowCount?: number;
    VIESKindAsText?: string;
    Weight?: number;
    WeightUnit?: number;
}

/**
 * Book entry
 * @description Interface for Book entry
 */
export interface IBookEntry extends IAbraModel {
    AccDate$DATE?: string;
    AccDocQueue_ID?: string;
    AccGroupCredit_ID?: string;
    AccGroupDebit_ID?: string;
    AccGroup_ID?: string;
    Amount?: number;
    AmountInCurrency?: number;
    Audited?: boolean;
    CorrectedBy_ID?: string;
    CreatedBy_ID?: string;
    CreditAccount_ID?: string;
    CreditBusOrder_ID?: string;
    CreditBusProject_ID?: string;
    CreditBusTransaction_ID?: string;
    CreditDivision_ID?: string;
    Currency_ID?: string;
    DebitAccount_ID?: string;
    DebitBusOrder_ID?: string;
    DebitBusProject_ID?: string;
    DebitBusTransaction_ID?: string;
    DebitDivision_ID?: string;
    Firm_ID?: string;
    IsRequest?: boolean;
    OrdNumber?: number;
    Period_ID?: string;
    Text?: string;
    Auditable?: boolean;
    GroupFirm_ID?: string;
}

/**
 * Bus order checkpoint
 * @description Interface for Bus order checkpoint
 */
export interface IBusOrderCheckpoint extends IAbraModel {
    CheckDescription?: string;
    CheckDone?: boolean;
    CheckResult?: string;
    Name?: string;
    Parent_ID?: string;
    PlannedCosts?: number;
    PlannedInvoicing?: number;
    PlannedRevenues?: number;
    PointDate$DATE?: string;
    ResponsibleCustomerPerson_ID?: string;
    ResponsibleSupplierRole_ID?: string;
    DoCalculateBilance?: boolean;
}

/**
 * Bus order link
 * @description Interface for Bus order link
 */
export interface IBusOrderLink extends IAbraModel {
    Parent_ID?: string;
    Precedent_ID?: string;
}

/**
 * Bus order
 * @description Interface for Bus order
 */
export interface IBusOrder extends IAbraModel {
    Approved?: boolean;
    CheckActivityVsSources?: number;
    CheckPoints?: IBusOrderCheckpoint[];
    Closed?: boolean;
    ClosingDate$DATE?: string;
    Code?: string;
    Date$DATE?: string;
    Division_ID?: string;
    ExtendedControl?: boolean;
    FinalizationState?: number;
    Firm_ID?: string;
    FixedAmount?: number;
    Hidden?: boolean;
    InvoicingType?: number;
    IssuedOffer_ID?: string;
    Links?: any[];
    MasterSolverRole_ID?: string;
    Name?: string;
    Note?: string;
    Parent_ID?: string;
    PlannedCostsOther?: number;
    PlannedCostsTotal?: number;
    PlannedEndDate$DATE?: string;
    PlannedRevenuesOther?: number;
    PlannedRevenuesTotal?: number;
    Priority?: number;
    ProcessState?: number;
    Source?: any[];
    BodyCode?: string;
    CheckActivityVsSourcesAsText?: string;
    Comment?: string;
    DisplayParent?: string;
    FinalizationStateSub?: number;
    InvoicingTypeAsText?: string;
    PlannedCostsAllTotal?: number;
    PlannedCostsSubTree?: number;
    PlannedProfit?: number;
    PlannedProfitTotal?: number;
    PlannedRevenuesAllTotal?: number;
    PlannedRevenuesSubTree?: number;
    PrefixCode?: string;
    ProcessStateAsText?: string;
    SuffixCode?: string;
}

/**
 * Bus order f real
 * @description Interface for Bus order f real
 */
export interface IBusOrderFReal extends IAbraModel {
    BusObject_ID?: string;
    CalculatedBy_ID?: string;
    CalculatedWhen$DATE?: string;
    EvaluationDate$DATE?: string;
    RealCosts?: number;
    RealCostsFromSources?: number;
    RealCostsFromSourcesWSubTree?: number;
    RealCostsWithSubTree?: number;
    RealRevenues?: number;
    RealRevenuesWithSubTree?: number;
}

/**
 * Bus order invoicing row
 * @description Interface for Bus order invoicing row
 */
export interface IBusOrderInvoicingRow extends IAbraModel {
    Amount?: number;
    DocDate$DATE?: string;
    DocDispName?: string;
    DocType?: string;
    Document_ID?: string;
    Parent_ID?: string;
    Quantity?: number;
    Row_ID?: string;

}

/**
 * Bus order invoicing
 * @description Interface for Bus order invoicing
 */
export interface IBusOrderInvoicing extends IAbraModel {
    AmountCorrection?: number;
    AmountToInvoice?: number;
    BusObject_ID?: string;
    QuantityCorrection?: number;
    QuantityToInvoice?: number;
    Rows?: IBusOrderInvoicingRow[];
    Source_ID?: string;
    StoreCard_ID?: string;
    StoreUnit_ID?: string;
}

/**
 * Bus project accounting plan
 * @description Interface for Bus project accounting plan
 */
export interface IBusProjectAccountingPlan extends IAbraModel {
    AccountCodeMask?: string;
    Description?: string;
    IncludeChildren?: boolean;
    Parent_ID?: string;
    PlannedAmount?: number;
    ActualAmount?: number;
}

/**
 * Bus project check point
 * @description Interface for Bus project check point
 */
export interface IBusProjectCheckPoint extends IAbraModel {
    CheckDescription?: string;
    CheckDone?: boolean;
    CheckResult?: string;
    Name?: string;
    Parent_ID?: string;
    PlannedCosts?: number;
    PlannedInvoicing?: number;
    PlannedRevenues?: number;
    PointDate$DATE?: string;
    ResponsibleCustomerPerson_ID?: string;
    ResponsibleSupplierRole_ID?: string;
    DoCalculateBilance?: boolean;
}

/**
 * Bus project link
 * @description Interface for Bus project link
 */
export interface IBusProjectLink extends IAbraModel {
    Parent_ID?: string;
    Precedent_ID?: string;
}

/**
 * Bus project source
 * @description Interface for Bus project source
 */
export interface IBusProjectSource extends IAbraModel {
    BusOrder_ID?: string;
    BusTransaction_ID?: string;
    CRMActivityArea_ID?: string;
    CRMActivityQueue_ID?: string;
    CRMActivityType_ID?: string;
    CanExceedPlan?: number;
    CostHourRate?: number;
    Description?: string;
    Division_ID?: string;
    Finished?: boolean;
    HourRate?: number;
    Invoicing?: boolean;
    Note?: string;
    OverTimeHourRate?: number;
    Parent_ID?: string;
    PlannedTotalHours?: number;
    PosIndex?: number;
    PriceDefinition1_ID?: string;
    PriceDefinition2_ID?: string;
    RealTotalHours?: number;
    SalePriceType?: number;
    SourceOrder?: number;
    SourceRole_ID?: string;
    StoreCard_ID?: string;
    StoreUnit_ID?: string;
    Store_ID?: string;
    VATRate_ID?: string;
}

/**
 * Bus project
 * @description Interface for Bus project
 */
export interface IBusProject extends IAbraModel {
    AccountingPlan?: IBusProjectAccountingPlan[];
    Approved?: boolean;
    CheckActivityVsSources?: number;
    CheckPoints?: IBusProjectCheckPoint[];
    Closed?: boolean;
    ClosingDate$DATE?: string;
    Code?: string;
    Date$DATE?: string;
    Division_ID?: string;
    ExtendedControl?: boolean;
    FinalizationState?: number;
    Firm_ID?: string;
    FixedAmount?: number;
    Hidden?: boolean;
    InvoicingType?: number;
    IssuedOffer_ID?: string;
    Links?: IBusProjectLink[];
    MasterSolverRole_ID?: string;
    Name?: string;
    Note?: string;
    Parent_ID?: string;
    PlannedCostsOther?: number;
    PlannedCostsTotal?: number;
    PlannedEndDate$DATE?: string;
    PlannedRevenuesOther?: number;
    PlannedRevenuesTotal?: number;
    Priority?: number;
    ProcessState?: number;
    Sources?: IBusProjectSource[];
    BodyCode?: string;
    CheckActivityVsSourcesAsText?: string;
    Comment?: string;
    DisplayParent?: string;
    FinalizationStateSub?: number;
    InvoicingTypeAsText?: string;
    PlannedCostsAllTotal?: number;
    PlannedCostsSubTree?: number;
    PlannedProfit?: number;
    PlannedProfitTotal?: number;
    PlannedRevenuesAllTotal?: number;
    PlannedRevenuesSubTree?: number;
    PrefixCode?: string;
    ProcessStateAsText?: string;
    SuffixCode?: string;
}

/**
 * Bus project f real
 * @description Interface for Bus project f real
 */
export interface IBusProjectFReal extends IAbraModel {
    BusObject_ID?: string;
    CalculatedBy_ID?: string;
    CalculatedWhen$DATE?: string;
    EvaluationDate$DATE?: string;
    RealCosts?: number;
    RealCostsFromSources?: number;
    RealCostsFromSourcesWSubTree?: number;
    RealCostsWithSubTree?: number;
    RealRevenues?: number;
    RealRevenuesWithSubTree?: number;
}

/**
 * Bus project invoicing row
 * @description Interface for Bus project invoicing row
 */
export interface IBusProjectInvoicingRow extends IAbraModel {
    Amount?: number;
    DocDate$DATE?: string;
    DocDispName?: string;
    DocType?: string;
    Document_ID?: string;
    Parent_ID?: string;
    Quantity?: number;
    Row_ID?: string;

}

/**
 * Bus project invoicing
 * @description Interface for Bus project invoicing
 */
export interface IBusProjectInvoicing extends IAbraModel {
    AmountCorrection?: number;
    AmountToInvoice?: number;
    BusObject_ID?: string;
    QuantityCorrection?: number;
    QuantityToInvoice?: number;
    Rows?: IBusProjectInvoicingRow[];
    Source_ID?: string;
    StoreCard_ID?: string;
    StoreUnit_ID?: string;
}

/**
 * Bus transaction check point
 * @description Interface for Bus transaction check point
 */
export interface IBusTransactionCheckPoint extends IAbraModel {
    CheckDescription?: string;
    CheckDone?: boolean;
    CheckResult?: string;
    Name?: string;
    Parent_ID?: string;
    PlannedCosts?: number;
    PlannedInvoicing?: number;
    PlannedRevenues?: number;
    PointDate$DATE?: string;
    ResponsibleCustomerPerson_ID?: string;
    ResponsibleSupplierRole_ID?: string;
    DoCalculateBilance?: boolean;
}

/**
 * Bus transaction link
 * @description Interface for Bus transaction link
 */
export interface IBusTransactionLink extends IAbraModel {
    Parent_ID?: string;
    Precedent_ID?: string;
}

/**
 * Bus transaction source
 * @description Interface for Bus transaction source
 */
export interface IBusTransactionSource extends IAbraModel {
    BusOrder_ID?: string;
    BusProject_ID?: string;
    CRMActivityArea_ID?: string;
    CRMActivityQueue_ID?: string;
    CRMActivityType_ID?: string;
    CanExceedPlan?: number;
    CostHourRate?: number;
    Description?: string;
    Division_ID?: string;
    Finished?: boolean;
    HourRate?: number;
    Invoicing?: boolean;
    Note?: string;
    OverTimeHourRate?: number;
    Parent_ID?: string;
    PlannedTotalHours?: number;
    PosIndex?: number;
    PriceDefinition1_ID?: string;
    PriceDefinition2_ID?: string;
    RealTotalHours?: number;
    SalePriceType?: number;
    SourceOrder?: number;
    SourceRole_ID?: string;
    StoreCard_ID?: string;
    StoreUnit_ID?: string;
    Store_ID?: string;
    VATRate_ID?: string;
}


/**
 * Bus transaction
 * @description Interface for Bus transaction
 */
export interface IBusTransaction extends IAbraModel {
    Approved?: boolean;
    CheckActivityVsSources?: number;
    CheckPoints?: IBusTransactionCheckPoint[];
    Closed?: boolean;
    ClosingDate$DATE?: string;
    Code?: string;
    Date$DATE?: string;
    Division_ID?: string;
    ExtendedControl?: boolean;
    FinalizationState?: number;
    Firm_ID?: string;
    FixedAmount?: number;
    Hidden?: boolean;
    InvoicingType?: number;
    IssuedOffer_ID?: string;
    Links?: IBusTransactionLink[];
    MasterSolverRole_ID?: string;
    Name?: string;
    Note?: string;
    Parent_ID?: string;
    PlannedCostsOther?: number;
    PlannedCostsTotal?: number;
    PlannedEndDate$DATE?: string;
    PlannedRevenuesOther?: number;
    PlannedRevenuesTotal?: number;
    Priority?: number;
    ProcessState?: number;
    Sources?: IBusTransactionSource[];
    BodyCode?: string;
    CheckActivityVsSourcesAsText?: string;
    Comment?: string;
    DisplayParent?: string;
    FinalizationStateSub?: number;
    InvoicingTypeAsText?: string;
    PlannedCostsAllTotal?: number;
    PlannedCostsSubTree?: number;
    PlannedProfit?: number;
    PlannedProfitTotal?: number;
    PlannedRevenuesAllTotal?: number;
    PlannedRevenuesSubTree?: number;
    PrefixCode?: string;
    ProcessStateAsText?: string;
    SuffixCode?: string;
}

/**
 * Bus transaction f real
 * @description Interface for Bus transaction f real
 */
export interface IBusTransactionFReal extends IAbraModel {
    BusObject_ID?: string;
    CalculatedBy_ID?: string;
    CalculatedWhen$DATE?: string;
    EvaluationDate$DATE?: string;
    RealCosts?: number;
    RealCostsFromSources?: number;
    RealCostsFromSourcesWSubTree?: number;
    RealCostsWithSubTree?: number;
    RealRevenues?: number;
    RealRevenuesWithSubTree?: number;
}

/**
 * Bus transaction invoicing row
 * @description Interface for Bus transaction invoicing row
 */
export interface IBusTransactionInvoicingRow extends IAbraModel {
    Amount?: number;
    DocDate$DATE?: string;
    DocDispName?: string;
    DocType?: string;
    Document_ID?: string;
    Parent_ID?: string;
    Quantity?: number;
    Row_ID?: string;
}

/**
 * Bus transaction invoicing
 * @description Interface for Bus transaction invoicing
 */
export interface IBusTransactionInvoicing extends IAbraModel {
    AmountCorrection?: number;
    AmountToInvoice?: number;
    BusObject_ID?: string;
    QuantityCorrection?: number;
    QuantityToInvoice?: number;
    Rows?: IBusTransactionInvoicingRow[];
    Source_ID?: string;
    StoreCard_ID?: string;
    StoreUnit_ID?: string;
}

/**
 * Cash desk row
 * @description Interface for Cash desk row
 */
export interface ICashDeskRow extends IAbraModel {
    Beginning?: number;
    BeginningLocal?: number;
    Parent_ID?: string;
    Period_ID?: string;
}

/**
 * Cash desk
 * @description Interface for Cash desk
 */
export interface ICashDesk extends IAbraModel {
    Account_ID?: string;
    Currency_ID?: string;
    Division_ID?: string;
    ElectronicPayment?: boolean;
    FirstOpenPeriod_ID?: string;
    Fiscal?: boolean;
    FiscalizationPaymentType?: number;
    Hidden?: boolean;
    LastOpenPeriod_ID?: string;
    Name?: string;
    Rows?: ICashDeskRow[];
    BalanceAmount?: number;
    FirstAmount?: number;
    FirstLocalAmount?: number;
    LocalBalanceAmount?: number;
}

/**
 * Cash desk exchange difference
 * @description Interface for Cash desk exchange difference
 */
export interface ICashDeskExchangeDifference extends IAbraModel {
    AccDate$DATE?: string;
    AccDocQueue_ID?: string;
    AccPresetDef_ID?: string;
    Amount?: number;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    CashDesk_ID?: string;
    CorrectedBy_ID?: string;
    CreatedBy_ID?: string;
    CurrRate?: number;
    Division_ID?: string;
    DocDate$DATE?: string;
    DocQueue_ID?: string;
    OrdNumber?: number;
    Period_ID?: string;
    Profit?: boolean;
    RefCurrRate?: number;
    AccountingType?: number;
    Country_ID?: string;
    Currency_ID?: string;
    Dirty?: boolean;
    IsAccounted?: boolean;
    LocalRefCurrency_ID?: string;
    NewRelatedDocument_ID?: string;
    NewRelatedType?: number;
    RefCurrency_ID?: string;
}

/**
 * CD confirm link
 * @description Interface for CD Confirm link
 */
export interface ICdConfirmLink extends IAbraModel {
    Amount?: number;
    RDocumentRow_ID?: string;
    RDocumentType?: string;
    Row_ID?: string;
}

/**
 * Cash paid row
 * @description Interface for Cash paid row
 */
export interface ICashPaidRow extends IAbraModel {
    Account_ID?: string;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    CDConfirmedRows?: ICdConfirmLink[];
    DRCArticle_ID?: string;
    DRCQUnit?: string;
    DRCQuantity?: number;
    Division_ID?: string;
    ExpenseType_ID?: string;
    LocalByHand?: boolean;
    LocalTAmount?: number;
    LocalTAmountWithoutVAT?: number;
    Parent_ID?: string;
    PosIndex?: number;
    TAmount?: number;
    TAmountWithoutVAT?: number;
    Text?: string;
    UsedRatio?: boolean;
    VATIndex_ID?: string;
    VATMode?: number;
    VATRate?: number;
    VATRate_ID?: string;
    CDConfirmedAmount?: number;
    HasAccrual?: boolean;
    LocalVATTAmount?: number;
    VATTAmount?: number;
}

/**
 * Cash paid
 * @description Interface for Cash paid
 */
export interface ICashPaid extends IAbraModel {
    AccDate$DATE?: string;
    AccDocQueue_ID?: string;
    AccPresetDef_ID?: string;
    Amount?: number;
    AmountWithoutVAT?: number;
    CashDesk_ID?: string;
    Coef?: number;
    CorrectedAt$DATE?: string;
    CorrectedBy_ID?: string;
    Country_ID?: string;
    CreatedAt$DATE?: string;
    CreatedBy_ID?: string;
    CreditAmount?: number;
    CreditAmountWithoutVAT?: number;
    CurrRate?: number;
    Currency_ID?: string;
    DataEntryKind?: number;
    Description?: string;
    Dirty?: boolean;
    DocDate$DATE?: string;
    DocQueue_ID?: string;
    DocumentInVATByPaymentMode?: boolean;
    EET?: boolean;
    EETTurnover_ID?: string;
    ElectronicPayTransactionData?: string;
    ElectronicPayment?: boolean;
    ElectronicPaymentAuthCode?: string;
    ElectronicPaymentDescription?: string;
    ElectronicPaymentPaid?: boolean;
    ExternalNumber?: string;
    FirmOffice_ID?: string;
    Firm_ID?: string;
    FiscalizationMode?: number;
    IsFiscalized?: boolean;
    IsReverseChargeDeclared?: boolean;
    LocalAmount?: number;
    LocalAmountWithoutVAT?: number;
    LocalCoef?: number;
    LocalCreditAmount?: number;
    LocalCreditAmountWithoutVAT?: number;
    LocalRoundingAmount?: number;
    LocalZone_ID?: string;
    OrdNumber?: number;
    PAmount?: number;
    PDisKind?: number;
    PDocumentType?: string;
    PDocument_ID?: string;
    Period_ID?: string;
    Person_ID?: string;
    RefCurrRate?: number;
    RoundingAmount?: number;
    Rows?: ICashPaidRow[];
    SimplifiedVATDocument?: boolean;
    TradeType?: number;
    UUID?: string;
    VATAdmitDate$DATE?: string;
    VATByPayment?: boolean;
    VATByPaymentEndDate$DATE?: string;
    VATCountry_ID?: string;
    VATDate$DATE?: string;
    VATDocument?: boolean;
    VATReportPreference?: string;
    VATReportReference?: string;
    VATVoluntaryPaid?: boolean;
    Zone_ID?: string;
    AccountingType?: number;
    CurrRateInfo?: string;
    IsAccounted?: boolean;
    IsAccountedLaterVAT?: boolean;
    LocalRefCurrency_ID?: string;
    LocalVATAmount?: number;
    NewRelatedDocument_ID?: string;
    NewRelatedType?: number;
    RefCurrency_ID?: string;
    TradeTypeDescription?: string;
    VATAmount?: number;
}

/**
 * Cash received row
 * @description Interface for Cash received row
 */
export interface ICashReceivedRow extends IAbraModel {
    Account_ID?: string;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    DRCArticle_ID?: string;
    DRCQUnit?: string;
    DRCQuantity?: number;
    DealerDiscount?: number;
    DealerDiscountExcluded?: boolean;
    DiscountsExcluded?: boolean;
    Division_ID?: string;
    DocumentDiscountExcluded?: boolean;
    ESLDate$DATE?: string;
    ESLIndicator_ID?: string;
    FinancialDiscountExcluded?: boolean;
    IncomeType_ID?: string;
    IndividualDiscountExcluded?: boolean;
    IntrastatAmount?: number;
    IntrastatOutputStatistic_ID?: string;
    IntrastatRegion_ID?: string;
    LocalIntrastatAmount?: number;
    LocalTAmount?: number;
    LocalTAmountWithoutVAT?: number;
    MOSSService_ID?: string;
    OSSSupplyType?: number;
    OriginCountry_ID?: string;
    OriginalUnitPrice?: number;
    Parent_ID?: string;
    PosIndex?: number;
    ProvideRow_ID?: string;
    Provide_ID?: string;
    QUnit?: string;
    Quantity?: number;
    QuantityDiscount?: number;
    QuantityDiscountExcluded?: boolean;
    RCreditAmount?: number;
    RCreditAmountWithoutVAT?: number;
    RowDiscount?: number;
    RowType?: number;
    SplitIntrastat?: boolean;
    StatisticAmount?: number;
    StoreCard_ID?: string;
    Store_ID?: string;
    TAmount?: number;
    TAmountWithoutVAT?: number;
    Text?: string;
    ToESL?: boolean;
    ToIntrastat?: boolean;
    TotalPrice?: number;
    UnitPrice?: number;
    UnitRate?: number;
    VATIndex_ID?: string;
    VATMode?: number;
    VATRate?: number;
    VATRate_ID?: string;
    Capacity?: number;
    CapacityUnit?: number;
    DeliveryMode?: number;
    DeliveryProvideModeStr?: string;
    ESLStatus?: number;
    HasAccrual?: boolean;
    IntrastatStatus?: number;
    IsAnyDiscount?: boolean
    ProvideRowDisplayName?: string;
    RowMargin?: number;
    RowStorePrice?: number;
    TotalDiscountFactor?: number;
    TotalPercentualDiscount?: number;
    UnitQuantity?: number;
    Weight?: number;
    WeightUnit?: number;
}

/**
 * Cash received
 * @description Interface for Cash received
 */
export interface ICashReceived extends IAbraModel {
    AccDate$DATE?: string;
    AccDocQueue_ID?: string;
    AccPresetDef_ID?: string;
    Address_ID?: string;
    Amount?: number;
    AmountWithoutVAT?: number;
    CashDesk_ID?: string;
    Coef?: number;
    CorrectedAt$DATE?: string;
    CorrectedBy_ID?: string;
    Country_ID?: string;
    CreatedAt$DATE?: string;
    CreatedBy_ID?: string;
    CreditAmount?: number;
    CreditAmountWithoutVAT?: number;
    CurrRate?: number;
    Currency_ID?: string;
    DealerCategory_ID?: string;
    DealerDiscount?: number;
    DealerDiscountKind?: number;
    Description?: string;
    Dirty?: boolean;
    DiscountCalcKind?: number;
    DocDate$DATE?: string;
    DocQueue_ID?: string;
    DocumentDiscount?: number;
    EET?: boolean;
    EETTurnover_ID?: string;
    ElectronicPayTransactionData?: string;
    ElectronicPayment?: boolean;
    ElectronicPaymentAuthCode?: string;
    ElectronicPaymentDescription?: string;
    ElectronicPaymentPaid?: boolean;
    ExternalNumber?: string;
    FinancialDiscount?: number;
    FirmOffice_ID?: string;
    Firm_ID?: string;
    FiscalizationMode?: number;
    FrozenDiscounts?: boolean;
    IntrastatCompleteKind?: number;
    IntrastatDeliveryTerm_ID?: string;
    IntrastatTransactionType_ID?: string;
    IntrastatTransportationType_ID?: string;
    IsExternFiscal?: boolean;
    IsFinancialDiscount?: boolean;
    IsFiscalized?: boolean;
    IsReverseChargeDeclared?: boolean;
    IsRowDiscount?: boolean;
    LocalAmount?: number;
    LocalAmountWithoutVAT?: number;
    LocalCoef?: number;
    LocalCreditAmount?: number;
    LocalCreditAmountWithoutVAT?: number;
    LocalRoundingAmount?: number;
    LocalZone_ID?: string;
    MasterDocCLSID?: string;
    MasterDocument_ID?: string;
    OrdNumber?: number;
    PAmount?: number;
    PDisKind?: number;
    PDocumentType?: string;
    PDocument_ID?: string;
    Period_ID?: string;
    Person_ID?: string;
    PricePrecision?: number;
    PricesWithVAT?: boolean;
    QuantityDiscountKind?: number;
    RefCurrRate?: number;
    RoundingAmount?: number;
    Rows?: ICashReceivedRow[];
    SimplifiedVATDocument?: boolean;
    TotalRounding?: number;
    TradeType?: number;
    UUID?: string;
    VATAdmitDate$DATE?: string;
    VATAlgorithm?: number;
    VATByPayment?: boolean;
    VATByPaymentEndDate$DATE?: string;
    VATCountry_ID?: string;
    VATDate$DATE?: string;
    VATDocument?: boolean;
    VATFromAbovePrecision?: number;
    VATFromAboveType?: number;
    VATReportPreference?: string;
    VATReportReference?: string;
    VATRounding?: number;
    VATVoluntaryPaid?: boolean;
    Zone_ID?: string;
    AccountingType?: number;
    Capacity?: number;
    CapacityUnit?: number;
    CurrRateInfo?: string;
    DeliveryMode?: number;
    IsAccounted?: boolean;
    IsAccountedLaterVAT?: boolean;
    LocalRefCurrency_ID?: string;
    LocalVATAmount?: number;
    Margin?: number;
    NewRelatedDocument_ID?: string;
    NewRelatedType?: number;
    ReceiptCardDocQueue_ID?: string;
    RefCurrency_ID?: string;
    StoreDocQueue_ID?: string;
    StorePrice?: number;
    TotalDiscountAmount?: number;
    TradeTypeDescription?: string;
    VATAmount?: number;
    Weight?: number;
    WeightUnit?: number;
}

/**
 * Category item
 * @description Interface for Category item
 */
export interface ICategoryItem extends IAbraModel {
    CategoryItemGroup_ID?: string;
    DataSize?: number;
    DataType?: number;
    DecimalPlaces?: number;
    Expression?: string;
    FieldName?: string;
    Hidden?: boolean;
    ItemType?: number;
    Name?: string;
    SQLQuery?: string;
    UserFieldDef2_ID?: string;
    DataTypeTXT?: string;
    FieldCode?: number;
    FieldHint?: string;
    FieldLabel?: string;
    ItemTypeTXT?: string;
}

/**
 * Category item group
 * @description Interface for Category item group
 */
export interface ICategoryItemGroup extends IAbraModel {
    Condition?: string;
    Name?: string;
}

/**
 * Code structure
 * @description Interface  for Code structure
 */
export interface ICodeStructure extends IAbraModel {
    Code?: string;
    CodeStructure?: string;
    Name?: string;
}

/**
 * Common work position
 * @description Interface for Common work position
 */
export interface ICommonWorkPosition extends IAbraModel {
    Code?: string;
    Hidden?: boolean;
    Name?: string;
    Parent_ID?: string;
}

/**
 * Communication type
 * @description Interface for Communication type
 */
export interface ICommunicationType extends IAbraModel {
    Code?: string;
    FixedType?: number;
    Name?: string;
}

/**
 * Company legal status
 * @description Interface for Company legal status
 */
export interface ICompanyLegalStatus extends IAbraModel {
    Code?: string;
    Name?: string;
}

/**
 * Compensation row
 * @description Interface for Compensation row
 */
export interface ICompensationRow extends IAbraModel {
    AccDate$DATE?: string;
    AccPresetDef_ID?: string;
    Account_ID?: string;
    Amount?: number;
    BusOrder_ID?: string;
    BusProject_ID?: string;
    BusTransaction_ID?: string;
    Coef?: number;
    CorrectionRow?: boolean;
    Credit?: boolean;
    CurrRate?: number;
    Currency_ID?: string;
    Division_ID?: string;
    DocDate$DATE?: string;
    Firm_ID?: string;
    LocalCoef?: number;
    LocalTAmount?: number;
    LocalZone_ID?: string;
    PAmount?: number;
    PDisKind?: number;
    PDocumentSource_ID?: string;
    PDocumentType?: string;
    PDocument_ID?: string;
    Parent_ID?: string;
    PosIndex?: number;
    RefCurrRate?: number;
    TAmount?: number;
    Text?: string;
    VarSymbol?: string;
    Zone_ID?: string;
    LocalRefCurrency_ID?: string;
    RefCurrency_ID?: string;
}

/**
 * Compensation
 * @description Interface for Compensation
 */
export interface ICompensation extends IAbraModel {
    AccDocQueue_ID?: string;
    CorrectedAt$DATE?: string;
    CorrectedBy_ID?: string;
    CreatedAt$DATE?: string;
    CreatedBy_ID?: string;
    CreditAmount?: number;
    Currency_ID?: string;
    DebitAmount?: number;
    Dirty?: boolean;
    DocDate$DATE?: string;
    DocQueue_ID?: string;
    ExternalNumber?: string;
    Firm_ID?: string;
    LocalCreditAmount?: number;
    LocalDebitAmount?: number
    LocalDocCanChangeRate?: boolean;
    OrdNumber?: number;
    Period_ID?: string;
    Rows?: ICompensationRow[];
    NewRelatedDocument_ID?: string;
    NewRelatedType?: number;
}