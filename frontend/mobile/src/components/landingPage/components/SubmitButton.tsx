import { StandardButton } from "../../global/buttons";

export interface SubmitButtonProps {
  onPress: () => void;
}

export const SubmitButton = ({ onPress }: SubmitButtonProps) => (
  <StandardButton label="Submit" onPress={onPress} />
);
