import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { server } from "../../server";
import { httpStatus } from "../../src/modules/httpStatus";
import { UserRow } from "../../src/types";
import { fetchUsers, userSetUp, userTearDown } from "../fixtures/user.fixtures";
chai.use(chaiHttp);
suite("User creation suite", () => {
  suiteSetup(async () => await userSetUp());
  suiteTeardown(async () => await userTearDown());
  test("Should throw an error for dupliacte email", async () => {
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
      expect(body)
        .to.have.property("payload")
        .equal("The provided email already exist");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.DUPLICATE);
    } catch (error) {
      throw error;
    }
  });
  test("Should throw an error for dupliacte user name", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "test",
          password: "test",
          email: "test@testTwo.com",
          phone: "0682456565",
          homeSpot: "here",
        },
        passwordConfirmation: "test",
      });
      expect(body)
        .to.have.property("payload")
        .equal("The provided user name already exist");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.DUPLICATE);
    } catch (error) {
      throw error;
    }
  });
  test("Should throw an error for dupliacte phone", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "testT",
          password: "test",
          email: "test@testTwo.com",
          phone: "0682569696",
          homeSpot: "here",
        },
        passwordConfirmation: "test",
      });
      expect(body)
        .to.have.property("payload")
        .equal("The provided phone already exist");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.DUPLICATE);
    } catch (error) {
      throw error;
    }
  });
});
