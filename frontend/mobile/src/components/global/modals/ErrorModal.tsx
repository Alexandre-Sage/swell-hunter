import { Stack } from "../containers";
import { Modal } from "./Modal";
import { Text } from "react-native";
import { StandardButton } from "../buttons";
import { useState } from "react";
import { SetState } from "../../../types";
interface ErrorModalProps {
  message: string;
  toggleErrorModal: boolean;
  setToggleErrorModal: SetState<boolean>;
}

export const useError = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [toggleErrorModal, setToggleErrorModal] = useState<boolean>(false);
  return {
    toggleErrorModal,
    setToggleErrorModal,
    errorMessage,
    setErrorMessage,
  };
};

export const ErrorModal = ({
  message,
  toggleErrorModal,
  setToggleErrorModal,
}: ErrorModalProps) => {
  return (
    <Modal
      toggleModal={toggleErrorModal}
      setToggleModal={() => setToggleErrorModal((p) => !p)}
    >
      <Stack>
        <Text>{message}</Text>
      </Stack>
      <Stack>
        <StandardButton
          label="Close"
          onPress={() => setToggleErrorModal((p) => !p)}
        />
      </Stack>
    </Modal>
  );
};
