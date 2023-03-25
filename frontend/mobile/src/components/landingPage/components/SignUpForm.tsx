import { useState } from "react";
import { Stack } from "../../global/containers";
import { TextInput } from "../../global/inputs";
import { Modal } from "../../global/modals/Modal";
import { SubmitButton } from "./SubmitButton";

export interface SignupFormProps {
  toggleSignupForm: boolean;
  setToggleSignupForm: () => void;
}

interface Answers {
  userName: string;
  password: string;
  confirmPassword: string;
  phone: string;
  email: string;
}

export const SignupForm = ({
  setToggleSignupForm,
  toggleSignupForm,
}: SignupFormProps) => {
  const [answers, setAnswers] = useState<Answers>({} as Answers);
  console.log({ answers });
  return (
    <Modal
      height={55}
      setToggleModal={setToggleSignupForm}
      toggleModal={toggleSignupForm}
    >
      <Stack height={37}>
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
          label="Phone"
          onChangeText={(phone) =>
            setAnswers((prev) => ({
              ...prev,
              phone,
            }))
          }
        />
        <TextInput
          label="User name"
          onChangeText={(userName) =>
            setAnswers((prev) => ({
              ...prev,
              userName,
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
        <TextInput
          label="Confirm password"
          onChangeText={(passwordConfirmation) =>
            setAnswers((prev) => ({
              ...prev,
              passwordConfirmation,
            }))
          }
        />
      </Stack>
      <Stack height={10}>
        <SubmitButton />
      </Stack>
    </Modal>
  );
};
