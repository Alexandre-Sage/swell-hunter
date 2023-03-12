import knex, { Knex } from "knex";
import { curryPatternAsync } from "sage-functional-library";
import { TransactionCallBack } from "../../types";
import { config } from "./config";
//import {config} from "../../knexConfig"
const connection = knex(config[process.env.KNEX_STAGE || "test"]);

const databaseTransaction = async <Type = void>(
  databaseInstance: Knex,
  callBack: TransactionCallBack<Type>
) =>
  databaseInstance.transaction(
    async (transaction) => await callBack(transaction)
  );

const transaction: <Type>(p2: TransactionCallBack<Type>) => Promise<Type> =
  curryPatternAsync(databaseTransaction)(connection);

export { transaction };
