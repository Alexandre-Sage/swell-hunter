type ObjectValue<T> = T[keyof T];
type ObjectKeysToArray<T> = (keyof T)[];
type Id<Type>=Type & { readonly __tag: unique symbol }
export { ObjectKeysToArray, ObjectValue, Id };
