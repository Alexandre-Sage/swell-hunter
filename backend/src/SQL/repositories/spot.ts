import { Spot, SpotRow, Transaction } from "../../types";
import { Repository } from "../database/Repository";
import { SpotMapper } from "../mappers";

export class SpotRepository extends Repository<Spot, SpotRow> {
  constructor(
    transaction: Transaction,
    table = "spots",
    mapper = new SpotMapper()
  ) {
    super(transaction, table, mapper);
  }
}