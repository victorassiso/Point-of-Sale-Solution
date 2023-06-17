import { StoreAlreadyExistsError } from "@/use-cases/errors/store-already-exists";
import { makeCreateStoreUseCase } from "@/use-cases/factories/make-create-store-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createStore(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createStoreBodySchema = z.object({
    name: z.string(),
  });

  const { name } = createStoreBodySchema.parse(request.body);

  try {
    const createStoreUseCase = makeCreateStoreUseCase();

    const { store } = await createStoreUseCase.execute({ name });
    return reply.status(201).send(store);
  } catch (err) {
    if (err instanceof StoreAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    throw err;
  }
}
