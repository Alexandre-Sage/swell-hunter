import { StandardButton } from "../../global/buttons";
import { Stack } from "../../global/containers";

export interface ButtonsGroupProps {
  setToggleLoginForm: () => void;
  setToggleSignupForm: () => void;
}

export const ButtonsGroup = ({
  setToggleLoginForm,
  setToggleSignupForm,
}: ButtonsGroupProps) => {
  return (
    <Stack height={20}>
      <StandardButton label="Log in" onPress={setToggleLoginForm} />
      <StandardButton label="Sign up" onPress={setToggleSignupForm} />
    </Stack>
  );
};
