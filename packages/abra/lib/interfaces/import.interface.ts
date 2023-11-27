/**
 * Abra query
 * @description Interface document import
 */
export interface IDocumentImport {
     input_documents: string | string[],
     output_document?: string,
     input_document_clsid: string,
     output_document_clsid: string,
     input_header?: boolean | string | { id: string, clsid: string },
     params?: any,
     output_document_update?: any,
     output_rows_update?: any
}