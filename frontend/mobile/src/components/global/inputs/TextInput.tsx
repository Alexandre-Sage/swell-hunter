import {
  Text,
  TextInput as RNTxtInput,
  TextInputProps as RNTxtInputProps
} from "react-native";
import { CssHeight, CssWidth } from "../../../types";
import { Wrapper } from "../containers";
import { borderMixin, TextColor } from "../styles";

export type TextInputProps = RNTxtInputProps & {
  label: string;
  width?: CssWidth;
  height?: CssHeight;
};

export const TextInput = ({
  label,
  width,
  height,
  ...props
}: TextInputProps) => {
  return (
    <Wrapper>
      <Text
        style={{
          color: TextColor,
          marginBottom: 4,
        }}
      >
        {label}
      </Text>
      <RNTxtInput
        {...props}
        style={{
          color: TextColor,
          width: `${width ?? 55}vw`,
          height: `${height ?? 3.5}vh`,
          ...borderMixin,
        }}
      />
    </Wrapper>
  );
};
