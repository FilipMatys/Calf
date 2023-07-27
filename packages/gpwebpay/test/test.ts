import { Currency, GpWebpay, OperationType } from "../lib/gp-webpay";
import { IPaymentPayload } from "../lib/payment/interfaces/payment-payload.interface";
import * as fs from 'fs';

describe("GpWebpay", async () => {


    let request: IPaymentPayload = {
        merchantNumber: "123",
        operation: OperationType.CREATE_ORDER,
        orderNumber: 1,
        amount: 100,
        currency: Currency.CZK,
        depositFlag: 1,
        url: "https://test.3dsecure.gpwebpay.com/pgw/order.do"
    }



    const privateKey = await fs.readFileSync("/Users/jirikratochvil/Documents/Projects/Geph/packages/packages/gpwebpay/test/gpwebpay-pvk.key", { encoding: "utf8" });

    await GpWebpay.initialize({
        privateKey: privateKey,
        privateKeyPassword: "le6WKksoE1rFM1Fe32Bo",
        publicKey: "yzs",
        host: "https://test.3dsecure.gpwebpay.com/pgw/order.do",
        merchantNumber: "8888890552"
    })

    let result = await GpWebpay.Payment.create({
        operation: OperationType.CREATE_ORDER,
        orderNumber: 20230002,
        amount: 2500,
        currency: Currency.CZK,
        depositFlag: 1,
        url: "https://waldera.geph.cz/objednavka/platebni-brana"
    })

    console.log(result)

});