// Enums
import { RecurrenceCycle } from "../enums/recurrence-cycle.enum";

/**
 * Recurrence
 * @description Setting of recurring payment
 */
export interface IRecurrence {

    /**
     * Recurrence cycle
     * @description Time period of recurring
     */
    recurrence_cycle?: RecurrenceCycle;

    /**
     * Recurrence period
     * @description Recurring period of recurring payment
     */
    recurrence_period?: number;

    /**
     * Recurrence date to
     * @description The period of validity recurring payment string yyyy-mm-dd
     */
    recurrence_date_to?: string;

    /**
     * Recurrence state
     * @description Describes state of recurring payment
     */
    recurrence_state?: string;
}