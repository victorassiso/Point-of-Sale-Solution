import fastify from "fastify";
import { productsRoutes } from "./routes/products";
import { storesRoutes } from "./routes/stores";
import { storagesRoutes } from "./routes/storages";

export const app = fastify();

app.register(productsRoutes, {
  prefix: "products",
});
app.register(storesRoutes, {
  prefix: "stores",
});
app.register(storagesRoutes, {
  prefix: "storages",
});
