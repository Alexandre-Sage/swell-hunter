import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { server } from "../../server";
import { httpStatus } from "../../src/modules/httpStatus";
import { UserRow } from "../../src/types";
import { fetchUsers, userTearDown } from "../fixtures/user.fixtures";
chai.use(chaiHttp);
suite("User creation suite", () => {
  test("Should throw an error for missing username", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "",
          password: "test",
          passwordConfirmation: "test",
          email: "test@test.com",
          phone: "0682456565",
          homeSpot: "here",
        },
        passwordConfirmation: "test",
      });
      expect(body).to.have.property("payload").equal("User name is required");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.INPUT_ERROR);
      const users = (await fetchUsers()) as UserRow[];
      expect(users).to.have.length(0);
    } catch (error) {
      throw error;
    }
  });
  test("Should throw an error for missing phone", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "test",
          password: "test",
          email: "test@test.com",
          phone: "",
          homeSpot: "here",
        },
        passwordConfirmation: "test",
      });
      expect(body).to.have.property("payload").equal("Phone is required");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.INPUT_ERROR);
      const users = (await fetchUsers()) as UserRow[];
      expect(users).to.have.length(0);
    } catch (error) {
      throw error;
    }
  });
  test("Should throw an error for missing password", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "test",
          password: "",
          email: "test@test.com",
          phone: "060606060",
          homeSpot: "here",
        },
        passwordConfirmation: "",
      });
      expect(body).to.have.property("payload").equal("Password is required");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.INPUT_ERROR);
      const users = (await fetchUsers()) as UserRow[];
      expect(users).to.have.length(0);
    } catch (error) {
      throw error;
    }
  });
  test("Should throw an error for missing email", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "test",
          password: "test",
          email: "",
          phone: "0606060600",
          homeSpot: "here",
        },
        passwordConfirmation: "test",
      });
      expect(body).to.have.property("payload").equal("Email is required");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.INPUT_ERROR);
      const users = (await fetchUsers()) as UserRow[];
      expect(users).to.have.length(0);
    } catch (error) {
      throw error;
    }
  });
  test("Should throw an error for invalid phone", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "test",
          password: "test",
          email: "test@test.com",
          phone: "060606060a",
          homeSpot: "here",
        },
        passwordConfirmation: "test",
      });
      expect(body)
        .to.have.property("payload")
        .equal("Provided phone is invalid");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.INPUT_ERROR);
      const users = (await fetchUsers()) as UserRow[];
      expect(users).to.have.length(0);
    } catch (error) {
      throw error;
    }
  });
  test("Should throw an error for invalid email", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "test",
          password: "test",
          email: "testtest.com",
          phone: "0606060606",
          homeSpot: "here",
        },
        passwordConfirmation: "test",
      });
      expect(body)
        .to.have.property("payload")
        .equal("Provided email is invalid");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.INPUT_ERROR);
      const users = (await fetchUsers()) as UserRow[];
      expect(users).to.have.length(0);
    } catch (error) {
      throw error;
    }
  });
  test("Should throw an error for password mismatch", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await request.post("/users/sign-up").send({
        payload: {
          userName: "test",
          password: "test",
          email: "test@test.com",
          phone: "0606060606",
          homeSpot: "here",
        },
        passwordConfirmation: "tesdsqdqsdqt",
      });
      expect(body)
        .to.have.property("payload")
        .equal("Password mismatch");
      expect(body).to.have.property("error").equal(true);
      expect(status).to.be.equal(httpStatus.INPUT_ERROR);
      const users = (await fetchUsers()) as UserRow[];
      expect(users).to.have.length(0);
    } catch (error) {
      throw error;
    }
  });
});
