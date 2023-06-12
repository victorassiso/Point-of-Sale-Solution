import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import { productsRoutes } from "./routes/products";

export const app = fastify();

app.register(productsRoutes, {
  prefix: "products",
});
