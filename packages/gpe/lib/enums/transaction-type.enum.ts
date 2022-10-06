/**
 * Transaction type
 */
export enum TransactionType {
    Sale = 0,
    PreAuthorization = 1,
    PreAuthorizationCompletion = 2,
    Refund = 4,
    QuasiCash = 5,
    TipAddition = 6,
    IncrementalPreAuthorization = 7,
    GamblingWinnings = 9,
    Reversal = 10,
    OfflineUpload = 11,
    AbortTransaction = 12,
    HostHandshake = 13,
    TMSConnect = 14,
    Token = 15,
    PostDataPrinting = 16,
    RepeatLastTransaction = 17,
    VariableFare = 18,
    VFAdvice = 19,
    LastTMSConnect = 20,
    TransactionCancellationEM = 21,
    PreAuthorizationCompletionEM = 22,
    Init = 23,
    MultiIDSynchronization = 28,
    GetUID = 29,
    CashLinkCompletion = 32,
    UpdateDenyList = 50,
    CloseTotals = 60,
    SubTotal = 65
}