/**
 * Error code
 */
export enum ErrorCode {
    Unknown = null,
    AccessDenied = "ACCESS_DENIED",
    AlreadyAuthorized = "ALREADY_AUTHORIZED",
    BadParameter = "BAD_PARAMETER",
    BadPayload = "BAD_PAYLOAD",
    NoSuchMethod = "NO_SUCH_METHOD",
    NotFound = "NOT_FOUND",
    POSBlocked = "POS_BLOCKED",
    POSUnknown = "POS_UNKNOWN",
    TimeLimitExpired = "TIME_LIMIT_EXPIRED",
    Unauthorized = "UNAUTHORIZED"
}