import { ObjectType } from "typescript";
import { Id, ObjectValue } from "./Global.type";

const createTSEnums = <T extends {}>(...args:(keyof T)[]) => {
  const TSenum:T = args.reduce(
    (acc, arg): T => {
      return acc = {
        ...acc,
        [arg]: String(arg),
      };
    },
    { } as T
  );
  console.log({TSenum:TSenum})
  const test = Object.keys(TSenum);
  return {
   [test[0]]: test[0]
  } as const;
};
const test = createTSEnums("HIGH","LOW")
type T=ObjectValue<typeof test>
const tideStatus = {
  LOW: "LOW",
  HIGH: "HIGH",
} as const;

type TideConfigId = Id<string>;
interface TideCongif {}
type TideConfigRow = {};
export { TideConfigId, TideConfigRow, TideCongif };
