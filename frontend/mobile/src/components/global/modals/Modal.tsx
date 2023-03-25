import React from "react";
import { View, ViewProps, Text, TouchableOpacity } from "react-native";
import { SetState, SizeProps } from "../../../types";
import { Row, Stack } from "../containers";
import {
  borderMixin,
  ButtonBorderColor,
  ModalBackgroundColor,
  TextColor,
} from "../styles";

export interface ModalProps extends ViewProps, SizeProps {
  toggleModal: boolean;
  setToggleModal: <T>(param: T) => void;
}

export const Modal = ({
  height,
  width,
  children,
  style,
  setToggleModal,
  toggleModal,
  ...props
}: ModalProps) => {
  if (!toggleModal) return <React.Fragment></React.Fragment>;
  return (
    <View
      {...props}
      style={[
        {
          width: `${width ?? 75}vw`,
          height: `${height ?? 30}vh`,
          backgroundColor: ModalBackgroundColor,
          ...borderMixin,
          borderColor: ButtonBorderColor,
          position: "absolute",
          zIndex: 999
        },
        style,
      ]}
    >
      <Row
        style={{
          width: "95%"
        }}
      >
        <TouchableOpacity style={{
          marginLeft: "95%"
        }} onPress={setToggleModal}>
          <Text style={{
            color: TextColor,
            fontSize: 20
          }} >X</Text>
        </TouchableOpacity>
      </Row>
      {children}
    </View>
  );
};
