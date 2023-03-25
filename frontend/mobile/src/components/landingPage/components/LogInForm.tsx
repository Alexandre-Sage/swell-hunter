import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { RootStackParamList } from "../../../../App";
import { Stack } from "../../global/containers";
import { TextInput } from "../../global/inputs";
import { ErrorModal, useError } from "../../global/modals";
import { Modal } from "../../global/modals/Modal";
import { authApi } from "../api";
import { SubmitButton } from "./SubmitButton";

export interface LoginFormProps {
  toggleLoginForm: boolean;
  setToggleLoginForm: () => void;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "LandingPage",
    undefined
  >;
}
interface LoginAnswers {
  emain: string;
  passwrod: string;
}
export const LoginForm = ({
  setToggleLoginForm,
  toggleLoginForm,
  navigation,
}: LoginFormProps) => {
  const [answers, setAnswers] = useState<LoginAnswers>({} as LoginAnswers);
  const {
    errorMessage,
    setErrorMessage,
    setToggleErrorModal,
    toggleErrorModal,
  } = useError();
  console.log({ errorMessage, toggleErrorModal });
  return (
    <Modal setToggleModal={setToggleLoginForm} toggleModal={toggleLoginForm}>
      <Stack height={15}>
        <TextInput
          label="Email"
          onChangeText={(email) =>
            setAnswers((prev) => ({
              ...prev,
              email,
            }))
          }
        />
        <TextInput
          label="Password"
          onChangeText={(password) =>
            setAnswers((prev) => ({
              ...prev,
              password,
            }))
          }
        />
      </Stack>
      <Stack height={10}>
        <SubmitButton
          onPress={async () => {
            const { error, payload } = await authApi.login(answers);
            if (error) {
              setErrorMessage(payload as unknown as string);
              setToggleErrorModal(true);
              return;
            }
            AsyncStorage.setItem("token", payload.token);
            navigation.navigate("UserProfil");
          }}
        />
      </Stack>
      <ErrorModal
        message={errorMessage}
        toggleErrorModal={toggleErrorModal}
        setToggleErrorModal={setToggleErrorModal}
      />
    </Modal>
  );
};
