import AsyncStorage from "@react-native-async-storage/async-storage";
import { functionalFetch } from "../../modules/api/fetch";

class AuthentificationApi {
  signUp = async (answers: any) => {
    const { passwordConfirmation, ...payload } = answers;
    await functionalFetch({
      method: "POST",
      url: "/users/sign-up",
      body: { payload, passwordConfirmation },
    });
  };
  login = async (answers: any) => {
    return await functionalFetch<{
      token: string;
    }>({
      method: "POST",
      url: "/users/log-in",
      body: { payload: answers },
    });
  };
}
export const authApi = new AuthentificationApi();
