/**
 * Custom validation fn
 * @description Interface for Custom validation function
 */
export interface ICustomValidationFn<TData> {
    (data: TData): boolean;
}