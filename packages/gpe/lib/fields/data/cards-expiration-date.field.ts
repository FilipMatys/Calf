// Classes
import { DataField } from "../../classes/data-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

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

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Card's expiration date", "E", FieldFormat.N, { min: 4, max: 4 });
    }

    /**
     * Set value
     * @param data 
     */
    public setValue(data: ICardsExpirationDateFieldData): void {
        // Get string values
        const sYear = `${data.year || 0}`.slice(-2).padStart(2, "0");
        const sMonth = `${data.month || 0}`.slice(-2).padStart(2, "0");

        // Now create final value
        const value = `${sMonth}${sYear}`;

        // Validate value
        this.validate(value);

        // Assign expiration to value
        this._value = value;
    }

    /**
     * Get value
     */
    public getValue(): ICardsExpirationDateFieldData {
        // Split value
        const [month, year] = this._value.match(/.{1,2}/g) as string[];

        // Init data
        const data: ICardsExpirationDateFieldData = {
            year: 2000 + Number(year),
            month: Number(month)
        };

        // Return data
        return data;
    }
}