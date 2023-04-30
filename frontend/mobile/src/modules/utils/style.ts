import { SizeProps } from "../../types";

const formatWidth = ({
  defaultValue,
  width,
}: {
  defaultValue: SizeProps["width"];
  width: SizeProps["width"];
}) => `${width ?? defaultValue}vw`;

const formatHeigt = ({
  defaultValue,
  height,
}: {
  defaultValue: SizeProps["height"];
  height: SizeProps["height"];
}) => `${height ?? defaultValue}vh`;

export { formatWidth, formatHeigt };
