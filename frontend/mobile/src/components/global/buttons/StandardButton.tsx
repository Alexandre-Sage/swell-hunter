import { TouchableOpacity, Text } from "react-native";
import { TouchableOpacityProps } from "react-native/types";
import { InputProps } from "../../../types";
import { Wrapper } from "../containers";
import {
  borderMixin,
  ButtonBorderColor,
  columnFullCenterMixin,
  devBorder,
  TextColor,
} from "../styles";

export interface StandardButtonProps
  extends TouchableOpacityProps,
    InputProps {}

export const StandardButton = ({
  label,
  width,
  height,
  ...props
}: StandardButtonProps) => {
  return (
    <Wrapper>
      <TouchableOpacity 
        {...props}
        style={[
          {
            width: `${width ?? 45}vw`,
            height: `${height ?? 5}vh`,
            ...columnFullCenterMixin,
            ...borderMixin,
            borderColor: ButtonBorderColor,
          },
          props.style,
        ]}
      >
        <Text
          style={{
            color: TextColor,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </Wrapper>
  );
};
