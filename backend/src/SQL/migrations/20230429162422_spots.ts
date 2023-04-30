import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("spots", (table) => {
    table.uuid("id").primary().notNullable();
    table.uuid("user_id").notNullable();
    table.foreign("user_id").references("user.id")
    table.string("spot_name").notNullable();
    table.point("coordinates").notNullable();
    table.dateTime("created_at").notNullable();
    table.dateTime("updated_at").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("spots");
}

