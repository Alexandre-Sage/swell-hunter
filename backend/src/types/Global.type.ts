import { httpStatus } from "../modules/httpStatus";

type ObjectValue<T> = T[keyof T];
type ObjectKeysToArray<T> = (keyof T)[];
type Id<Type> = Type & { readonly __tag: unique symbol };
type HttpStatus = ObjectValue<typeof httpStatus>;
export { ObjectKeysToArray, ObjectValue, Id, HttpStatus };
