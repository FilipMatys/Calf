// models
import { IAbraModel } from "./abra.model";

/**
 * Abra help desk user
 * @description interface for abra help desk user
 */
export interface IAbraHelpdeskUser extends IAbraModel {
    email?: string;
    firstname?: string;
    lastname?: string;
    phonenumber?: string;
    reqid?: string;
    requsername?: string;
    secuser_id?: string;
}

/**
 * Accrual row
 * @description interface for accrual
 */
export interface IAccaccrualRow extends IAbraModel {
    accdate$date?: string;
    amount?: number;
    amountincurrency?: number;
    parent_id?: string;

}

/**
 * Accrual
 * @description interface for Accrual
 */
export interface IAccaccrual extends IAbraModel {
    accrualsdatefrom$date?: string;
    accrualsdateto$date?: string;
    periodcount?: number;
    periodtype?: number;
    rows?: IAccaccrualRow[];
    sourcedocaccdate$date?: string;
    sourcedocrow_id?: string;
    sourcedoctype?: string;
    sourcedoc_id?: string;
    sourcedocumentallrows?: boolean;
    totalrowamountincurrency?: number;
    totalrowlocalamount?: number;
    userchange?: boolean;
}

/**
 * dDcument queue period
 * @description interface for document queue period
 */
export interface IAccDocQueuePeriod extends IAbraModel {
    docqueue_id?: string;
    lastnumber?: number;
    period_id?: string;
}

/**
 * Document queue
 * @description Interface for document queue
 */
export interface IAccDocQueue extends IAbraModel {
    accountwhere?: boolean;
    autofillhole?: boolean;
    code?: string;
    documenttype?: string;
    hidden?: boolean;
    lastnumbers?: IAccDocQueuePeriod[];
    name?: string;
    note?: string;
    reverseaccounting?: boolean;
    reversedepositaccounting?: boolean;
    summaryaccounted?: boolean;
}

/**
 * Document queue unused number
 * @description Interface for document queue unused number
 */
export interface IAccDocQueueuUnusedNumber extends IAbraModel {
    correctedat$date?: string;
    createdat$date?: string;
    ordnumber?: number;
    origin?: number;
    parent_id?: string;
    priorityuser_id?: string;
    reserved?: boolean;
}

/**
 * Group
 * @description Interface for group
 */
export interface IAccGroup extends IAbraModel {
    custgroup?: string;
}

/**
 * Account
 * @description Interface for account
 */
export interface IAccount extends IAbraModel {
    accounttype?: string;
    accounttypeindex?: number;
    balanceaccount?: boolean;
    code?: string;
    hidden?: boolean;
    iscostforprojectcontrol?: boolean;
    isincomplete?: boolean;
    isrevenueforprojectcontrol?: boolean;
    name?: string;
    parent2_id?: string;
    parent_id?: string;
    printtoacumulatedstatement?: boolean;
    short?: boolean;
    taxable?: boolean;
    transferable?: boolean;
    typeofactivity?: number;
    vatindex_id?: string;
    accounttypename?: string;
    parentcode?: string;
    parentcode2?: string;
}

/**
 * Account beginning
 * @description Interface for account beginning
 */
export interface IAccountBeginnings extends IAbraModel {
    account_id?: string;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    creditamount?: number;
    debitamount?: number;
    division_id?: string;
    period_id?: string;
}

/**
 * Preset definition
 * @description Interface for preset definition row
 */
export interface IAccPresetDefinitionRow extends IAbraModel {
    condition?: string;
    continueevaluation?: boolean;
    creditaccountexpr?: string;
    creditaccount_id?: string;
    creditbusorderexpr?: string;
    creditbusorder_id?: string;
    creditbusprojectexpr?: string;
    creditbusproject_id?: string;
    creditbustransactionexpr?: string;
    creditbustransaction_id?: string;
    creditdivisionexpr?: string;
    creditdivision_id?: string;
    debitaccountexpr?: string;
    debitaccount_id?: string;
    debitbusorderexpr?: string;
    debitbusorder_id?: string;
    debitbusprojectexpr?: string;
    debitbusproject_id?: string;
    debitbustransactionexpr?: string;
    debitbustransaction_id?: string;
    debitdivisionexpr?: string;
    debitdivision_id?: string;
    exceptable?: boolean;
    expressionrow?: boolean;
    parent_id?: string;
    posindex?: number;
    rowtype?: number;
    textexpr?: string;
}

/**
 * Preset definition split amount row
 * @description Interface for preset definition split amount row
 */
export interface IAccPresetDefinitionSplitAmountRow extends IAbraModel {
    amountexpr?: string;
    condition?: string;
    creditaccountexpr?: string;
    creditaccount_id?: string;
    creditbusorderexpr?: string;
    creditbusorder_id?: string;
    creditbusprojectexpr?: string;
    creditbusproject_id?: string;
    creditbustransactionexpr?: string;
    creditbustransaction_id?: string;
    creditdivisionexpr?: string;
    creditdivision_id?: string;
    debitaccountexpr?: string;
    debitaccount_id?: string;
    debitbusorderexpr?: string;
    debitbusorder_id?: string;
    debitbusprojectexpr?: string;
    debitbusproject_id?: string;
    debitbustransactionexpr?: string;
    debitbustransaction_id?: string;
    debitdivisionexpr?: string;
    debitdivision_id?: string;
    expressionrow?: boolean;
    parent_id?: string;
    posindex?: number;
    rowtype?: number;
    textexpr?: string;
    text2?: string;
}

/**
 * Preset definition
 * @description Interface for preset definition
 */
export interface IAccPresetDefinition extends IAbraModel {
    basic?: boolean;
    code?: string;
    computeddocqueue?: string;
    docqueue_id?: string;
    documenttype?: string;
    hidden?: boolean;
    name?: string;
    rows?: IAccPresetDefinitionRow[];
    splitamountdefs?: IAccPresetDefinitionSplitAmountRow[];
}

/**
 * Price list restriction use
 * @description Interface for price list restriction use
 */
export interface IPricelistRestrictionUse extends IAbraModel {
    firm_id?: string;
    parent_id?: string;
    restrictiontype?: number;
    store_id?: string;
}

/**
 * Price list rounding
 * @description Interface for price list rounding
 */
export interface IPriceListRounding extends IAbraModel {
    amountto?: number;
    constanttoadd?: number;
    currency_id?: string;
    parent_id?: string;
    posindex?: number;
    pricerounding?: number;
    roundingbase?: number;
    roundingtype?: number;
}

/**
 * Action price list
 * @description Interface for action price list
 */
export interface IActionPriceList extends IAbraModel {
    bydateofweek?: boolean;
    bytime?: boolean;
    code?: string;
    creationdate$date?: string;
    datefrom$date?: string;
    dateto$date?: string;
    dealerdiscountexcluded?: boolean;
    documentdiscountexcluded?: boolean;
    financialdiscountexcluded?: boolean;
    friday?: boolean;
    hidden?: boolean;
    individualdiscountexcluded?: boolean;
    managedby_id?: string;
    monday?: boolean;
    name?: string;
    note?: string;
    pricelistroundings?: IPriceListRounding[];
    priority?: number;
    quantitydiscountexcluded?: boolean;
    restrictionuses?: IPricelistRestrictionUse[];
    saturday?: boolean;
    sunday?: boolean;
    thursday?: boolean;
    timefrom?: string;
    timeto?: string;
    tuesday?: boolean;
    wednesday?: boolean;
    comment?: string;
}

/**
 * Action tiered price
 * @description Interface for action tiered price
 */
export interface IActionTieredPrice extends IAbraModel {
    discount?: number;
    firstprice?: boolean;
    parent_id?: string;
    posindex?: number;
    pricefromdiscount?: boolean;
    quantityfrom?: number;
    sellingprice?: number;
}

