import { Mapper, SqlWhereClause, Transaction } from "../../types";

export class Repository<ObjectType, RowType> {
  constructor(
    readonly transaction: Transaction,
    readonly table: string,
    readonly mapper: Mapper<ObjectType, RowType>
  ) {}

  create = async (data: ObjectType) => {
    const row = this.mapper.objectToDbRow(data);
    return this.transaction(async (transaction) =>
      transaction.table(this.table).insert(row)
    );
  };
  fetchOne = async ({
    searchValue,
    columnName,
    operator,
    selectedField,
  }: SqlWhereClause<RowType>) => {
    return this.transaction<ObjectType>(async (transaction) => {
      const row = await transaction
        .table(this.table)
        .select(selectedField ?? "*")
        .where(columnName || "id", operator || "=", searchValue)
        .first();
      return this.mapper.dbRowToObject(row);
    });
  };
  fetchAll = ({
    columnName,
    operator,
    searchValue,
    selectedField,
  }: SqlWhereClause<RowType>) => {
    return this.transaction<ObjectType[]>(async (transaction) => {
      const rows = await transaction
        .table(this.table)
        .select(selectedField || "*")
        .where(columnName || "id", operator || "=", searchValue);
      return rows.map((row) => this.mapper.dbRowToObject(row));
    });
  };
  update = async ({
    data,
    searchValue,
    columnName,
    operator,
  }: { data: ObjectType } & Omit<SqlWhereClause<RowType>, "selectedField">) => {
    const row = this.mapper.objectToDbRow(data);    
    return this.transaction(async (transaction) => {
      await transaction
        .table(this.table)
        .update(row)
        .where(columnName || "id", operator||"=", searchValue);
    });
  };
  delete = (id: string) => {
    return this.transaction(async (transaction) => {
      transaction.table(this.table).delete("*").where("id", "=", id);
    });
  };
}
