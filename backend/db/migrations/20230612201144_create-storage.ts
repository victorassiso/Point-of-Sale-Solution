import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("storage", (table) => {
        table.uuid("id").primary();
        table.uuid("product_id").references("id").inTable("products");
        table.float("balance").notNullable();
      });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("storage");
}

