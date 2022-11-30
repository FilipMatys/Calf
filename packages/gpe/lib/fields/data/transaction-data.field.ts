// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";
import { Strings } from "../../utilities/strings/strings.utility";

/**
 * Transaction data field data
 * @description Interface for transaction data field.
 */
export interface ITransactionDataFieldData {
    TID?: string;
    PAN?: string;
    sequenceNumber?: string;
    date?: { year: number, month: number, day: number };
}

/**
 * Transaction data field
 * @description Added data needed for transaction.
 */
export class TransactionDataField extends DataField<ITransactionDataFieldData> {

    // Set identifier
    public static Identifier = "d";

    /**
     * Constructor
     * @param data
     */
    constructor(data?: ITransactionDataFieldData) {
        // Call super
        super("Transaction data", TransactionDataField.Identifier, FieldFormat.V, { min: 21, max: 32 }, data);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get date string values
        const sYear = Strings.padStart(`${this._data.date?.year || 0}`.slice(-2), 2, "0");
        const sMonth = Strings.padStart(`${this._data.date?.month || 0}`.slice(-2), 2, "0");
        const sDay = Strings.padStart(`${this._data.date?.day || 0}`.slice(-2), 2, "0");

        // Assign buffer
        this._buffer = DataArray.fromString([
            this._data.TID ? this._data.TID.replace(/ /g, '') : "",
            this._data.PAN ? this._data.PAN.slice(-4) : "",
            this._data.sequenceNumber,
            `${sYear}${sMonth}${sDay}`
        ].join(";"));
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        throw new Error("Method not implemented.");
    }
}