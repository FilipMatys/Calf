import { Currency } from "../lib/common/enums/currency.enum";
import { PaymentInstrument } from "../lib/common/enums/payment-instrument.enum";
import { Scope } from "../lib/common/enums/scope.enum";
import { GoPay } from "../lib/gopay";

describe("GoPay", async () => {

    // Initialize GoPay client
    GoPay.initialize({ host: "https://gw.sandbox.gopay.com/api", clientId: "1684674211", clientSecret: "3uH4twyc" });

    // Get token
    const tResponse = await GoPay.Authentication.token({ grant_type: "client_credentials", scope: Scope.PAYMENT_ALL });
    
    // Set token
    GoPay.setToken(tResponse.access_token);

    // Create payment
    const pResponse = await GoPay.Payment.create({
        amount: -50,
        payer: {
            default_payment_instrument: PaymentInstrument.PAYMENT_CARD,
            allowed_payment_instruments: [PaymentInstrument.PAYMENT_CARD, PaymentInstrument.BANK_ACCOUNT],
            contact: {
                first_name: "Filip",
                last_name: "Matys",
                email: "matysfilip@geph.cz"
            }
        },
        order_number: "01",
        items: [],
        target: {
            goid: 8470802549,
            type: "ACCOUNT"
        },
        currency: Currency.CZK,
        callback: {
            return_url: "http://localhost/return",
            notification_url: "http://localhost/notification"
        }
    });
});