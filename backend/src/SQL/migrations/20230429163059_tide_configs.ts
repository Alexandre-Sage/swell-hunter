import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tide_configs", (table) => {
    table.uuid("id").primary().notNullable();
    table.uuid("spot_id").notNullable();
    table.foreign("spot_id").references("spot.id");
    table.string("tide_status").notNullable();
    table.integer("tide_coef").notNullable();
    table.dateTime("created_at").notNullable();
    table.dateTime("updated_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {}
