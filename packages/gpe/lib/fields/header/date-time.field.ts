// Classes
import { HeaderField } from "../../classes/header-field.class";

// Enums
import { FieldFormat } from "../../enums/field-format.enum";

// Utilities
import { DataArray } from "../../utilities/data-array/data-array.utility";
import { Strings } from "../../utilities/strings/strings.utility";

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
     * Is equal
     * @param value 
     */
    public isEqual(value: IDateTimeFieldData): boolean {
        return !!value && !!this._data
            && value.year === this._data.year
            && value.month === this._data.month
            && value.day === this._data.day
            && value.hour === this._data.hour
            && value.minute === this._data.minute
            && value.second === this._data.second;
    }

    /**
     * Set data from date
     * @param date 
     */
    public setDataFromDate(date: Date): void {
        // Assign date time
        this.setData({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        });
    }

    /**
     * Update buffer from data
     */
    protected updateBufferFromData(): void {
        // Get string values
        const sYear = Strings.padStart(`${this._data.year || 0}`.slice(-2), 2, "0");
        const sMonth = Strings.padStart(`${this._data.month || 0}`.slice(-2), 2, "0");
        const sDay = Strings.padStart(`${this._data.day || 0}`.slice(-2), 2, "0");
        const sHour = Strings.padStart(`${this._data.hour || 0}`.slice(-2), 2, "0");
        const sMinute = Strings.padStart(`${this._data.minute || 0}`.slice(-2), 2, "0");
        const sSecond = Strings.padStart(`${this._data.second || 0}`.slice(-2), 2, "0");

        // Now create final value
        const value = `${sYear}${sMonth}${sDay}${sHour}${sMinute}${sSecond}`;

        // And assign the value to buffer
        this._buffer = DataArray.fromString(value);
    }

    /**
     * Update data from buffer
     */
    protected updateDataFromBuffer(): void {
        // Get string value of the buffer
        const value = DataArray.toString(this._buffer);

        // Split value into segments
        const [year, month, day, hour, minute, second] = value.match(/.{1,2}/g) as string[];

        // Assign data
        this._data = {
            year: 2000 + Number(year),
            month: Number(month),
            day: Number(day),
            hour: Number(hour),
            minute: Number(minute),
            second: Number(second)
        };
    }
}