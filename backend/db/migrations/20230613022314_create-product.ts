import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("products", (table) => {
    table.uuid("id").primary();
    table.text("name");
    table
      .enum("status", ["active", "inactive"])
      .notNullable()
      .defaultTo("inactive");
    table.float("price").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("products");
}
