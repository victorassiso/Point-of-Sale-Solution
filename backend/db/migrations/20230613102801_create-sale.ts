import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("sales", (table) => {
    table.uuid("id").primary();
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.uuid("storage_id").references("id").inTable("storages");
    table.float("total");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("sales");
}