/**
 * Action store price row
 * @description Interface for action store price row
 */
export interface IActionStorePriceRow extends IAbraModel {
    amount?: number;
    parent_id?: string;
    price_id?: string;
    qunit?: string;
    tieredprice?: boolean;
    tieredprices?: IActionTieredPrice[];
    unitrate?: number;
    overratetieredprices?: boolean;
}

/**
 * Action store price
 * @description Interface for action store price
 */
export interface IActionStorePrice extends IAbraModel {
    pricelist_id?: string;
    storecard_id?: string;
    pricerows?: IActionStorePriceRow[];
}

/**
 * Additional cost
 * @description Interface for additional cost
 */
export interface IAdditionalCost extends IAbraModel {
    customsamount?: number;
    customsislocal?: boolean;
    customstariff?: number;
    intrastataffectkind?: number;
    othercostamount?: number;
    othercostislocal?: boolean;
    othercosttariff?: number;
    othercostused?: boolean;
    spendingtaxamount?: number;
    spendingtaxislocal?: boolean;
    spendingtaxtariff?: number;
    transportationamount?: number;
    transportationislocal?: boolean;
    transportationtariff?: number;
    transportationused?: boolean;
}

/**
 * Address
 * @description Interface for address
 */
export interface IAddress extends IAbraModel {
    city?: string;
    country?: string;
    countrycode?: string;
    databox?: string;
    email?: string;
    faxnumber?: string;
    gps?: string;
    location?: string;
    phonenumber1?: string;
    phonenumber2?: string;
    postcode?: string;
    recipient?: string;
    street?: string;
    zip?: string;
    officialcity?: string;
    officialhousenumber?: string;
    officialstreet?: string;
    shortaddress?: string;
}

/**
 * Auto server queue item recipient
 * @description Interface for queue item recipient
 */
export interface IAutoServerQueueItemRecipient extends IAbraModel {
    email?: string;
    parent_id?: string;
    posindex?: number;
    recipienttype?: number;
    securitygroup_id?: string;
    securityrole_id?: string;
    securityuser_id?: string;
    sentkind?: number;
}

/**
 * Auto server queue item
 * @description Interface for queue item
 */
export interface IAutoServerQueueItem extends IAbraModel {
    correctedby_id?: string;
    createdat$date?: string;
    createdby_id?: string;
    description?: string;
    recipients?: any[];
    runas_id?: string;
    spid?: number;
    scheduleritem_id?: string;
    statekind?: number;
    subject?: string;
    taskclsid?: string;
    taskparameters?: string;
    runaspassword?: string;
    schedulercode?: string;
    schedulername?: string;
    statekindstr?: string;
    taskdisplayname?: string;
}

/**
 * Auto server scheduler item recipient
 * @description Interface auto server scheduler item recipient
 */
export interface IAutoServerSchedulerItemRecipient extends IAbraModel {
    email?: string;
    parent_id?: string;
    posindex?: number;
    recipienttype?: number;
    securitygroup_id?: string;
    securityrole_id?: string;
    securityuser_id?: string;
    sentkind?: number;
}

/**
 * Auto server scheduler item
 * @description Interface auto server scheduler item
 */
export interface IAutoServerScheduleriItem extends IAbraModel {
    code?: string;
    correctedby_id?: string;
    createdby_id?: string;
    description?: string;
    executiondatekind?: number;
    executionlogmaxage?: number;
    isactive?: boolean;
    isactivefortestconnection?: boolean;
    lastscheduleddatetime$date?: string;
    name?: string;
    notificationkind?: number;
    recipients?: IAutoServerSchedulerItemRecipient[];
    repeattodate$date?: string;
    repetitioncount?: number;
    repetitioncounter?: number;
    repetitionday?: number;
    repetitiondaysinweek?: string;
    repetitionkind?: number;
    repetitionmonth?: number;
    repetitionperiodkind?: number;
    repetitiontime$date?: string;
    repetitionweek?: number;
    runas_id?: string;
    runsoonaspossible?: boolean;
    scheduleddatetime$date?: string;
    site?: string;
    startdatetime$date?: string;
    subject?: string;
    taskclsid?: string;
    taskcontext?: string;
    taskparameters?: string;
    weekendcorrectionkind?: number;
    lastscheduleddatetimestr?: string;
    plandescription?: string;
    runaspassword?: string;
    scheduleddatetimestr?: string;
    taskdisplayname?: string;
}

/**
 * Auto server task end log
 * @description Interface for auto server task end log
 */
export interface IAutoServerTaskEndLog extends IAbraModel {
    finishedat$date?: string;
    note?: string;
    resultkind?: number;
    tasklog_id?: string;
    resultkindstr?: string;
}

/**
 * Auto server task log
 * @description Interface for auto server task log
 */
export interface IAutoServerTaskLog extends IAbraModel {
    createdat$date?: string;
    description?: string;
    instanceid?: string;
    queueitem_id?: string;
    spid?: number;
    scheduleritem_id?: string;
    taskclsid?: string;
    taskparameters?: string;
}

/**
 * B2b export
 * @description Interface for b2b export
 */
export interface IB2bExport extends IAbraModel {
    correctedby_id?: string;
    createdby_id?: string;
    data?: string;
    datasource?: string;
    exportid?: string;
    hash?: string;
    isform?: boolean;
    owner_id?: string;
    system?: boolean;
    title?: string;
    visiblefrom$date?: string;
    visibleto$date?: string;
}

/**
 * Balance exchange difference
 * @description Interface for balance exchange difference
 */
export interface IBalancExchangeDifference extends IAbraModel {
    accdate$date?: string;
    accdocqueue_id?: string;
    accpresetdef_id?: string;
    amount?: number;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    correctedby_id?: string;
    createdby_id?: string;
    description?: string;
    division_id?: string;
    docdate$date?: string;
    docqueue_id?: string;
    firmoffice_id?: string;
    firm_id?: string;
    ordnumber?: number;
    original?: boolean;
    pdocumenttype?: string;
    pdocument_id?: string;
    period_id?: string;
    person_id?: string;
    profit?: boolean;
    accountingtype?: number;
    country_id?: string;
    currency_id?: string;
    dirty?: boolean;
    isaccounted?: boolean;
    localrefcurrency_id?: string;
    newrelateddocument_id?: string;
    newrelatedtype?: number;
    refcurrency_id?: string;
}

/**
 * Bank account row
 * @description Interface for bank account row
 */
export interface IBankAccountRow extends IAbraModel {
    beginning?: number;
    beginninglocal?: number;
    parent_id?: string;
    period_id?: string;
}

/**
 * Bank account
 * @description Interface for bank account
 */
export interface IBankAccount extends IAbraModel {
    account_id?: string;
    address_id?: string | IAddress;
    bankaccount?: string;
    bankcountry_id?: string;
    bankstatement_id?: string;
    clientidentificationnumber?: string;
    currency_id?: string;
    division_id?: string;
    firstopenperiod_id?: string;
    hidden?: boolean;
    ibancode?: string;
    lastopenperiod_id?: string;
    name?: string;
    paymentorder_id?: string;
    postalaccountnumber?: string;
    qribancode?: string;
    rows?: IBankAccountRow[];
    specsymbol?: string;
    swiftcode?: string;
    firstamount?: number;
    firstlocalamount?: number;
}

/**
 * Bank account exchange difference
 * @description Interface for bank account exchange difference
 */
