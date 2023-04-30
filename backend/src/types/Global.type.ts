import { httpStatus } from "../modules/httpStatus";
import { Request } from "express";

type ObjectValue<T> = T[keyof T];
type ObjectKeysToArray<T> = (keyof T)[];
type Id<Type> = Type & { readonly __tag: unique symbol };
type HttpStatus = ObjectValue<typeof httpStatus>;
type CamelToSnake<T extends string> =
  T extends `${infer FirstWord}${infer UpperCaseWords}`
    ? `${FirstWord extends Lowercase<FirstWord>
        ? FirstWord
        : `_${Lowercase<FirstWord>}`}${CamelToSnake<UpperCaseWords>}`
    : T;
type ObjectToDbTypeMapper<Object> = {
  [Property in keyof Object as CamelToSnake<
    Property & string
  >]: Object[Property];
};
interface UrlParamType<Param> {
  [x: string]: Param;
}
type RequestWithUrlParams<T extends UrlParamType<unknown>> = Request<
  T,
  unknown,
  never
>;
type RequestWithBody<BodyType> = Request<never, unknown, BodyType>;
export {
  ObjectKeysToArray,
  ObjectValue,
  Id,
  HttpStatus,
  CamelToSnake,
  ObjectToDbTypeMapper,
  RequestWithUrlParams,
  RequestWithBody
};
