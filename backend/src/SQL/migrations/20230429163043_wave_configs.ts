import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("wave_configs", (table) => {
    table.uuid("id").primary().notNullable();
    table.uuid("spot_id").notNullable();
    table.foreign("spot_id").references("spot.id")
    table.string("orientation").notNullable();
    table.integer("size").notNullable();
    table.string("size_unit").notNullable();
    table.string("period").notNullable();
    table.dateTime("created_at").notNullable();
    table.dateTime("updated_at").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("wave_configs")
}

