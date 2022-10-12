// External modules
import { expect } from "chai";

// Library
import { CRC16, DataArray, Message, PaidAmountField, TransactionType, TransactionTypeField } from "../lib/gpe";

describe("CRC-16", () => {

    describe("#calculate", () => {
        it("Should calculate CRC-16", () => {
            // Get data from string
            const data = DataArray.fromString("123456");

            // Calculate crc16
            expect(CRC16.calculate(data)).to.equal(0x20e4);
        });
    });
});

describe("Protocol", () => {
    describe("#message", () => {
        // Init message
        const message = new Message();

        // Assign header values
        message.header.protocolType.data = "B0";
        message.header.protocolVersion.data = 1;
        message.header.terminalID.data = "S1APDA05";
        message.header.dateTime.data = { year: 2014, month: 5, day: 28, hour: 8, minute: 31, second: 20 };
        message.header.tags.data = {};

        // Finalize
        message.finalize();

        // Convert to buffer
        const buffer = message.toBuffer();

        it("Should create basic message", () => {
            // Check output
            expect(DataArray.toString(buffer)).to.equal("\x02B001S1APDA0514052808312000000000a5a5\x03");
        });
    });

    describe("#sale", () => {
        // Init message
        const message = new Message();

        // Assign header values
        message.header.protocolType.data = "B0";
        message.header.protocolVersion.data = 1;
        message.header.terminalID.data = "S1APDA05";

        // Create new date
        const now = new Date();

        // Assign date time
        message.header.dateTime.data = {
            year: now.getUTCFullYear(),
            month: now.getUTCMonth(),
            day: now.getUTCDate(),
            hour: now.getUTCHours(),
            minute: now.getUTCMinutes(),
            second: now.getUTCSeconds()
        };

        // Assign tags
        message.header.tags.data = {};

        // Add paid amount field
        message.appendData(new PaidAmountField(153.15));
        // Add transaction type
        message.appendData(new TransactionTypeField(TransactionType.Sale));

        // Finalize
        message.finalize();

        // Convert to buffer
        const buffer = message.toBuffer();

        Message.fromBuffer(buffer);
    });
});