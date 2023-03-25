import { Stack } from "../../global/containers";
import { TextInput } from "../../global/inputs";
import { Modal } from "../../global/modals/Modal";
import { SubmitButton } from "./SubmitButton";

export interface LoginFormProps {
  toggleLoginForm: boolean;
  setToggleLoginForm: () => void;
}

export const LoginForm = ({
  setToggleLoginForm,
  toggleLoginForm,
}: LoginFormProps) => {
  return (
    <Modal setToggleModal={setToggleLoginForm} toggleModal={toggleLoginForm}>
      <Stack height={15}>
        <TextInput label="Email" />
        <TextInput label="Password" />
      </Stack>
      <Stack height={10}>
      <SubmitButton />
      </Stack>
    </Modal>
  );
};
