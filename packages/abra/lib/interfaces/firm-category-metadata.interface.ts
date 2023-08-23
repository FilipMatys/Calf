/**
 * Firm category metadata
 * @description Interface for abra firm category metadata
 */
export interface IFirmCategoryMetadata {
     ID: string,
     ObjVersion: number,
     Parent_ID: string,
     CategoryItem_ID: string,
     StringValue: string,
     CategoryUpdateMode: number,
     ChangeDate$DATE: Date
}