/**
 * Web socket message method
 */
export enum WebSocketMessageMethod {
    GetBill = "getBill",
    GetTableList = "getTableList",
    GetTableContents = "getTableContents",
    PaymentStart = "paymentStart",
    PaymentProcessed = "paymentProcessed",
    PaymentClosed = "paymentClosed",
    GetPayment = "getPayment",
    GetPostponedReceipt = "getPostponedReceipt",
    CancelPayment = "cancelPayment",
    Noop = "noop",
    Error = "error"
}