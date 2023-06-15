import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { createProduct } from "./controllers/create-product";
import { listProducts } from "./controllers/list-products";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/products", createProduct);
  app.get("/products", listProducts);
}
