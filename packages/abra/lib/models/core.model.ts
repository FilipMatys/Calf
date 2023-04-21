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