import { View, ViewProps } from "react-native";
import { SizeProps } from "../../../types";
import { devBorder } from "../styles";
import { formatHeigt, formatWidth } from "../../../modules/utils/style";

export interface ColumnGroupProps extends ViewProps, SizeProps {}
export interface ColumnProps extends ViewProps {}

export const ColumnTwo = ({ ...props }: ColumnProps) => (
  <View
    style={{
      width: "50%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {props.children}
  </View>
);

export const ColumnGroup = ({
  width,
  height,
  children,
  ...props
}: ColumnGroupProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        width: formatWidth({
          defaultValue: 50,
          width,
        }),
        height: formatHeigt({
          defaultValue: 25,
          height,
        }),
      }}
    >
      {children}
    </View>
  );
};
