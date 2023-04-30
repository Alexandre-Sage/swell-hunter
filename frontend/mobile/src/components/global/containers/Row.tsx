import { View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { SizeProps } from "../../../types";
import { rowFullCenterMixin } from "../styles";
import { formatHeigt, formatWidth } from "../../../modules/utils/style";

export interface RowProps extends ViewProps, SizeProps {}

export const Row = ({ width, height, children, style, ...props }: RowProps) => {
  return (
    <View
      {...props}
      style={[
        {
          width: formatWidth({ defaultValue: 45, width }),
          height: formatHeigt({
            defaultValue: 5,
            height,
          }),
          ...rowFullCenterMixin,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
