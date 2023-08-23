/**
 * Picture
 * @description Interface for abra Picture
 */
export interface IPicture {
     ID: string,
     ObjVersion: number,
     BlobData: string,
     PictureTitle: string,
     ExternalFile: boolean,
     PathAndFileName: string,
     RefCount: number,
     IsProtected: boolean,
     Class_ID: string
}