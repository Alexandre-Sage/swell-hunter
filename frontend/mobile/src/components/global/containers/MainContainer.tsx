import { ReactNode } from "react";
import {
  SafeAreaView,
  SafeAreaViewComponent,
  View,
  ViewProps,
} from "react-native";
import { BackGroundColor, columnFullCenterMixin } from "../styles";

type MainContainerProps = ViewProps;

export const MainContainer = ({ children, ...props }: MainContainerProps) => {
  return (
    <SafeAreaView>
      <View
        {...props}
        style={{
          ...columnFullCenterMixin,
          backgroundColor: BackGroundColor,
          height: "100vh"
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};
