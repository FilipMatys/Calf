import { Currency, GpWebpay, OperationType } from "../lib/gp-webpay";

import * as fs from 'fs';

describe("GpWebpay", async () => {


    // Get private and public key
    const privateKey = await fs.readFileSync("", { encoding: "utf8" });
    const publicKey = await fs.readFileSync("", { encoding: "utf8" });

    // Init GpWebpay
    await GpWebpay.initialize({
        privateKey: privateKey,
        privateKeyPassword: "",
        publicKey: publicKey,
        host: "",
        merchantNumber: ""
    })

    const cardHolder = {
        // Must be without diacritics
        name: 'Jan Novak',
        email: 'jan@novak.cz',
    }

    const billingDetails = {
        name: 'Jan Novak',
        address1: 'Novákova 25/5',
        city: 'Praha',
        postalCode: '12345',
        country: 203
    }

    const shippingDetails = {
        name: 'Jan Novák',
        address1: 'Novákova 25/5',
        city: 'Praha',
        postalCode: '12345',
        country: 203,
        method: 'courier'
    }

    // Get add info XML
    const addInfo = await GpWebpay.Payment.getAddInfoXML(cardHolder, billingDetails, shippingDetails);

    // Test payment creation
    let result = await GpWebpay.Payment.create({
        operation: OperationType.CREATE_ORDER,
        orderNumber: 20230008,
        amount: 2500,
        currency: Currency.CZK,
        depositFlag: 1,
        addInfo: addInfo,
        url: "http://localhost:4200/api/customer/invoice/payment/gw/gpwebpay/result"
    })

    // console.log(result)


    // Test payment response
    // let response: IPaymentResponse = {
    //     OPERATION: 'CREATE_ORDER',
    //     ORDERNUMBER: 20230008,
    //     PRCODE: '14',
    //     SRCODE: '0',
    //     RESULTTEXT: 'Duplicate order number',
    //     DIGEST: 'Cvc8xaic7zgOvMIdNJAm+DRt8zVIMYp72PicPMqC00I5dtXZzXFQ+ShIrqB1gO82VO+Ly/JvvcVM/Bmlf/QzykyK5yHgDSpJePs1qefFEfzhIRMd94MDKaWpmsddrJmIpsl6yCKX4q++vNaSZ2Oa0mia/FfO8Z9/dA+KH64BQ32tZtm/DcDmICzPKxgS9TOPAAM1YD3MeG8r24qC8+nkFlzNLSy3ZHJfAlzc9vAlBB2A8wgdNzmdA4jtZcLBOK6wlv1bZy2p757YJV9FLBEI6rW1WZzQohbvsE1hWRPJyQeb9Gnn7kVCfo/yIXvxSTQdVNAWRYrsX5MNnKO0b0op1A==',
    //     DIGEST1: 'bS41Vv7ch7hBai3QrGNj4YoCYaQ1o+hSSOMhAliQsIeW+og2mk5XO6l0Y91OXablMmCqdepXxewubo9Xtt5Ld79MmJ2fAQ598krijF8NmPKR45Gr5P3eBRgx7ACKPrHIfJjvcas7q/jop4B0InFUamfzDoTlBXilaIgVXabkbJKMw6MzXL6bQlOIyskDZzbHAc2r+tUwyQGxd3p8zd77sFnmLnFLAImopB64becSfZbGNN0y6zaSOFQGUc8TvaOMHvKttV46CbnuIRifZ0+mzQV19p2xNVpXFm6DYQShMOJhLmhBd/K7btf/08B15rFaJ/o9cuZEN7ZYaDrfMuXZYw=='
    // }

    // const res = await GpWebpay.Payment.validateResponse(response)

    // console.log(res)
});