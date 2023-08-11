// External modules
import { expect } from "chai";
import * as Net from "net";
import * as Moment from "moment";

// Library
import { CRC16, DataArray, TCPSocket, SaleOperation, TotalsOperation, ReversalOperation, RepeatLastMessageOperation, CancellationOperation, Message, TransactionType, TransactionTypeField, PaidAmountField, AuthorizationCodeField, ApplicationIDField, CardsExpirationDateField, IndicationOfCardProductField, TransactionIDField, CardNumberField, SequenceNumberField, ResponseCodeField } from "../lib/gpe";


class CustomSocket extends TCPSocket {

    private _socket: Net.Socket;

    constructor() {
        // Call super
        super();

        // Assign socket
        this._socket = new Net.Socket();

        // Set up handlers
        this._socket.on("error", (error) => this._errorSubject.next(error));
        this._socket.on("data", (data) => {
            console.log(`[${Moment().format("HH:mm:ss.SSS")}] ECR: ${DataArray.toReadableString(data)}`);
            this._dataSubject.next(data);
        });
        this._socket.on("close", () => this._closeSubject.next());
    }

    public connect(url: string, port: number): Promise<void> {
        return new Promise<void>((resolve) => this._socket.connect(port, url, () => resolve()));
    }
    public write(data: Uint8Array): void {
        console.log(`[${Moment().format("HH:mm:ss.SSS")}] POS: ${DataArray.toReadableString(data)}`);
        this._socket.write(data);
    }
    public async shutdown(): Promise<void> {
        this._socket.destroy();
    }

}

// describe("CRC-16", () => {

//     describe("#calculate", () => {
//         it("Should calculate CRC-16", () => {
//             // Get data from string
//             const data = DataArray.fromString("123456");

//             // Calculate crc16
//             expect(CRC16.calculate(data)).to.equal(0x20e4);
//         });
//     });
// });

describe("Protocol", () => {
    // Create socket
    const socket = new CustomSocket();

    // Init url and port
    const url: string = "192.168.1.103";
    const port: number = 2050;

    // describe("#message", async () => {
    //     const message = new Message();
    //     message.getHeader().protocolType.setData("B0");
    //     message.getHeader().protocolVersion.setData(1);
    //     message.getHeader().dateTime.setDataFromDate(new Date());
    //     message.getHeader().terminalID.setData("558535  ");

    //     message.appendDataField(new TransactionTypeField(TransactionType.Sale));

    //     const RField = new ResponseCodeField();
    //     RField.setBuffer(DataArray.fromString("000"));
    //     message.appendDataField(RField);

    //     const PField = new CardNumberField();
    //     PField.setBuffer(DataArray.fromString("516891******4112"));
    //     message.appendDataField(PField);

    //     const FField = new AuthorizationCodeField();
    //     FField.setBuffer(DataArray.fromString("091931  "));
    //     message.appendDataField(FField);

    //     const JField = new IndicationOfCardProductField();
    //     JField.setBuffer(DataArray.fromString("MASTERCARD"));
    //     message.appendDataField(JField);
        
    //     const EField = new CardsExpirationDateField();
    //     EField.setBuffer(DataArray.fromString("0226"));
    //     message.appendDataField(EField);

    //     const aField = new ApplicationIDField();
    //     aField.setBuffer(DataArray.fromString("A0000000041010"));
    //     message.appendDataField(aField);

    //     const nField = new TransactionIDField();
    //     nField.setBuffer(DataArray.fromString("230227104858"));
    //     message.appendDataField(nField);

    //     const BField = new PaidAmountField();
    //     BField.setBuffer(DataArray.fromString("600"));
    //     message.appendDataField(BField);

    //     const iField = new SequenceNumberField();
    //     iField.setBuffer(DataArray.fromString("001022005"));
    //     message.appendDataField(iField);

    //     message.finalize();
        
    //     console.log(DataArray.toReadableString(message.toBuffer()));
    // });

    describe("#sale", async () => {
        // Create operation
        const sale = new SaleOperation(socket, url, port);

        try {
            console.log("-- sale with RLM ---");

            // Execute sale
            const response = await sale.execute({ amount: 255.55 });

            console.log(response);

            // // Wait 1 second
            // await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));

            // // Create operation
            // const rlm = new RepeatLastMessageOperation(socket, url, port);

            // // Execute repeat
            // await rlm.execute({});

        }
        catch (e) {
            // Log error
            console.error(e);
        }
    });

    // describe("#cancellation", async () => {
    //     // Create operation
    //     const cancellation = new CancellationOperation(socket, url, port);

    //     try {
    //         // Execute cancelation
    //         const result = await cancellation.execute({
    //             amount: 255.55,
    //             cardNumber: "479608******5607",
    //             date: { year: 2022, month: 11, day: 29 },
    //             sequenceNumber: "001014004",
    //             terminalID: "456026"
    //         });

    //         console.log(result);
    //     }
    //     catch (e) {
    //         // Log error
    //         console.error(e);
    //     }
    // });

    // describe("#reversal", async () => {
    //     // Create operation
    //     const reversal = new ReversalOperation(socket, "192.168.1.102", 2050);

    //     try {
    //         // Execute reversal
    //         const result = await reversal.execute({ amount: 125.58, authorizationCode: "229367" });

    //         console.log(result);
    //     }
    //     catch (e) {
    //         // Log error
    //         console.error(e);
    //     }
    // });

    // describe("#rlm", async () => {
    //      console.log("-- rlm ---");

    //     // Create operation
    //     const rlm = new RepeatLastMessageOperation(socket, url, port);

    //     try {
    //         // Execute repeat
    //         const result = await rlm.execute({});

    //         console.log(result);
    //     }
    //     catch (e) {
    //         // Log error
    //         console.error(e);
    //     }
    // });

    // describe("#totals", async () => {
    //     // Create operation
    //     const totals = new TotalsOperation(socket, url, port);

    //     try {
    //         // Execute totals
    //         const result = await totals.execute();

    //         console.log(result);
    //     }
    //     catch (e) {
    //         // Log error
    //         console.error(e);
    //     }
    // });
});