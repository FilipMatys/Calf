// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

/**
 * Date time field data
 * @description Interface for date time field data
 */
export interface IDateTimeFieldData {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
}

/**
 * Date time field
 * @description Date and Time of transaction.
 */
export class DateTimeField extends HeaderField<IDateTimeFieldData> {

    /**
     * Constructor
     */
    constructor() {
        // Call super
        super("Date Time", FieldFormat.N, { min: 12, max: 12 });
    }

    /**
     * Set value
     * @param data 
     */
    public setValue(data: IDateTimeFieldData): void {
        // Get string values
        const sYear = `${data.year || 0}`.slice(-2).padStart(2, "0");
        const sMonth = `${data.month || 0}`.slice(-2).padStart(2, "0");
        const sDay = `${data.day || 0}`.slice(-2).padStart(2, "0");
        const sHour = `${data.hour || 0}`.slice(-2).padStart(2, "0");
        const sMinute = `${data.minute || 0}`.slice(-2).padStart(2, "0");
        const sSecond = `${data.second || 0}`.slice(-2).padStart(2, "0");

        // Now create final value
        const value = `${sYear}${sMonth}${sDay}${sHour}${sMinute}${sSecond}`;

        // Validate value
        this.validate(value);

        // Assign date and time to value
        this._value = value;
    }

    /**
     * Get value
     * @returns 
     */
    public getValue(): IDateTimeFieldData {
        // Split value
        const [year, month, day, hour, minute, second] = this._value.match(/.{1,2}/g) as string[];

        // Init data
        const data: IDateTimeFieldData = {
            year: 2000 + Number(year),
            month: Number(month),
            day: Number(day),
            hour: Number(hour),
            minute: Number(minute),
            second: Number(second)
        };

        // Return data
        return data;
    }
}