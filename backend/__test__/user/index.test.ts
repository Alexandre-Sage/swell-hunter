import { fetchUser, userSetUp, userTearDown } from "../fixtures/user.fixtures";

suite("", () => {
  test("", async () => {
    try {
      await userSetUp();
      const test = await fetchUser();
      console.log({ test });
      await userTearDown();
    } catch (error) {
      console.log(error);
    }
  });
});
