import { ObjectValue } from "../../../types";

const landingPageReducerActionType = {
  TOGGLE_LOGIN_FORM: "TOGGLE_LOGIN_FORM",
  TOGGLE_SIGNUP_FORM: "TOGGLE_SIGNUP_FORM",
  TOGGLE_BUTTTON_GROUP: "TOGGLE_BUTTTON_GROUP",
} as const;

type LandingPageReducerActionType = ObjectValue<
  typeof landingPageReducerActionType
>;

interface LandingPageReducerAction {
  type: LandingPageReducerActionType;
  payload?: boolean;
}

interface LandingPageState {
  toggleLoginForm: boolean;
  toggleSignupForm: boolean;
  toggleButtonsGroup: boolean;
}

export {
  LandingPageReducerAction,
  LandingPageReducerActionType,
  LandingPageState,
  landingPageReducerActionType,
};
