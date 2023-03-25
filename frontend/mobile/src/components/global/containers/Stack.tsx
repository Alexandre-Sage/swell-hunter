import React from "react";
import { FlexStyle, View, ViewProps } from "react-native";
import { columnSpacedAroundMixin, devBorder } from "../styles";

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
          width: `${width ?? 80}vw`,
          height: `${height ?? 25}vh`,
        },
        props.style,
      ]}
    >
      {children}
    </View>
  );
};
