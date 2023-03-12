import chaiG from "chai";
import chaiHttp from "chai-http";
export class ChaiApi {
  constructor(private readonly chai = chaiG.use(chaiHttp)) {}
  getRequest = async () => {};
  postRequest = async () => {};
  updateRequest = async () => {};
  deleteRequest = async () => {};
}
