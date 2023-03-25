import { View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

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
