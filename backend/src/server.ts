import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import { transactionsRoutes } from "./routes/products";

const app = fastify();
app.register(transactionsRoutes, {
  prefix: "products",
});
app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running at http://localhost:3333!");
  });
