import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("storages", (table) => {
    table.uuid("id").primary();
    table.uuid("store_id").notNullable().references("id").inTable("stores");
    table.uuid("product_id").notNullable().references("id").inTable("products");
    table.float("balance").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("storages");
}