export interface IBankAccounteEchangeDifference extends IAbraModel {
    accdate$date?: string;
    accdocqueue_id?: string;
    accpresetdef_id?: string;
    amount?: number;
    bankaccount_id?: string;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    correctedby_id?: string;
    createdby_id?: string;
    currrate?: number;
    division_id?: string;
    docdate$date?: string;
    docqueue_id?: string;
    ordnumber?: number;
    period_id?: string;
    profit?: boolean;
    refcurrrate?: number;
    accountingtype?: number;
    country_id?: string;
    currency_id?: string;
    dirty?: boolean;
    isaccounted?: boolean;
    localrefcurrency_id?: string;
    newrelateddocument_id?: string;
    newrelatedtype?: number;
    refcurrency_id?: string;
}

/**
 * Bank statement row
 * @description Interface for bank statement row
 */
export interface IBankStatementRow extends IAbraModel {
    accdate$date?: string;
    accpresetdef_id?: string;
    account_id?: string;
    amount?: number;
    bankaccount?: string;
    bankstatementrow_id?: string;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    coef?: number;
    credit?: boolean;
    currrate?: number;
    currency_id?: string;
    division_id?: string;
    docdate$date?: string;
    expensetype_id?: string;
    firmtext?: string;
    firm_id?: string;
    incometype_id?: string;
    ismultipaymentrow?: boolean;
    localcoef?: number;
    localtamount?: number;
    localzone_id?: string;
    pamount?: number;
    pdiskind?: number;
    pdocumenttype?: string;
    pdocument_id?: string;
    parent_id?: string;
    posindex?: number;
    refcurrrate?: number;
    specsymbol?: string;
    tamount?: number;
    text?: string;
    varsymbol?: string;
    zone_id?: string;
    localrefcurrency_id?: string;
    refcurrency_id?: string;
}

/**
 * Bank statement
 * @description interface for bank statement
 */
export interface IBankStatement extends IAbraModel {
    accdocqueue_id?: string;
    bankaccount_id?: string;
    correctedat$date?: string;
    correctedby_id?: string;
    createdat$date?: string;
    createdby_id?: string;
    creditamount?: number;
    debitamount?: number;
    dirty?: boolean;
    docdate$date?: string;
    docqueue_id?: string;
    externalnumber?: string;
    localcreditamount?: number;
    localdebitamount?: number;
    ordnumber?: number;
    period_id?: string;
    newrelateddocument_id?: string;
    newrelatedtype?: number;
    rows?: IBankStatementRow[];
}

/**
 * Doc row batch
 * @description Interface for doc row batch
 */
export interface IDocRowBatch extends IAbraModel {
    deliveredquantity?: number;
    parent_id?: string;
    posindex?: number;
    providerowbatch_id?: string;
    qunit?: string;
    quantity?: number;
    storebatch_id?: string;
    unitrate?: number;
    deliveredquantitystr?: string;
    mainunitquantity?: number;
    mainunitrate?: number;
    newbatch?: boolean;
    newbatchcomment?: string;
    newbatchexpirationdate$date?: string;
    newbatchname?: string;
    newbatchspecification?: string;
    storesubbatch_id?: string;
    unitquantity?: number;
}

/**
 * Bill of delivery row
 * @description Interface for bill of delivery row
 */
export interface IBillOfDeliveryRow extends IAbraModel {
    additionalcosts_id?: string;
    batchstatus?: number;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    closingindex?: number;
    closingorder?: number;
    completeprices?: boolean;
    deliveredquantity?: number;
    division_id?: string;
    docrowbatches?: IDocRowBatch[];
    etalonrate?: number;
    flowsign?: number;
    flowtype?: string;
    intrastatamount?: number;
    intrastatcurrency_id?: string;
    intrastatinputstatistic_id?: string;
    intrastatoutputstatistic_id?: string;
    intrastatregion_id?: string;
    intrastattransport?: boolean;
    inventorycoupon?: boolean;
    localintrastatamount?: number;
    localtamount?: number;
    orderflow?: number;
    origincountry_id?: string;
    originalunitprice?: number;
    pmstate_id?: string;
    parent_id?: string;
    posindex?: number;
    pricetransformationcoefficient?: number;
    productiontask_id?: string;
    providerowtype?: string;
    providerow_id?: string;
    provide_id?: string;
    qunit?: string;
    quantity?: number;
    rdocumentrow_id?: string;
    reservedquantity?: number;
    rowextid?: string;
    rowtype?: number;
    sourcepricetranscoef?: number;
    statisticamount?: number;
    storecard_id?: string;
    store_id?: string;
    tamount?: number;
    text?: string;
    tointrastat?: boolean;
    totalprice?: number;
    unitprice?: number;
    unitrate?: number;
    valuated?: boolean;
    valuatedat$date?: string;
    capacity?: number;
    capacityunit?: number;
    deliveredquantitystr?: string;
    intrastatstatus?: number;
    mainunitquantity?: number;
    mainunitrate?: number;
    percentpricetransformationcoef?: number;
    providerowdisplayname?: string;
    unitquantity?: number;
    weight?: number;
    weightunit?: number;
}

/**
 * Bill of delivery
 * @description Interface for bill of delivery
 */
export interface IBillOfDelivery extends IAbraModel {
    accdate$date?: string;
    accdocqueue_id?: string;
    accpresetdef_id?: string;
    address_id?: string;
    autofillrowspricetranscoef?: number;
    coef?: number;
    correctedat$date?: string;
    correctedby_id?: string;
    country_id?: string;
    createdat$date?: string;
    createdby_id?: string;
    currrate?: number;
    currency_id?: string;
    description?: string;
    dirty?: boolean;
    docdate$date?: string;
    docqueue_id?: string;
    docuuid?: string;
    documenttype?: string;
    finished?: boolean;
    finishedat$date?: string;
    finishedby_id?: string;
    firmoffice_id?: string;
    firm_id?: string;
    intrastatcompletekind?: number;
    intrastatdate$date?: string;
    intrastatdeliveryterm_id?: string;
    intrastattransactiontype_id?: string;
    intrastattransportationtype_id?: string;
    invalidaccounting?: boolean;
    isavailablefordelivery?: boolean;
    localcoef?: number;
    localzone_id?: string;
    masterdocclsid?: string;
    masterdocument_id?: string;
    options?: number;
    ordnumber?: number;
    outgoingtransfer_id?: string;
    pmstate_id?: string;
    period_id?: string;
    person_id?: string;
    priceprecision?: number;
    pricetransformationcoefficient?: number;
    rdocumenttype?: string;
    rdocument_id?: string;
    refcurrrate?: number;
    responsiblerole_id?: string;
    responsibleuser_id?: string;
    rows?: IBillOfDeliveryRow[];
    tradetype?: number;
    transportationtype_id?: string;
    vatcountry_id?: string;
    vieskind?: number;
    zone_id?: string;
    accountingtype?: number;
    amount?: number;
    capacity?: number;
    capacityunit?: number;
    checksetbatches?: boolean;
    closed?: boolean;
    closedrowcount?: number;
    currrateinfo?: string;
    isaccounted?: boolean;
    localamount?: number;
    localrefcurrency_id?: string;
    newrelateddocument_id?: string;
    newrelatedtype?: number;
    percentpricetransformationcoef?: number;
    refcurrency_id?: string;
    reversedocumentinfo?: string;
    rowcount?: number;
    vieskindastext?: string;
    weight?: number;
    weightunit?: number;
}

/**
 * Book entry
 * @description Interface for book entry
 */
