import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";

export async function salesRoutes(app: FastifyInstance) {
  // Select all sales
  app.get("/", async () => {
    const sales = await knex("sales").select("*");

    return { sales };
  });

  // Create new sale
  app.post("/", async (request, response) => {
    const createSaleBodySchema = z.object({
      storage_id: z.string().uuid(),
      total: z.number(),
    });

    const { storage_id, total } = createSaleBodySchema.parse(request.body);

    await knex("sales").insert({
      id: randomUUID(),
      storage_id,
      total,
    });
    return response.status(201).send("✔ Sale created successfully.");
  });

  // Select one sale by id
  app.get("/:id", async (request) => {
    const getSaleParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getSaleParamsSchema.parse(request.params);

    const sale = await knex("sales").where("id", id).first();

    return { sale };
  });
}
