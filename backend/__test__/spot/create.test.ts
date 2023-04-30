import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { server } from "../../server";
import { httpStatus } from "../../src/modules/httpStatus";
import { SpotRow } from "../../src/types";
import { ChaiApi } from "../fixtures/ChaiApi.fixtures";
import { fetchSpots } from "../fixtures/spot.fixtures";
import {
  userIds,
  userSetUp,
  userTearDown
} from "../fixtures/user.fixtures";
chai.use(chaiHttp);
const api = new ChaiApi({ id: userIds[0], userName: "test" });
suite("User creation suite", () => {
  suiteSetup(async () => await userSetUp());
  suiteTeardown(async () => await userTearDown());
  test("Should create user successfuly", async () => {
    try {
      const request = chai.request(server);
      const { body, status } = await api.postRequest({
        url: "/spots",
        body: {
          payload: {
            spotName: "test",
            coordinates: [0, 0, 0],
          },
        },
      });
      expect(body).to.have.property("payload").equal("Spot created");
      expect(body).to.have.property("error").equal(false);
      expect(status).to.be.equal(httpStatus.CREATE);
      const spots = (await fetchSpots()) as SpotRow[];
      expect(spots[0]).to.have.property("spot_name").equal("test");
    } catch (error) {
      throw error;
    }
  });
});
