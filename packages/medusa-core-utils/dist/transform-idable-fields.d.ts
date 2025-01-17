declare type ComputePropertyNames<T, TKey extends keyof T & string, TFields extends (keyof T | string)[] = (keyof T | string)[]> = TKey extends TFields[number] ? T[TKey] extends string ? `${TKey}_id` : TKey : TKey;
/**
 * Takes an object and a list of fields to tranform in that object. If the field
 * exists on the object and its value is a string it will append `_id` to the
 * field name. This is used when allowing API calls to hold either ID or object
 * values in the payload. The method returns a new object with the
 * transformation.
 * @param obj - the object to transform
 * @param fields - the fields to apply transformation to
 * @returns the transformed object
 *
 * @example
 * ```ts
 * const obj = { test: "test", toto: 1, tata: Symbol("tata") }
 * const out = transformIdableFields(obj, ["test"]) // out: { test_id: string, toto: number, tata: symbol }
 * ```
 */
export declare const transformIdableFields: <T = Record<string, unknown>, TFields extends (string | keyof T)[] = (string | keyof T)[], TOutput = { [P in ComputePropertyNames<T, keyof T & string, TFields>]: P extends keyof T ? T[P] : string; }>(obj: T, fields: TFields) => TOutput;
export {};
