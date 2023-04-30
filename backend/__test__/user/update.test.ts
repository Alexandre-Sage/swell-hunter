import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { httpStatus } from "../../src/modules/httpStatus";
import { ChaiApi } from "../fixtures/ChaiApi.fixtures";
import {
  userFactory,
  userIds,
  userRepository,
  userSetUp,
  userTearDown,
} from "../fixtures/user.fixtures";
chai.use(chaiHttp);
const api = new ChaiApi({ userName: "test", id: userIds[0] });

suite("Update user suite", () => {
  suiteSetup(async () => {
    await userSetUp();
    await api.fetchToken();
  });
  suiteTeardown(async () => await userTearDown());
  test("Should update user", async () => {
    const updatedUser = userFactory({
      id: userIds[0],
      userName: "test updated",
    });

    const { body, status } = await api.updateRequest({
      url: `/users/${userIds[0]}`,
      body: {
        payload: updatedUser,
      },
    });
    expect(body).to.have.property("payload");
    expect(status).to.be.equal(httpStatus.PUT);
    const { id, userName, email } = (await userRepository.fetchOne({
      searchValue: userIds[0],
    })).unwrap();
    expect(id).to.be.equal(userIds[0]);
    expect(userName).to.be.equal(updatedUser.userName);
    expect(email).to.be.equal(updatedUser.email);
  });
});
