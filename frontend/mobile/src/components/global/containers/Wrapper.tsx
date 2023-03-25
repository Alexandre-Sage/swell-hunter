import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { View } from "react-native";
import { devBorder } from "../styles";

export const Wrapper = (props: ViewProps) => {
  return (
    <View
      {...props}
      style={{
        padding: "2.5px",
      }}
    >
      {props.children}
    </View>
  );
};