export interface IBookEntry extends IAbraModel {
    accdate$date?: string;
    accdocqueue_id?: string;
    accgroupcredit_id?: string;
    accgroupdebit_id?: string;
    accgroup_id?: string;
    amount?: number;
    amountincurrency?: number;
    audited?: boolean;
    correctedby_id?: string;
    createdby_id?: string;
    creditaccount_id?: string;
    creditbusorder_id?: string;
    creditbusproject_id?: string;
    creditbustransaction_id?: string;
    creditdivision_id?: string;
    currency_id?: string;
    debitaccount_id?: string;
    debitbusorder_id?: string;
    debitbusproject_id?: string;
    debitbustransaction_id?: string;
    debitdivision_id?: string;
    firm_id?: string;
    isrequest?: boolean;
    ordnumber?: number;
    period_id?: string;
    text?: string;
    auditable?: boolean;
    groupfirm_id?: string;
}

/**
 * Bus order checkpoint
 * @description Interface for bus order checkpoint
 */
export interface IBusOrderCheckpoint extends IAbraModel {
    checkdescription?: string;
    checkdone?: boolean;
    checkresult?: string;
    name?: string;
    parent_id?: string;
    plannedcosts?: number;
    plannedinvoicing?: number;
    plannedrevenues?: number;
    pointdate$date?: string;
    responsiblecustomerperson_id?: string;
    responsiblesupplierrole_id?: string;
    docalculatebilance?: boolean;
}

/**
 * Bus order link
 * @description Interface for bus order link
 */
export interface IBusOrderlink extends IAbraModel {
    parent_id?: string;
    precedent_id?: string;
}

/**
 * Bus order
 * @description Interface for bus order
 */
export interface IBusOrder extends IAbraModel {
    approved?: boolean;
    checkactivityvssources?: number;
    checkpoints?: IBusOrderCheckpoint[];
    closed?: boolean;
    closingdate$date?: string;
    code?: string;
    date$date?: string;
    division_id?: string;
    extendedcontrol?: boolean;
    finalizationstate?: number;
    firm_id?: string;
    fixedamount?: number;
    hidden?: boolean;
    invoicingtype?: number;
    issuedoffer_id?: string;
    links?: any[];
    mastersolverrole_id?: string;
    name?: string;
    note?: string;
    parent_id?: string;
    plannedcostsother?: number;
    plannedcoststotal?: number;
    plannedenddate$date?: string;
    plannedrevenuesother?: number;
    plannedrevenuestotal?: number;
    priority?: number;
    processstate?: number;
    source?: any[];
    bodycode?: string;
    checkactivityvssourcesastext?: string;
    comment?: string;
    displayparent?: string;
    finalizationstatesub?: number;
    invoicingtypeastext?: string;
    plannedcostsalltotal?: number;
    plannedcostssubtree?: number;
    plannedprofit?: number;
    plannedprofittotal?: number;
    plannedrevenuesalltotal?: number;
    plannedrevenuessubtree?: number;
    prefixcode?: string;
    processstateastext?: string;
    suffixcode?: string;
}

/**
 * Bus order f real
 * @description Interface for bus order f real
 */
export interface IBusOrderFReal extends IAbraModel {
    busobject_id?: string;
    calculatedby_id?: string;
    calculatedwhen$date?: string;
    evaluationdate$date?: string;
    realcosts?: number;
    realcostsfromsources?: number;
    realcostsfromsourceswsubtree?: number;
    realcostswithsubtree?: number;
    realrevenues?: number;
    realrevenueswithsubtree?: number;
}

/**
 * Bus order invoicing row
 * @description Interface for bus order invoicing row
 */
export interface IBusOrderInvoicingRow extends IAbraModel {
    amount?: number;
    docdate$date?: string;
    docdispname?: string;
    doctype?: string;
    document_id?: string;
    parent_id?: string;
    quantity?: number;
    row_id?: string;

}

/**
 * Bus order invoicing
 * @description Interface for bus order invoicing
 */
export interface IBusOrderInvoicing extends IAbraModel {
    amountcorrection?: number;
    amounttoinvoice?: number;
    busobject_id?: string;
    quantitycorrection?: number;
    quantitytoinvoice?: number;
    rows?: IBusOrderInvoicingRow[];
    source_id?: string;
    storecard_id?: string;
    storeunit_id?: string;
}

/**
 * Bus project accounting plan
 * @description Interface for bus project accounting plan
 */
export interface IBusProjectAccountingPlan extends IAbraModel {
    accountcodemask?: string;
    description?: string;
    includechildren?: boolean;
    parent_id?: string;
    plannedamount?: number;
    actualamount?: number;
}

/**
 * Bus project check point
 * @description Interface for bus project check point
 */
export interface IBusProjectCheckpoint extends IAbraModel {
    checkdescription?: string;
    checkdone?: boolean;
    checkresult?: string;
    name?: string;
    parent_id?: string;
    plannedcosts?: number;
    plannedinvoicing?: number;
    plannedrevenues?: number;
    pointdate$date?: string;
    responsiblecustomerperson_id?: string;
    responsiblesupplierrole_id?: string;
    docalculatebilance?: boolean;
}

/**
 * Bus project link
 * @description Interface for bus project link
 */
export interface IBusProjectLink extends IAbraModel {
    parent_id?: string;
    precedent_id?: string;
}

/**
 * Bus project source
 * @description Interface for bus project source
 */
export interface IBusProjectSource extends IAbraModel {
    busorder_id?: string;
    bustransaction_id?: string;
    crmactivityarea_id?: string;
    crmactivityqueue_id?: string;
    crmactivitytype_id?: string;
    canexceedplan?: number;
    costhourrate?: number;
    description?: string;
    division_id?: string;
    finished?: boolean;
    hourrate?: number;
    invoicing?: boolean;
    note?: string;
    overtimehourrate?: number;
    parent_id?: string;
    plannedtotalhours?: number;
    posindex?: number;
    pricedefinition1_id?: string;
    pricedefinition2_id?: string;
    realtotalhours?: number;
    salepricetype?: number;
    sourceorder?: number;
    sourcerole_id?: string;
    storecard_id?: string;
    storeunit_id?: string;
    store_id?: string;
    vatrate_id?: string;
}

/**
 * Bus project
 * @description Interface for bus project
 */
export interface ibusproject extends IAbraModel {
    accountingplan?: IBusProjectAccountingPlan[];
    approved?: boolean;
    checkactivityvssources?: number;
    checkpoints?: IBusProjectCheckpoint[];
    closed?: boolean;
    closingdate$date?: string;
    code?: string;
    date$date?: string;
    division_id?: string;
    extendedcontrol?: boolean;
    finalizationstate?: number;
    firm_id?: string;
    fixedamount?: number;
    hidden?: boolean;
    invoicingtype?: number;
    issuedoffer_id?: string;
    links?: IBusProjectLink[];
    mastersolverrole_id?: string;
    name?: string;
    note?: string;
    parent_id?: string;
    plannedcostsother?: number;
    plannedcoststotal?: number;
    plannedenddate$date?: string;
    plannedrevenuesother?: number;
    plannedrevenuestotal?: number;
    priority?: number;
    processstate?: number;
    sources?: IBusProjectSource[];
    bodycode?: string;
    checkactivityvssourcesastext?: string;
    comment?: string;
    displayparent?: string;
    finalizationstatesub?: number;
    invoicingtypeastext?: string;
    plannedcostsalltotal?: number;
    plannedcostssubtree?: number;
    plannedprofit?: number;
    plannedprofittotal?: number;
    plannedrevenuesalltotal?: number;
    plannedrevenuessubtree?: number;
    prefixcode?: string;
    processstateastext?: string;
    suffixcode?: string;
}

/**
 * Bus project f real
 * @description Interface for bus project f real
 */
export interface IBusProjectFReal extends IAbraModel {
    busobject_id?: string;
    calculatedby_id?: string;
    calculatedwhen$date?: string;
    evaluationdate$date?: string;
    realcosts?: number;
    realcostsfromsources?: number;
    realcostsfromsourceswsubtree?: number;
    realcostswithsubtree?: number;
    realrevenues?: number;
    realrevenueswithsubtree?: number;
}

