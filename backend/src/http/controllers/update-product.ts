import { ProductNotFoundError } from "@/use-cases/errors/product-not-found";
import { makeUpdateProductUseCase } from "@/use-cases/factories/make-update-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updateProduct(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const updateProductBodySchema = z.object({
    id: z.string().uuid(),
    name: z.string().optional(),
    price: z.number().optional(),
  });

  const { id, name, price } = updateProductBodySchema.parse(request.body);

  try {
    const updateProductUseCase = makeUpdateProductUseCase();

    await updateProductUseCase.execute({ id, name, price });
  } catch (err) {
    if (err instanceof ProductNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }

  return reply.status(200).send();
}
