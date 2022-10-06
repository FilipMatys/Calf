/**
 * Response code
 */
export enum ResponseCode {
    Accepted = 0,
    AcceptedPartialAmountApproved = 10,

    GeneralProcessingError = 50,
    UnableToConnectWithCentralSystems = 51,
    ResponseFromTheCentralSystemWasNotDelivered = 53,
    DeclinedByChipCardWithoutAuthorization = 55,
    DeclinedByAuthorizationHost = 56,
    TransactionCancelledByTheOperator = 60,
    TransactionCancelledByTheCustomer = 61,
    CustomerRejectedTransactionDueToAmount = 62,
    ProcessingExceededTheDesignatedTimeLimit = 63,
    TransactionWasNotCancelled = 70,
    CurrencyNoSupported = 71,
    NoPaperInTheInternalPrinter = 80,
    ReversalSuccessful = 81,
    ReversalSuccessfulCardRemovedTooSoon = 82,
    TransactionNotSupportedOrNotAllowed = 100,
    InvalidCard = 101,
    ErrorInMessageFormat = 103,
    ErrorInMessageCRC = 106,
    ErrorInMAC = 107,
    TerminalBusy = 108,
    AmountNotAllowed = 110,
    TotalsOnEcrPostNotEqualOnCompleted = 160,
    TotalsOnEcrPostNotEqualOnFinished = 161,

    MandatoryFieldMissingInRequestMessage = 200,
    RepeatLastMessageOriginMessageNotFound = 360,
    InternalApplicationError = 500
}