/**
 * Bus project invoicing row
 * @description Interface for bus project invoicing row
 */
export interface IBusProjectInvoicingRow extends IAbraModel {
    amount?: number;
    docdate$date?: string;
    docdispname?: string;
    doctype?: string;
    document_id?: string;
    parent_id?: string;
    quantity?: number;
    row_id?: string;

}

/**
 * Bus project invoicing
 * @description Interface for bus project invoicing
 */
export interface IBusProjectInvoicing extends IAbraModel {
    amountcorrection?: number;
    amounttoinvoice?: number;
    busobject_id?: string;
    quantitycorrection?: number;
    quantitytoinvoice?: number;
    rows?: IBusProjectInvoicingRow[];
    source_id?: string;
    storecard_id?: string;
    storeunit_id?: string;
}

/**
 * Bus transaction check point
 * @description Interface for bus transaction check point
 */
export interface IBusTransactionCheckpoint extends IAbraModel {
    checkdescription?: string;
    checkdone?: boolean;
    checkresult?: string;
    name?: string;
    parent_id?: string;
    plannedcosts?: number;
    plannedinvoicing?: number;
    plannedrevenues?: number;
    pointdate$date?: string;
    responsiblecustomerperson_id?: string;
    responsiblesupplierrole_id?: string;
    docalculatebilance?: boolean;
}

/**
 * Bus transaction link
 * @description Interface for bus transaction link
 */
export interface IBusTransactionLink extends IAbraModel {
    parent_id?: string;
    precedent_id?: string;
}

/**
 * Bus transaction source
 * @description Interface for bus transaction source
 */
export interface IBustransactionsource extends IAbraModel {
    busorder_id?: string;
    busproject_id?: string;
    crmactivityarea_id?: string;
    crmactivityqueue_id?: string;
    crmactivitytype_id?: string;
    canexceedplan?: number;
    costhourrate?: number;
    description?: string;
    division_id?: string;
    finished?: boolean;
    hourrate?: number;
    invoicing?: boolean;
    note?: string;
    overtimehourrate?: number;
    parent_id?: string;
    plannedtotalhours?: number;
    posindex?: number;
    pricedefinition1_id?: string;
    pricedefinition2_id?: string;
    realtotalhours?: number;
    salepricetype?: number;
    sourceorder?: number;
    sourcerole_id?: string;
    storecard_id?: string;
    storeunit_id?: string;
    store_id?: string;
    vatrate_id?: string;
}


/**
 * Bus transaction
 * @description Interface for bus transaction
 */
export interface IBusTransaction extends IAbraModel {
    approved?: boolean;
    checkactivityvssources?: number;
    checkpoints?: IBusTransactionCheckpoint[];
    closed?: boolean;
    closingdate$date?: string;
    code?: string;
    date$date?: string;
    division_id?: string;
    extendedcontrol?: boolean;
    finalizationstate?: number;
    firm_id?: string;
    fixedamount?: number;
    hidden?: boolean;
    invoicingtype?: number;
    issuedoffer_id?: string;
    links?: IBusTransactionLink[];
    mastersolverrole_id?: string;
    name?: string;
    note?: string;
    parent_id?: string;
    plannedcostsother?: number;
    plannedcoststotal?: number;
    plannedenddate$date?: string;
    plannedrevenuesother?: number;
    plannedrevenuestotal?: number;
    priority?: number;
    processstate?: number;
    sources?: IBustransactionsource[];
    bodycode?: string;
    checkactivityvssourcesastext?: string;
    comment?: string;
    displayparent?: string;
    finalizationstatesub?: number;
    invoicingtypeastext?: string;
    plannedcostsalltotal?: number;
    plannedcostssubtree?: number;
    plannedprofit?: number;
    plannedprofittotal?: number;
    plannedrevenuesalltotal?: number;
    plannedrevenuessubtree?: number;
    prefixcode?: string;
    processstateastext?: string;
    suffixcode?: string;
}

/**
 * Bus transaction f real
 * @description Interface for bus transaction f real
 */
export interface IBusTransactionFReal extends IAbraModel {
    busobject_id?: string;
    calculatedby_id?: string;
    calculatedwhen$date?: string;
    evaluationdate$date?: string;
    realcosts?: number;
    realcostsfromsources?: number;
    realcostsfromsourceswsubtree?: number;
    realcostswithsubtree?: number;
    realrevenues?: number;
    realrevenueswithsubtree?: number;
}

/**
 * Bus transaction invoicing row
 * @description Interface for bus transaction invoicing row
 */
export interface IBusTransactionInvoicingRow extends IAbraModel {
    amount?: number;
    docdate$date?: string;
    docdispname?: string;
    doctype?: string;
    document_id?: string;
    parent_id?: string;
    quantity?: number;
    row_id?: string;
}

/**
 * Bus transaction invoicing
 * @description Interface for bus transaction invoicing
 */
export interface IBusTransactionInvoicing extends IAbraModel {
    amountcorrection?: number;
    amounttoinvoice?: number;
    busobject_id?: string;
    quantitycorrection?: number;
    quantitytoinvoice?: number;
    rows?: IBusTransactionInvoicingRow[];
    source_id?: string;
    storecard_id?: string;
    storeunit_id?: string;
}

/**
 * Cash desk row
 * @description Interface for cash desk row
 */
export interface ICashDeskRow extends IAbraModel {
    beginning?: number;
    beginninglocal?: number;
    parent_id?: string;
    period_id?: string;
}

/**
 * Cash desk
 * @description Interface for cash desk
 */
export interface ICashdesk extends IAbraModel {
    account_id?: string;
    currency_id?: string;
    division_id?: string;
    electronicpayment?: boolean;
    firstopenperiod_id?: string;
    fiscal?: boolean;
    fiscalizationpaymenttype?: number;
    hidden?: boolean;
    lastopenperiod_id?: string;
    name?: string;
    rows?: ICashDeskRow[];
    balanceamount?: number;
    firstamount?: number;
    firstlocalamount?: number;
    localbalanceamount?: number;
}

/**
 * Cash desk exchange difference
 * @description Interface for cash desk exchange difference
 */
export interface ICashDeskExchangeDifference extends IAbraModel {
    accdate$date?: string;
    accdocqueue_id?: string;
    accpresetdef_id?: string;
    amount?: number;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    cashdesk_id?: string;
    correctedby_id?: string;
    createdby_id?: string;
    currrate?: number;
    division_id?: string;
    docdate$date?: string;
    docqueue_id?: string;
    ordnumber?: number;
    period_id?: string;
    profit?: boolean;
    refcurrrate?: number;
    accountingtype?: number;
    country_id?: string;
    currency_id?: string;
    dirty?: boolean;
    isaccounted?: boolean;
    localrefcurrency_id?: string;
    newrelateddocument_id?: string;
    newrelatedtype?: number;
    refcurrency_id?: string;
}

/**
 * Cd confirm link
 * @description Interface for cd confirm link
 */
export interface ICdConfirmLink extends IAbraModel {
    amount?: number;
    rdocumentrow_id?: string;
    rdocumenttype?: string;
    row_id?: string;
}

/**
 * Cash paid row
 * @description Interface for cash paid row
 */
export interface ICashPaidRow extends IAbraModel {
    account_id?: string;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    cdconfirmedrows?: ICdConfirmLink[];
    drcarticle_id?: string;
    drcqunit?: string;
    drcquantity?: number;
    division_id?: string;
    expensetype_id?: string;
    localbyhand?: boolean;
    localtamount?: number;
    localtamountwithoutvat?: number;
    parent_id?: string;
    posindex?: number;
    tamount?: number;
    tamountwithoutvat?: number;
    text?: string;
    usedratio?: boolean;
    vatindex_id?: string;
    vatmode?: number;
    vatrate?: number;
    vatrate_id?: string;
    cdconfirmedamount?: number;
    hasaccrual?: boolean;
    localvattamount?: number;
    vattamount?: number;
}

