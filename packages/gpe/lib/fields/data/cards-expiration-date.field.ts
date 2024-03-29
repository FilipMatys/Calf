// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";
import { Strings } from "../../utilities/strings/strings.utility";

/**
 * Card's expiration date field data interface
 * @description Interface for card's expiration date field
 * data interface.
 */
export interface ICardsExpirationDateFieldData {
    year?: number;
    month?: number;
}

/**
 * Card's expiration date field
 * @description Expiration date of a payment card.
 */
export class CardsExpirationDateField extends DataField<ICardsExpirationDateFieldData> {

    // Set identifier
    public static Identifier = "E";

    /**
     * Constructor
     * @param expiration 
     */
    constructor(expiration?: ICardsExpirationDateFieldData) {
        // Call super
        super("Card's expiration date", CardsExpirationDateField.Identifier, FieldFormat.N, { min: 4, max: 4 }, expiration);
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get string values
        const sYear = Strings.padStart(`${this._data.year || 0}`.slice(-2), 2, "0");
        const sMonth = Strings.padStart(`${this._data.month || 0}`.slice(-2), 2, "0");

        // Now create final value
        const value = `${sMonth}${sYear}`;

        // Assign expiration to buffer
        this._buffer = DataArray.fromString(value);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get value
        const value = DataArray.toString(this._buffer);

        // Split value
        const [month, year] = value.match(/.{1,2}/g) as string[];

        // Init data
        this._data = {
            year: 2000 + Number(year),
            month: Number(month)
        };
    }
}