import { ProductAlreadyExistsError } from "@/use-cases/errors/product-already-exists";
import { makeCreateProductUseCase } from "@/use-cases/factories/make-create-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createProduct(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createProductBodySchema = z.object({
    name: z.string(),
    price: z.number(),
  });

  const { name, price } = createProductBodySchema.parse(request.body);

  try {
    const createProductUseCase = makeCreateProductUseCase();

    await createProductUseCase.execute({ name, price });
  } catch (err) {
    if (err instanceof ProductAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    throw err;
  }

  return reply.status(201).send();
}