/**
 * Cash paid
 * @description Interface for cash paid
 */
export interface ICashPaid extends IAbraModel {
    accdate$date?: string;
    accdocqueue_id?: string;
    accpresetdef_id?: string;
    amount?: number;
    amountwithoutvat?: number;
    cashdesk_id?: string;
    coef?: number;
    correctedat$date?: string;
    correctedby_id?: string;
    country_id?: string;
    createdat$date?: string;
    createdby_id?: string;
    creditamount?: number;
    creditamountwithoutvat?: number;
    currrate?: number;
    currency_id?: string;
    dataentrykind?: number;
    description?: string;
    dirty?: boolean;
    docdate$date?: string;
    docqueue_id?: string;
    documentinvatbypaymentmode?: boolean;
    eet?: boolean;
    eetturnover_id?: string;
    electronicpaytransactiondata?: string;
    electronicpayment?: boolean;
    electronicpaymentauthcode?: string;
    electronicpaymentdescription?: string;
    electronicpaymentpaid?: boolean;
    externalnumber?: string;
    firmoffice_id?: string;
    firm_id?: string;
    fiscalizationmode?: number;
    isfiscalized?: boolean;
    isreversechargedeclared?: boolean;
    localamount?: number;
    localamountwithoutvat?: number;
    localcoef?: number;
    localcreditamount?: number;
    localcreditamountwithoutvat?: number;
    localroundingamount?: number;
    localzone_id?: string;
    ordnumber?: number;
    pamount?: number;
    pdiskind?: number;
    pdocumenttype?: string;
    pdocument_id?: string;
    period_id?: string;
    person_id?: string;
    refcurrrate?: number;
    roundingamount?: number;
    rows?: ICashPaidRow[];
    simplifiedvatdocument?: boolean;
    tradetype?: number;
    uuid?: string;
    vatadmitdate$date?: string;
    vatbypayment?: boolean;
    vatbypaymentenddate$date?: string;
    vatcountry_id?: string;
    vatdate$date?: string;
    vatdocument?: boolean;
    vatreportpreference?: string;
    vatreportreference?: string;
    vatvoluntarypaid?: boolean;
    zone_id?: string;
    accountingtype?: number;
    currrateinfo?: string;
    isaccounted?: boolean;
    isaccountedlatervat?: boolean;
    localrefcurrency_id?: string;
    localvatamount?: number;
    newrelateddocument_id?: string;
    newrelatedtype?: number;
    refcurrency_id?: string;
    tradetypedescription?: string;
    vatamount?: number;
}

/**
 * Cash received row
 * @description Interface for cash received row
 */
export interface ICashReceivedRow extends IAbraModel {
    account_id?: string;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    drcarticle_id?: string;
    drcqunit?: string;
    drcquantity?: number;
    dealerdiscount?: number;
    dealerdiscountexcluded?: boolean;
    discountsexcluded?: boolean;
    division_id?: string;
    documentdiscountexcluded?: boolean;
    esldate$date?: string;
    eslindicator_id?: string;
    financialdiscountexcluded?: boolean;
    incometype_id?: string;
    individualdiscountexcluded?: boolean;
    intrastatamount?: number;
    intrastatoutputstatistic_id?: string;
    intrastatregion_id?: string;
    localintrastatamount?: number;
    localtamount?: number;
    localtamountwithoutvat?: number;
    mossservice_id?: string;
    osssupplytype?: number;
    origincountry_id?: string;
    originalunitprice?: number;
    parent_id?: string;
    posindex?: number;
    providerow_id?: string;
    provide_id?: string;
    qunit?: string;
    quantity?: number;
    quantitydiscount?: number;
    quantitydiscountexcluded?: boolean;
    rcreditamount?: number;
    rcreditamountwithoutvat?: number;
    rowdiscount?: number;
    rowtype?: number;
    splitintrastat?: boolean;
    statisticamount?: number;
    storecard_id?: string;
    store_id?: string;
    tamount?: number;
    tamountwithoutvat?: number;
    text?: string;
    toesl?: boolean;
    tointrastat?: boolean;
    totalprice?: number;
    unitprice?: number;
    unitrate?: number;
    vatindex_id?: string;
    vatmode?: number;
    vatrate?: number;
    vatrate_id?: string;
    capacity?: number;
    capacityunit?: number;
    deliverymode?: number;
    deliveryprovidemodestr?: string;
    eslstatus?: number;
    hasaccrual?: boolean;
    intrastatstatus?: number;
    isanydiscount?: boolean
    providerowdisplayname?: string;
    rowmargin?: number;
    rowstoreprice?: number;
    totaldiscountfactor?: number;
    totalpercentualdiscount?: number;
    unitquantity?: number;
    weight?: number;
    weightunit?: number;
}

/**
 * Cash received
 * @description Interface for cash received
 */
export interface ICashReceived extends IAbraModel {
    accdate$date?: string;
    accdocqueue_id?: string;
    accpresetdef_id?: string;
    address_id?: string;
    amount?: number;
    amountwithoutvat?: number;
    cashdesk_id?: string;
    coef?: number;
    correctedat$date?: string;
    correctedby_id?: string;
    country_id?: string;
    createdat$date?: string;
    createdby_id?: string;
    creditamount?: number;
    creditamountwithoutvat?: number;
    currrate?: number;
    currency_id?: string;
    dealercategory_id?: string;
    dealerdiscount?: number;
    dealerdiscountkind?: number;
    description?: string;
    dirty?: boolean;
    discountcalckind?: number;
    docdate$date?: string;
    docqueue_id?: string;
    documentdiscount?: number;
    eet?: boolean;
    eetturnover_id?: string;
    electronicpaytransactiondata?: string;
    electronicpayment?: boolean;
    electronicpaymentauthcode?: string;
    electronicpaymentdescription?: string;
    electronicpaymentpaid?: boolean;
    externalnumber?: string;
    financialdiscount?: number;
    firmoffice_id?: string;
    firm_id?: string;
    fiscalizationmode?: number;
    frozendiscounts?: boolean;
    intrastatcompletekind?: number;
    intrastatdeliveryterm_id?: string;
    intrastattransactiontype_id?: string;
    intrastattransportationtype_id?: string;
    isexternfiscal?: boolean;
    isfinancialdiscount?: boolean;
    isfiscalized?: boolean;
    isreversechargedeclared?: boolean;
    isrowdiscount?: boolean;
    localamount?: number;
    localamountwithoutvat?: number;
    localcoef?: number;
    localcreditamount?: number;
    localcreditamountwithoutvat?: number;
    localroundingamount?: number;
    localzone_id?: string;
    masterdocclsid?: string;
    masterdocument_id?: string;
    ordnumber?: number;
    pamount?: number;
    pdiskind?: number;
    pdocumenttype?: string;
    pdocument_id?: string;
    period_id?: string;
    person_id?: string;
    priceprecision?: number;
    priceswithvat?: boolean;
    quantitydiscountkind?: number;
    refcurrrate?: number;
    roundingamount?: number;
    rows?: ICashReceivedRow[];
    simplifiedvatdocument?: boolean;
    totalrounding?: number;
    tradetype?: number;
    uuid?: string;
    vatadmitdate$date?: string;
    vatalgorithm?: number;
    vatbypayment?: boolean;
    vatbypaymentenddate$date?: string;
    vatcountry_id?: string;
    vatdate$date?: string;
    vatdocument?: boolean;
    vatfromaboveprecision?: number;
    vatfromabovetype?: number;
    vatreportpreference?: string;
    vatreportreference?: string;
    vatrounding?: number;
    vatvoluntarypaid?: boolean;
    zone_id?: string;
    accountingtype?: number;
    capacity?: number;
    capacityunit?: number;
    currrateinfo?: string;
    deliverymode?: number;
    isaccounted?: boolean;
    isaccountedlatervat?: boolean;
    localrefcurrency_id?: string;
    localvatamount?: number;
    margin?: number;
    newrelateddocument_id?: string;
    newrelatedtype?: number;
    receiptcarddocqueue_id?: string;
    refcurrency_id?: string;
    storedocqueue_id?: string;
    storeprice?: number;
    totaldiscountamount?: number;
    tradetypedescription?: string;
    vatamount?: number;
    weight?: number;
    weightunit?: number;
}

