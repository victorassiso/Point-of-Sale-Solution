import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { createProduct } from "./controllers/create-product";
import { listProducts } from "./controllers/list-products";
import { updateProduct } from "./controllers/update-product";
import { deleteProduct } from "./controllers/delete-product";
import { createStore } from "./controllers/create-store";
import { listStores } from "./controllers/list-stores";
import { listInventoriesByStore } from "./controllers/list-inventories-by-store";
import { createInvoice } from "./controllers/create-invoice";
import { listInventories } from "./controllers/list-inventories";
import { createCategory } from "./controllers/create-category";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register);

  app.post("/products", createProduct);
  app.get("/products", listProducts);
  app.put("/products", updateProduct);
  app.delete("/products", deleteProduct);

  app.post("/stores", createStore);
  app.get("/stores", listStores);

  app.options("/inventories", listInventoriesByStore);
  app.get("/inventories", listInventories);

  app.post("/invoices", createInvoice);

  app.post("/categories", createCategory);
}
