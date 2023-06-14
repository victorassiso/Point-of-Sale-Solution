import fastify from "fastify";
import { productsRoutes } from "./routes/products";
import { storesRoutes } from "./routes/stores";
import { storagesRoutes } from "./routes/storages";
import { salesRoutes } from "./routes/sales";
import { saleItemsRoutes } from "./routes/saleItems";

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
app.register(salesRoutes, {
  prefix: "sales",
});
app.register(saleItemsRoutes, {
  prefix: "sale_items",
});