/**
 * Category item
 * @description Interface for category item
 */
export interface ICategoryItem extends IAbraModel {
    categoryitemgroup_id?: string;
    datasize?: number;
    datatype?: number;
    decimalplaces?: number;
    expression?: string;
    fieldname?: string;
    hidden?: boolean;
    itemtype?: number;
    name?: string;
    sqlquery?: string;
    userfielddef2_id?: string;
    datatypetxt?: string;
    fieldcode?: number;
    fieldhint?: string;
    fieldlabel?: string;
    itemtypetxt?: string;
}

/**
 * Category item group
 * @description Interface for category item group
 */
export interface ICategoryItemGroup extends IAbraModel {
    condition?: string;
    name?: string;
}

/**
 * Code structure
 * @description interface  for code structure
 */
export interface ICodeStructure extends IAbraModel {
    code?: string;
    codestructure?: string;
    name?: string;
}

/**
 * Common work position
 * @description Interface for common work position
 */
export interface ICommonWorkPosition extends IAbraModel {
    code?: string;
    hidden?: boolean;
    name?: string;
    parent_id?: string;
}

/**
 * Communication type
 * @description Interface for communication type
 */
export interface ICommunicationType extends IAbraModel {
    code: number,
    name: string,
    fixedtype: number
}

/**
 * Company legal status
 * @description Interface for company legal status
 */
export interface ICompanyLegalStatus extends IAbraModel {
    code?: string;
    name?: string;
}

/**
 * Compensation row
 * @description Interface for compensation row
 */
export interface ICompensationRow extends IAbraModel {
    accdate$date?: string;
    accpresetdef_id?: string;
    account_id?: string;
    amount?: number;
    busorder_id?: string;
    busproject_id?: string;
    bustransaction_id?: string;
    coef?: number;
    correctionrow?: boolean;
    credit?: boolean;
    currrate?: number;
    currency_id?: string;
    division_id?: string;
    docdate$date?: string;
    firm_id?: string;
    localcoef?: number;
    localtamount?: number;
    localzone_id?: string;
    pamount?: number;
    pdiskind?: number;
    pdocumentsource_id?: string;
    pdocumenttype?: string;
    pdocument_id?: string;
    parent_id?: string;
    posindex?: number;
    refcurrrate?: number;
    tamount?: number;
    text?: string;
    varsymbol?: string;
    zone_id?: string;
    localrefcurrency_id?: string;
    refcurrency_id?: string;
}

/**
 * Compensation
 * @description Interface for compensation
 */
export interface ICompensation extends IAbraModel {
    accdocqueue_id?: string;
    correctedat$date?: string;
    correctedby_id?: string;
    createdat$date?: string;
    createdby_id?: string;
    creditamount?: number;
    currency_id?: string;
    debitamount?: number;
    dirty?: boolean;
    docdate$date?: string;
    docqueue_id?: string;
    externalnumber?: string;
    firm_id?: string;
    localcreditamount?: number;
    localdebitamount?: number
    localdoccanchangerate?: boolean;
    ordnumber?: number;
    period_id?: string;
    rows?: ICompensationRow[];
    newrelateddocument_id?: string;
    newrelatedtype?: number;
}

/**
 * Country row
 * @description Interface for abra country row
 */
export interface ICountryRow extends IAbraModel {
    parent_id?: string,
    dateofchange$date?: string,
    eumember?: boolean
}

/**
 * Country
 * @description Interface for abra country
 */
export interface ICountry extends IAbraModel {
    rows?: ICountryRow[],
    hidden?: boolean,
    code?: string,
    name?: string,
    currency_id?: string,
    numcode?: string,
    alternatecode?: string
}

/**
 * Currency value
 * @description interface for abra currency value
 */
export interface ICurrencyValue extends IAbraModel {
    parent_id?: string,
    nominalvalue?: number,
    description?: string
}

/**
 * Currency row
 * @description Interface for abra currency row
 */
export interface ICurrencyRow extends IAbraModel {
    parent_id?: string,
    dateofchange$date?: string,
    denomination?: boolean,
    currency_id?: string,
    coef?: string
}

/**
 * Currency
 * @description Interface for abra currency
 */
export interface ICurrency {
    id?: string,
    objversion?: 5,
    rows?: ICurrencyRow[],
    hidden?: false,
    code?: string,
    name?: string,
    symbol?: string,
    rounding?: number,
    values?: ICurrencyValue[],
    bankcode?: string,
    docrounding?: number,
    doccashrounding?: number,
    docvatrounding?: number
}

/**
* Employee count category
* @description Interface for abra employee count category
 */
export interface IEmployeeCountCategory extends IAbraModel {
    code?: string,
    name?: string,
    minimum?: number,
    maximum?: number,
    meanvalue?: number
}

/**
 * Financial category
 * @description Interface for abra financial category
 */
export interface IFinancialCategory extends IAbraModel {
    code?: string,
    name?: string,
    minimum?: number,
    maximum?: number,
    meanvalue?: number
}

/**
 * Firm assortment discount
 * @description Interface for abra firm assortment discount
 */
export interface IFirmAssortmentDiscount extends IAbraModel {
    discount?: number,
    parent_id?: string,
    posindex?: number,
    price_id?: string,
    storeassortmentgroup_id?: string
}

/**
 * Firm category metadata
 * @description Interface for abra firm category metadata
 */
export interface IFirmCategoryMetadata extends IAbraModel {
    parent_id?: string,
    categoryitem_id?: string,
    stringvalue?: string,
    categoryupdatemode?: number,
    changedate$date?: Date
}

/**
 * Firm nace
 * @description Interface for abra firm nace
 */
export interface IFirmNace extends IAbraModel {
    parent_id?: string,
    posindex?: number,
    nace_id?: string,
    naceupdatemode?: number,
    changedate$date?: Date
}

/**
 * Firm office
 * @description Interface for abra firm office
 */
export interface IFirmOffice extends IAbraModel {
    address_id?: string | IAddress,
    checkcredit?: boolean,
    credit?: number,
    dealercategory_id?: string,
    electronicaddress_id?: string | IAddress,
    hidden?: boolean,
    id?: string,
    masscorrespondence?: boolean,
    name?: string,
    objversion?: number,
    officeidentnumber?: string,
    officeunique_id?: string,
    parent_id?: string,
    posindex?: number,
    store_id?: string,
    synchronizeaddress?: boolean
}

/**
 * Firm office
 * @description Interface for abra firm office
 */
export interface IFirmPerson extends IAbraModel {
    parent_id?: string,
    posindex?: number,
    firmoffice_id?: string,
    person_id?: string,
    commonworkposition_id?: string,
    note?: string,
    address_id?: string | IAddress;
}

/**
 * Firm office
 * @description Interface for abra firm office
 */
export interface IFirmPicture extends IAbraModel {
    parent_id?: string,
    posindex?: number,
    picture_id?: string
}

