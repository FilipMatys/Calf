// Enums
import { ActivityType } from "../enums/activity-type.enum";

// Interfaces
import { IAssociatedStatement } from "./associated-statement.interface";
import { ICommodity } from "./commodity.interface";
import { IOperator } from "./operator.interface";

/**
 * Statement
 * @description Interface for Statement
 */
export interface IStatement {
    internalReferenceNumber?: string;
    operator?: IOperator;
    activityType?: ActivityType;
    countryOfActivity?: string;
    countryOfEntry?: string;
    commodities?: ICommodity[];
    geoLocationConfidential?: boolean;
    associatedStatements?: IAssociatedStatement[];
}