import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { server } from "../../server";
import { decodeToken } from "../../src/modules";
import { httpStatus } from "../../src/modules/httpStatus";
import { ChaiApi } from "../fixtures/ChaiApi.fixtures";
import { userIds, userSetUp, userTearDown } from "../fixtures/user.fixtures";
chai.use(chaiHttp);
const api = new ChaiApi({ userName: "test", id: userIds[0] });
suite("User login suite", () => {
  suiteSetup(async () => {
    await userSetUp();
    await api.fetchToken();
  });
  suiteTeardown(async () => await userTearDown());
  test("Should log user successfuly", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/log-in").send({
        payload: {
          password: "test",
          email: "test@test.com",
        },
      });
      expect(body).to.have.property("payload").to.have.property("token");
      expect(body).to.have.property("error").equal(false);
      expect(status).to.be.equal(httpStatus.GET);
    } catch (error) {
      throw error;
    }
  });
  test("Should trow wrong password error", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/log-in").send({
        payload: {
          password: "te",
          email: "test@test.com",
        },
      });
      expect(body).to.have.property("payload").equal("Invalid password");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.AUTH_ERROR);
    } catch (error) {
      throw error;
    }
  });
  /* test("Should trow wrong password error", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/log-in").send({
        payload: {
          password: "test",
          email: "testtest.com",
        },
      });
      expect(body).to.have.property("payload").equal("Invalid password")
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.AUTH_ERROR);
    } catch (error) {
      throw error;
    }
  }); */
  test("Should log and get user info", async () => {
    try {
      const { body, status } = await api.getRequest(`/users/${userIds[0]}`);
      expect(body).to.have.property("payload");
      expect(body).to.have.property("error").equal(false);
      expect(status).to.be.equal(httpStatus.GET);
      expect(body.payload.id).to.be.equal(userIds[0]);
      expect(body.payload.userName).to.be.equal("test")
    } catch (error) {
      throw error;
    }
  });
});
