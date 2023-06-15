import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { createProduct } from "./controllers/create-product";
import { listProducts } from "./controllers/list-products";
import { updateProduct } from "./controllers/update-product";
import { deleteProduct } from "./controllers/delete-product";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/products", createProduct);
  app.get("/products", listProducts);
  app.put("/products", updateProduct);
  app.delete("/products", deleteProduct);
}
