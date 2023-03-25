import { Wrapper } from "../containers";
import {
  Text,
  TextInput as RNTxtInput,
  TextInputProps as RNTxtInputProps,
} from "react-native";
import { borderMixin, devBorder, TextColor } from "../styles";
import { CssHeight, CssWidth } from "../../../types";

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
          width: `${width ?? 55}vw`,
          height: `${height ?? 3.5}vh`,
          ...borderMixin,
        }}
      />
    </Wrapper>
  );
};
