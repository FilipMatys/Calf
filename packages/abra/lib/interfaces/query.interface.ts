/**
 * Abra query order by item
 * @description Interface for abra query order item
 */
interface IAbraQueryOrderByItem {
    value: string;
    asc?: boolean;
    desc?: boolean;
}

/**
 * Abra query select item
 * @description Interface for abra query order item
 */
interface IAbraQuerySelectItem {
    name: string;
    value: string | Array<string>;
}

/**
 * Abra query
 * @description Interface for abra query
 */
export interface IAbraQuery {

    /**
     * Take
     * @description Maximum number of results
     */
    take?: number;

    /**
     * Skip
     * @description Number of results to skip
     */
    skip?: number;

    /**
     * Select
     * @description Defines which properties to load
     */
    select?: Array<string | IAbraQuerySelectItem>;

    /**
     * Where
     * @description Conditions to limit results
     */
    where?: string | Array<string>;

    /**
     * Group by
     * @description Ability to group results
     */
    groupBy?: Array<string>;

    /**
     * Order by 
     * @description Ability to order results
     */
    orderBy?: IAbraQueryOrderByItem | Array<IAbraQueryOrderByItem>;
}

/**
 * Abra query param
  * @description Interface for abra query param
 */
export interface IAbraQueryParam {
    name: string;
    value: string;
}