import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { server } from "../../server";
import { httpStatus } from "../../src/modules/httpStatus";
import { UserRow } from "../../src/types";
import { fetchUsers, userTearDown } from "../fixtures/user.fixtures";
chai.use(chaiHttp);
suite("User creation suite", () => {
  suiteTeardown(async () => await userTearDown());
  test("Should create user successfuly", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "test",
          password: "test",
          email: "test@test.com",
          phone: "0682456565",
          homeSpot: "here",
        },
        passwordConfirmation: "test",
      });
      expect(body).to.have.property("payload").equal("User created");
      expect(body).to.have.property("error").equal(false);
      expect(status).to.be.equal(httpStatus.CREATE);
      const users = await fetchUsers() as UserRow[];
      expect(users[0]).to.have.property("user_name").equal("test");
    } catch (error) {
      throw error;
    }
  });
});
