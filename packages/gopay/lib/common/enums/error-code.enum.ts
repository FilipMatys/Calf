/**
 * Error code
 */
export enum ErrorCode {
    // System Error
    _100 = 100,
    // Compulsory 
    _110 = 110,
    // Wrong format
    _111 = 111,
    // Already exists
    _112 = 112,
    // Cannot be changed
    _113 = 113,
    // Cannot delete
    _114 = 114,
    // Ambiguous
    _115 = 115,
    // Invalid request
    _116 = 116,
    // Unauthorized access
    _200 = 200,
    // The method of assigning rights is not supported
    _201 = 201,
    // Wrong access data
    _202 = 202,
    // PIN access has been disabled
    _203 = 203,
    // Unable to create payment
    _301 = 301,
    // Payment cannot be made
    _302 = 302,
    // Payment in wrong condition
    _303 = 303,
    // Payment not found
    _304 = 304,
    // E-shop has been deactivated
    _305 = 305,
    // The payee cannot accept the payment
    _321 = 321,
    // Payment cannot be refunded
    _330 = 330,
    // Payment cannot be refunded
    _331 = 331,
    // Wrong amount
    _332 = 332,
    // Lack of money in the account
    _333 = 333,
    // Recurring payment failed
    _340 = 340,
    // Recurring payment is not supported
    _341 = 341,
    // Payment recurrence stopped
    _342 = 342,
    // Time limit for recurring payments exceeded
    _343 = 343,
    // Payment hold failed
    _350 = 350,
    // Payment has already been canceled
    _351 = 351,
    // Revocation revocation failed
    _352 = 352,
    // Pre-authorization canceled
    _353 = 353,
    // The sum of the amounts of the order items does not match the payment amount
    _360 = 360,
    // Account not found
    _394 = 394
}