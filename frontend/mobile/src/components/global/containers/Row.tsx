import { View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { SizeProps } from "../../../types";
import { rowFullCenterMixin } from "../styles";

export interface RowProps extends ViewProps, SizeProps {}

export const Row = ({ width, height, children, style, ...props }: RowProps) => {
  return (
    <View
      {...props}
      style={[
        {
          width: `${width ?? 45}vw`,
          height: `${height ?? 5}vh`,
          ...rowFullCenterMixin,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
