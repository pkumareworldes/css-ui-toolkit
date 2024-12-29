
export type DynamicNestedObject<T = any> = {
    [key: string]: T | DynamicNestedObject<T> | DynamicNestedObject<T>[];
};






