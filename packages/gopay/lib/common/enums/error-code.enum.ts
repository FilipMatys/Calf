/**
 * Error code
 */
export enum ErrorCode {
    // System Error
    SystemError = 100,
    // Compulsory 
    Compulsory = 110,
    // Wrong format
    WrongFormat = 111,
    // Already exists
    AlreadyExists = 112,
    // Cannot be changed
    CanNotChange = 113,
    // Cannot delete
    CanNotDelete = 114,
    // Ambiguous
    Ambiguous = 115,
    // Invalid request
    InvalidRequired = 116,
    // Unauthorized access
    UnauthorizedAccess = 200,
    // The method of assigning rights is not supported
    RightsAssignmentMethodNotSupported = 201,
    // Wrong access data
    WrongAccessData = 202,
    // PIN access has been disabled
    PinAccessDisabled = 203,
    // Unable to create payment
    UnableToCreatePayment = 301,
    // Payment cannot be made
    UnableToProcessPayment = 302,
    // Payment in wrong condition
    InvalidPaymentState = 303,
    // Payment not found
    PaymentNotFound = 304,
    // E-shop has been deactivated
    EShopDeactivated = 305,
    // The payee cannot accept the payment
    PayeeCanNotAcceptPayment = 321,
    // Payment cannot be refunded
    UnableToRefund = 330,
    // Payment cannot be refunded
    UnableToRefund1 = 331,
    // Wrong amount
    InvalidAmount = 332,
    // Lack of money in the account
    InsufficientFunds = 333,
    // Recurring payment failed
    RecurringPaymentFailed = 340,
    // Recurring payment is not supported
    RecurringPaymentNotSupported = 341,
    // Payment recurrence stopped
    RecurringPaymentStopped = 342,
    // Time limit for recurring payments exceeded
    RecurringPaymentTimeout = 343,
    // Payment hold failed
    PaymentFailed = 350,
    // Payment has already been done
    PaymentAlreadyProcessed = 351,
    // Revocation revocation failed
    RevocationOfPreAuthorizationFailed = 352,
    // Pre-authorization canceled
    PreAuthorizationCanceled = 353,
    // The sum of the amounts of the order items does not match the payment amount
    AmountOfItemsDoesNotMatchPaymentAmount = 360,
    // Account not found
    AccountNotFound = 394
}