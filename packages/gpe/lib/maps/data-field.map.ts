// Classes
import { DataField } from "../classes/data-field.class";

// Fields
import { ApplicationIDField } from "../fields/data/application-id.field";
import { PaidAmountField } from "../fields/data/paid-amount.field";
import { AuthorizationCodeField } from "../fields/data/authorization-code.field";
import { CustomerLanguageField } from "../fields/data/customer-language.field";
import { CountField } from "../fields/data/count.field";
import { TransactionDataField } from "../fields/data/transaction-data.field";
import { TransportDataField } from "../fields/data/transport-data.field";
import { CardsExpirationDateField } from "../fields/data/cards-expiration-date.field";
import { CardPANField } from "../fields/data/card-pan.field";
import { CurrencyField } from "../fields/data/currency.field";
import { IndicationOfCardProductField } from "../fields/data/indication-of-card-product.field";
import { IdOfPrintedInformationField } from "../fields/data/id-of-printed-information.field";
import { SumsOfFinancialTransactionsField } from "../fields/data/sums-of-financial-transactions.field";
import { MultiIDField } from "../fields/data/multi-id.field";
import { ReferenceNumberField } from "../fields/data/reference-number.field";
import { CardNumberField } from "../fields/data/card-number.field";
import { ResponseCodeField } from "../fields/data/response-code.field";
import { InvoiceNumberField } from "../fields/data/invoice-number.field";
import { TransactionTypeField } from "../fields/data/transaction-type.field";
import { CodeOfRegionField } from "../fields/data/code-of-region.field";
import { IdentificationNumbersField } from "../fields/data/identification-numbers.field";
import { CashbackAmountField } from "../fields/data/cashback-amount.field";
import { ReceiptTextField } from "../fields/data/receipt-text.field";
import { CodePageField } from "../fields/data/code-page.field";
import { SequenceNumberField } from "../fields/data/sequence-number.field";
import { TransactionIDField } from "../fields/data/transaction-id.field";
import { ExtraTextField } from "../fields/data/extra-text.field";
import { ClientIDField } from "../fields/data/client-id.field";
import { TipAmountField } from "../fields/data/tip-amount.field";

/**
 * Data field map
 * @description Map of date fields
 */
export const DataFieldMap: { [identifier: string]: new () => DataField<any> } = {
    "A": CustomerLanguageField,
    "B": PaidAmountField,
    "C": CountField,
    "D": TransportDataField,
    "E": CardsExpirationDateField,
    "F": AuthorizationCodeField,
    "H": CardPANField,
    "I": CurrencyField,
    "J": IndicationOfCardProductField,
    "K": IdOfPrintedInformationField,
    "L": SumsOfFinancialTransactionsField,
    "M": MultiIDField,
    "N": ReferenceNumberField,
    "P": CardNumberField,
    "R": ResponseCodeField,
    "S": InvoiceNumberField,
    "T": TransactionTypeField,
    "U": CodeOfRegionField,
    "Z": IdentificationNumbersField,
    "a": ApplicationIDField,
    "b": CashbackAmountField,
    "c": TipAmountField,
    "d": TransactionDataField,
    "f": CodePageField,
    "i": SequenceNumberField,
    "n": TransactionIDField,
    "q": ExtraTextField, 
    "s": ClientIDField,
    "t": ReceiptTextField,
}