import React from "react";
import { FlexStyle, View, ViewProps } from "react-native";
import { columnSpacedAroundMixin, devBorder } from "../styles";
import { formatHeigt, formatWidth } from "../../../modules/utils/style";

export const Stack = ({
  children,
  width,
  height,
  ...props
}: ViewProps & {
  width?: FlexStyle["width"];
  height?: FlexStyle["height"];
}) => {
  return (
    <View
      {...props}
      style={[
        {
          ...columnSpacedAroundMixin,
          width: formatWidth({
            defaultValue: 80,
            width,
          }),
          height: formatHeigt({
            defaultValue: 25,
            height,
          }),
        },
        props.style,
      ]}
    >
      {children}
    </View>
  );
};
