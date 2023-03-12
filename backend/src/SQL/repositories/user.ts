import { Transaction, User, UserRow } from "../../types";
import { Repository } from "../database/Repository";
import { UserMapper } from "../mappers";

export class UserRepository extends Repository<User, UserRow> {
  constructor(
    transaction: Transaction,
    table = "users",
    mapper = new UserMapper()
  ) {
    super(transaction, table, mapper);
  }
}
