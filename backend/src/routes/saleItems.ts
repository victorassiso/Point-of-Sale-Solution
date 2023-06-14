import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";

export async function saleItemsRoutes(app: FastifyInstance) {
  // Select all sale items
  app.get("/", async () => {
    const saleItems = await knex("sale_items").select("*");

    return { saleItems };
  });

  // Create new sale item
  app.post("/", async (request, response) => {
    const createSaleItemBodySchema = z.object({
      product_id: z.string().uuid(),
      sale_id: z.string().uuid(),
      amount: z.number(),
      price: z.number(),
    });

    const { product_id, sale_id, amount, price } =
      createSaleItemBodySchema.parse(request.body);

    await knex("sale_items").insert({
      id: randomUUID(),
      product_id,
      sale_id,
      amount,
      price,
    });
    return response.status(201).send("✔ Sale Item created successfully.");
  });

  // Select one sale item by id
  app.get("/:id", async (request) => {
    const getSaleItemParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getSaleItemParamsSchema.parse(request.params);

    const saleItem = await knex("sale_items").where("id", id).first();

    return { saleItem };
  });

  // Select all items from a specific sale
  app.get("/sale/:sale_id", async (request) => {
    const getSaleItemParamsSchema = z.object({
      sale_id: z.string().uuid(),
    });

    console.log(request.params);
    const { sale_id } = getSaleItemParamsSchema.parse(request.params);

    const saleItem = await knex("sale_items").where("sale_id", sale_id);

    return { saleItem };
  });
}
