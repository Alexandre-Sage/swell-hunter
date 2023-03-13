import chaiG from "chai";
import chaiHttp from "chai-http";
import { server as httpServer } from "../../server";
import { setToken } from "../../src/modules";
import { UserId } from "../../src/types";

export class ChaiApi {
  token: string;
  private readonly chai = chaiG.use(chaiHttp);
    private readonly server = httpServer;

  constructor(
    private readonly credentials: { userName: string; id: UserId }
  ) {
    this.token = "";
  }
  fetchToken = async () => {
    const token = await setToken(this.credentials);
    this.token = token;
  };
  postRequest = async <T extends Object>({
    body,
    url,
  }: {
    url: string;
    body: T;
  }) => {
    const request = this.chai.request(this.server);
    return request
      .post(url)
      .set("Authorization", `Bearer ${this.token}`)
      .send(structuredClone(body));
  };
  getRequest = async (url: string) => {
    const request = this.chai.request(this.server);
    return request.get(url).set("Authorization", `Bearer ${this.token}`);
  };
  updateRequest = async <T extends Object>({
    body,
    url,
  }: {
    url: string;
    body: T;
  }) => {
    const request = this.chai.request(this.server);
    return request
      .put(url)
      .set("Authorization", `Bearer ${this.token}`)
      .send(structuredClone(body));
  };
  deleteRequest = async (url: string) => {};
}
