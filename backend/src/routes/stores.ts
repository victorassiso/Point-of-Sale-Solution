import { FastifyInstance } from "fastify";
import { knex } from "../database";
import { z } from "zod";
import { randomUUID } from "node:crypto";

export async function storesRoutes(app: FastifyInstance) {
  // Select all stores
  app.get("/", async () => {
    const stores = await knex("stores").select("*");

    return { stores };
  });

  // Create new store
  app.post("/", async (request, response) => {
    const createStoreBodySchema = z.object({
      name: z.string(),
    });

    const { name } = createStoreBodySchema.parse(request.body);

    await knex("stores").insert({
      id: randomUUID(),
      name,
    });
    return response.status(201).send("✔ Store created successfully.");
  });

  // Select one store by id
  app.get("/:id", async (request) => {
    const getStoreParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getStoreParamsSchema.parse(request.params);

    const store = await knex("stores").where("id", id).first();

    return { store };
  });
}
