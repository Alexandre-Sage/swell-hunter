import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().notNullable();
    table.string("user_name").unique().notNullable();
    table.string("email").unique().notNullable();
    table.string("phone").unique().notNullable();
    table.string("password").notNullable();
    table.string("salt").notNullable();
    table.dateTime("created_at").notNullable();
    table.dateTime("updated_at").notNullable();
    table.geography("home_spot").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
