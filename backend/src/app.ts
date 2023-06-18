import fastify from "fastify";
import { appRoutes } from "./http/routes";
import { ZodError } from "zod";
import { env } from "./env";
import cors from "@fastify/cors";
export const app = fastify();

app.register(cors);
app.register(appRoutes);

app.setErrorHandler((err, _request, reply) => {
  if (err instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: err.format() });
  }
  if (env.NODE_ENV !== "production") {
    console.log(err);
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelix/Sentry
  }
  return reply.status(500).send({ message: "Internal server error." });
});
