/**
 * Common
 * @description Namespace for Common
 */
export namespace Common {

    /**
     * Enums
     * @description Namespace for Enums
     */
    export namespace Enums {

        /**
         * Result
         * @description Enum for Result
         */
        export enum Result {
            Success = "Success",
            Failure = "Failure"
        }

        /**
         * Error condition
         * @description Enum for Error condition
         */
        export enum ErrorCondition {
            Refusal = "Refusal"
        }

        /**
         * Message category
         * @description Enum for Message category
         */
        export enum MessageCategory {
            Payment = "Payment",
            Abort = "Abort",
            Reversal = "Reversal",
            TransactionStatus = "TransactionStatus",
            Reconciliation = "Reconciliation",
            Diagnosis = "Diagnosis",
            TransactionReport = "TransactionReport"
        }

        /**
         * Message class
         * @description Enum for Message class
         */
        export enum MessageClass {
            Service = "Service"
        }

        /**
         * Message type
         * @description Enum for Message type
         */
        export enum MessageType {
            Request = "Request"
        }

        /**
         * Result code
         * @description Enum for Result code
         */
        export enum ResultCode {
            Undefined = -1,
            Ok = 0,
            Unauthorized = 100,
            InvalidContentType = 101,
            InvalidJson = 102,
            EmptyBody = 103,
            UnknownRequest = 104,
            MandatoryDataMissing = 105,
            AnotherRequestBeingProcessed = 106,
            HttpMethodNotAllowed = 107,
            RequestTypeNotAllowed = 108,
            WrongTID = 109,
            CurrencyNotAllowed = 110,
            InvalidAmount = 111,
            Timeout = 200,
            NotFound = 201,
            NoReversibleTransactionFound = 202,
            TransactionIsNotReversible = 203,
            CanceledByUser = 204,
            CardReadError = 205,
            Aborted = 206,
            CardReadTimeout = 207,
            NoConnection = 208,
            NotAbortable = 209,
            PinTimeout = 210,
            PinError = 211,
            PinKeyNotSynchronized = 212,
            HostRefusedGeneric = 300,
            WrongPin = 301,
            EmptyHostResponse = 302,
            TechnicalReversal = 303,
            PaymentSwitchCommunicationError = 304,
            PlaceCall = 305,
            SignatureNotVerified = 306,
            CallSupport = 307,
            EmvDeclined = 308,
            SettlementError = 309
        }   
    }

    /**
     * Interfaces
     * @description Namespace for Interfaces
     */
    export namespace Interfaces {

        /**
         * Message header
         * @description Interface for Message header
         */
        export interface IMessageHeader {
            MessageCategory?: Enums.MessageCategory;
            MessageClass?: Enums.MessageClass;
            MessageType?: Enums.MessageType;
            POIID?: string;
            ProtocolVersion?: string;
            SaleID?: string;
            ServiceID?: string;
        }

        /**
         * Sale to POI request
         * @description Interface for Sale to POI request
         */
        export interface ISaleToPOIRequest {
            MessageHeader?: IMessageHeader;
        }

        /**
         * Sale to POI response
         * @description Interface for Sale to POI response
         */
        export interface ISaleToPOIResponse {
            MessageHeader?: IMessageHeader;
        }

        /**
         * Message request 
         * @description Interface for Message request
         */
        export interface IMessageRequest<TRequest extends ISaleToPOIRequest> {
            SaleToPOIRequest?: TRequest;
        }

        /**
         * Message response 
         * @description Interface for Message response
         */
        export interface IMessageResponse<TResponse extends ISaleToPOIResponse> {
            ResultCode?: Enums.ResultCode;
            SaleToPOIResponse?: TResponse;
        }

        /**
         * Response
         * @description Interface for Response
         */
        export interface IResponse {
            Result?: Enums.Result;
            ErrorCondition?: Enums.ErrorCondition;
        }

        /**
         * POI data
         * @description Interface for POI data
         */
        export interface IPOIData {
            POITransactionID?: ITransactionID;
        }

        /**
         * Transaction id
         * @description Interface for Transaction id
         */
        export interface ITransactionID {
            TimeStamp?: string;
            TransactionID?: string;
        }

        /**
         * Payment instrument data
         * @description Interface for Payment instrument data
         */
        export interface IPaymentInstrumentData {
            CardData?: ICardData;
        }

        /**
         * Card data
         * @description Interface for Card data
         */
        export interface ICardData {
            MaskedPan?: string;
        }

        /**
        * Proprietary tags
        * @description Interface for Proprietary tags
        */
        export interface IProprietaryTags {
            Aid?: string;
            ApplicationName?: string;
            AuthorizationCode?: string;
            Brand?: string;
            CardExpiration?: string;
            CardPresentationMethod?: string;
            ReceiptDate?: string;
            AskForTip?: boolean;
            VariableSymbol?: string;
            SequenceNumber?: string;
            SignatureRequired?: boolean;
            CustomIdentifier?: string;
            AskForVariableSymbol?: boolean;
            ECRPrint?: boolean;
            TerminalId?: string;
            RequireTipConfirmation?: boolean;
            EnterTipAsTargetAmount?: boolean;
            ForceCustomTip?: boolean;
            VerifiedByDevice?: boolean;
            Note?: string;
        }

        /**
         * Message reference
         * @description Interface for Message reference
         */
        export interface IMessageReference {
            MessageCategory?: Enums.MessageCategory;
            SaleID?: string;
            ServiceID?: string;
            POIID?: string;
        }

        /**
         * Terminal
         * @description Interface for Terminal
         */
        export interface IPOITerminal {
            POIID?: string;
            BusinessId?: string;
            MerchantName?: string;
            Currency?: string;
            SmartTipsAvailable?: boolean;
            AdditionalData?: IPOITerminalAdditionalData;
        }

        /**
         * Terminal additional data
         * @description Interface for Terminal additional data
         */
        export interface IPOITerminalAdditionalData {
            BranchId?: string;
            CustomIdentifierCaption?: string;
            CustomIdentifierForbiddenCharacters?: string;
            DisplayName?: string;
            MerchantId?: string;
            ParserVariableSymbolFromCustomIdentifier?: boolean;
            QrPaymentEnabled?: boolean;
            VariableSymbolAllowed?: boolean;
        }
    }
}