/**
 * Serializable class
 * @description Contains object identifier and timestamp
 */
export class Serializable {
    _id?: any;
    createdAt?: Date;
    updatedAt?: Date;
    isArchived?: boolean;
    archivedAt?: Date;
}