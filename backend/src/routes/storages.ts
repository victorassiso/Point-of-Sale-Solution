import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";

export async function storagesRoutes(app: FastifyInstance) {
  // Select all storages
  app.get("/", async () => {
    const storages = await knex("storages").select("*");

    return { storages };
  });

  // Create new storage
  app.post("/", async (request, response) => {
    const createStorageBodySchema = z.object({
      store_id: z.string().uuid(),
      product_id: z.string().uuid(),
      balance: z.number(),
    });

    const { store_id, product_id, balance } = createStorageBodySchema.parse(
      request.body
    );

    await knex("storages").insert({
      id: randomUUID(),
      store_id,
      product_id,
      balance,
    });
    return response.status(201).send("✔ Storage created successfully.");
  });

  // Select one storage by id
  app.get("/:id", async (request) => {
    const getStorageParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getStorageParamsSchema.parse(request.params);

    const storage = await knex("storages").where("id", id).first();

    return { storage };
  });
}