/**
 * Firm
 * @description Interface for abra firm
 */
export interface IFirm extends IAbraModel {
    rows?: IBankAccount[],
    hidden?: boolean,
    code?: string,
    name?: string,
    residenceaddress_id?: string | IAddress,
    orgidentnumber?: string,
    vatidentnumber?: string,
    eoriidentnumber?: string,
    firm_id?: string,
    pricelist_id?: string,
    dueterm?: number,
    duetermforpurchase?: number,
    dealercategory_id?: string,
    dealerdiscount?: number,
    note?: string,
    credit?: number,
    checkcredit?: boolean,
    k0?: string,
    k1?: string,
    k2?: string,
    k3?: string,
    k4?: string,
    k5?: string,
    k6?: string,
    k7?: string,
    k8?: string,
    k9?: string,
    k10?: string,
    k11?: string,
    k12?: string,
    k13?: string,
    k14?: string,
    k15?: string,
    wwwaddress?: string,
    penaltypercent?: number,
    firmoffices?: IFirmOffice[],
    firmnaces?: IFirmNace[],
    categoriesmetadata?: IFirmCategoryMetadata[],
    paymenttype_id?: string,
    transportationtype_id?: string,
    currency_id?: string,
    price_id?: string,
    nptitle?: string,
    npresidencepermitnumber?: string,
    npbirthnumber?: string,
    npsurname?: string,
    npforename?: string,
    isregistered?: boolean,
    registerkeptat?: string,
    registerfileref?: string,
    registerdate$date?: string,
    prefilldiscountkind?: boolean,
    dealerdiscountkind?: number,
    quantitydiscountkind?: number,
    communicationtype_id?: string,
    assortmentdiscounts?: IFirmAssortmentDiscount[],
    taxidentnumber?: string,
    pictures?: IFirmPicture[],
    crmmenuitem_id?: string,
    einvoiceformat?: number,
    invoicingdelivery?: number,
    electronicaddress_id?: string | IAddress,
    elecposagreementref?: string,
    importdatafromaresat$date?: string,
    stateconsolidationunit?: boolean,
    legalperson?: boolean,
    vatpayor?: boolean,
    ecdcustomeridtype?: number,
    gdprvaliditysuspended?: boolean,
    debitaccount_id?: string,
    creditaccount_id?: string,
    scontousage?: number,
    scontopaylimit?: number,
    scontopattern_id?: string,
    scontotype_id?: string,
    picture_id?: string,
    store_id?: string,
    vatcountry_id?: string,
    afterdueterm?: number,
    afterduetermenabled?: boolean,
    equitycapital_id?: string,
    turnover_id?: string,
    profit_id?: string,
    employeecount_id?: string,
    legalstatus_id?: string,
    ownershiptype_id?: string,
    commercialsagreement?: number,
    mainnacecode_id?: string,
    firmpersons?: IFirmPerson[],
    createdat$date?: string,
    correctedat$date?: string,
    createdby_id?: string,
    correctedby_id?: string
}

/**
 * Ownership type
 * @description Interface for abra ownership type
 */
export interface IOwnershipType extends IAbraModel {
    code?: number,
    name?: string
}

/**
 * Payment type
 * @description Interface for abra payment type
 */
export interface IPaymentType extends IAbraModel {
    hidden?: boolean,
    code?: string,
    name?: string,
    paymentkind?: number,
    commenttitle?: string,
    commentrequired?: boolean,
    authcoderequired?: boolean,
    summarizedisabled?: boolean,
    printcomment?: boolean,
    maximumgivebackamount?: number,
    analyticalaccount?: string,
    maximumpaymentamount?: number,
    eet?: boolean
}

/**
 * Period
 * @description Interface for abra period
 */
export interface IPeriod extends IAbraModel {
    code?: boolean,
    name?: string,
    datefrom$date?: string,
    dateto$date?: string,
    closing?: boolean,
    beginnings?: boolean,
    sequencenumber?: number
}

/**
 * Picture
 * @description interface for abra picture
 */
export interface IPicture extends IAbraModel {
    blobdata?: string,
    picturetitle?: string,
    externalfile?: boolean,
    pathandfilename?: string,
    refcount?: number,
    isprotected?: boolean,
    class_id?: string
}

/**
 * Price definition
 * @description interface for abra price definition
 */
export interface IPriceDefinition extends IAbraModel {
    hidden?: boolean,
    code?: number,
    name?: string,
    note?: string,
    currency_id?: string,
    pricewithvat?: boolean,
    basic?: boolean
}

/**
 * Price list rounding
 * @description Interface for abra price list rounding
 */
export interface IPricelistRounding extends IAbraModel {
    amountto?: number,
    constanttoadd?: number,
    currency_id?: string,
    parent_id?: string,
    posindex?: number,
    pricerounding?: number
}

/**
 * Price list store price
 * @description Interface for abra price list store price
 */
export interface IPriceListStorePricePrice extends IAbraModel {
    amount?: number,
    parent_id?: string,
    price_id?: string,
    qunit?: string,
    tieredprice?: boolean,
    unitrate?: number
}

/**
 * Price list store price
 * @description Interface for abra price list store price
 */
export interface IPriceListStorePrice extends IAbraModel {
    storecard_id?: string,
    pricerows?: IPriceListStorePricePrice[],
    pricelist_id?: string,
    pricelistvalidity_id?: string,
    deletedfrompricelist?: boolean
}

/**
 * Price list validity
 * @description Interface for abra price list validity
 */
export interface IPriceListValidity extends IAbraModel {
    description?: string,
    parent_id?: string,
    validfromdate$date?: string
}

/**
 * Price list
 * @description Interface for abra price list
 */
export interface IPriceList extends IAbraModel {
    rows?: IPriceListValidity[],
    hidden?: boolean,
    code?: string,
    name?: string,
    note?: string,
    managedby_id?: string,
    creationdate$date?: string,
    dealerdiscountexcluded?: boolean,
    individualdiscountexcluded?: boolean,
    financialdiscountexcluded?: boolean,
    quantitydiscountexcluded?: boolean,
    documentdiscountexcluded?: boolean,
    pricelistroundings?: IPriceListRounding[]
}

/**
 * Security user
 * @description Security user
 */
export interface ISecurityUser extends IAbraModel {
    address_id?: string,
    asktonps?: boolean,
    biaccess?: boolean,
    bi_gid?: string,
    dpbypass?: boolean,
    locked?: boolean,
    loginname?: string,
    name?: string,
    note?: string,
    offertologin?: boolean,
    portalloginname?: string,
    portalsecpassword?: string,
    secpassword?: string,
    sectoken?: string,
    sectokenfastlogin?: boolean,
    shortname?: string,
    webapiaccess?: boolean
}

/**
 * Store
 * @description Store
 */
export interface IStore extends IAbraModel {
    hidden?: false,
    address_id?: string | IAddress,
    name?: string,
    code?: string,
    account_id?: string,
    pricelist_id?: string,
    inventorystate?: number,
    machinename?: string,
    invstartedby_id?: string,
    refundstore_id?: string,
    firstopenperiod_id?: string,
    lastopenperiod_id?: string,
    fifo?: boolean,
    toaccount?: boolean,
    outofstockdelivery?: number,
    outofstockbatchdelivery?: number,
    intrastatinputstatistic_id?: string,
    intrastatoutputstatistic_id?: string,
    intrastatregion_id?: string,
    islogistic?: boolean,
    islogisticfromdate$date?: string,
    registerbusorders?: boolean,
    ignorescoutofstockdelivery?: boolean
}

/**
 * Transportation type
 * @description Transportation type
 */
export interface ITransportationType extends IAbraModel {
    hidden?: boolean,
    code?: string,
    name?: string,
    analyticalaccount?: string
}