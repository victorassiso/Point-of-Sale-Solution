import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/", async () => {
  const transaction = await knex("transactions").insert({});
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running at http://localhost:3333!");
  });
