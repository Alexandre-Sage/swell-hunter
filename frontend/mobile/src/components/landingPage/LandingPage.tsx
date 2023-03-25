import { useReducer } from "react";
import { MainContainer } from "../global/containers";
import { Stack } from "../global/containers/Stack";
import { SurfAppLogoSvg } from "../svg/SurfAppLogo";
import { ButtonsGroup, LoginForm } from "./components";
import { SignupForm } from "./components/SignUpForm";
import { LandingPageReducerAction, LandingPageState } from "./types";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
export interface LandingPageProps
  extends NativeStackScreenProps<RootStackParamList, "LandingPage"> {}

const landingPageReducer = (
  state: LandingPageState,
  action: LandingPageReducerAction
) => {
  const { payload, type } = action;
  switch (type) {
    case "TOGGLE_LOGIN_FORM":
      return {
        toggleButtonsGroup: !state.toggleButtonsGroup,
        toggleLoginForm: !state.toggleLoginForm,
        toggleSignupForm: false,
      };
    case "TOGGLE_SIGNUP_FORM":
      return {
        toggleButtonsGroup: !state.toggleButtonsGroup,
        toggleLoginForm: false,
        toggleSignupForm: !state.toggleSignupForm,
      };
    case "TOGGLE_BUTTTON_GROUP":
      return {
        toggleButtonsGroup: true,
        toggleLoginForm: false,
        toggleSignupForm: false,
      };
    default:
      return state;
  }
};

export const LandingPage = ({ navigation, route }: LandingPageProps) => {
  const [{ toggleButtonsGroup, toggleLoginForm, toggleSignupForm }, dispatch] =
    useReducer(landingPageReducer, {
      toggleButtonsGroup: true,
      toggleLoginForm: false,
      toggleSignupForm: false,
    });
  return (
    <MainContainer
      style={{
        backgroundColor: "black",
      }}
    >
      <Stack>
        <SurfAppLogoSvg height={150} width={150} />
      </Stack>
      <LoginForm
        navigation={navigation}
        setToggleLoginForm={() =>
          dispatch({
            type: "TOGGLE_LOGIN_FORM",
          })
        }
        toggleLoginForm={toggleLoginForm}
      />
      <SignupForm
        toggleSignupForm={toggleSignupForm}
        setToggleSignupForm={() =>
          dispatch({
            type: "TOGGLE_SIGNUP_FORM",
          })
        }
      />
      <ButtonsGroup
        setToggleLoginForm={() =>
          dispatch({
            type: "TOGGLE_LOGIN_FORM",
          })
        }
        setToggleSignupForm={() =>
          dispatch({
            type: "TOGGLE_SIGNUP_FORM",
          })
        }
      />
    </MainContainer>
  );
};
