// External modules
import { expect } from "chai";

// Library
import { CRC16, DataArray } from "../lib/gpe";

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

});