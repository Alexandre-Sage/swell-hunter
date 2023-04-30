import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("wind_configs", (table) => {
    table.uuid("id").primary().notNullable();
    table.uuid("spot_id").notNullable();
    table.foreign("spot_id").references("spot.id");
    table.string("orientation").notNullable();
    table.integer("strength").notNullable();
    table.string("strength_unit").notNullable();
    table.dateTime("created_at").notNullable();
    table.dateTime("updated_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("wind_configs")
}
