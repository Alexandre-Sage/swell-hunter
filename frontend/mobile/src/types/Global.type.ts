// import { httpStatus } from "../modules/httpStatus";

import { FlexStyle } from "react-native/types";

type ObjectValue<T> = T[keyof T];
type ObjectKeysToArray<T> = (keyof T)[];
type Id<Type> = Type & { readonly __tag: unique symbol };
// type HttpStatus = ObjectValue<typeof httpStatus>;
type CssWidth = FlexStyle["width"];
type CssHeight = FlexStyle["height"];
type SetState<Type> = React.Dispatch<React.SetStateAction<Type>>;
interface SizeProps {
  width?: FlexStyle["width"];
  height?: FlexStyle["height"];
}
interface InputProps {
  label: string;
  width?: CssWidth;
  height?: CssHeight;
}
export {
  ObjectKeysToArray,
  ObjectValue,
  Id,
  CssHeight,
  CssWidth,
  SizeProps,
  InputProps,
  SetState,
};
