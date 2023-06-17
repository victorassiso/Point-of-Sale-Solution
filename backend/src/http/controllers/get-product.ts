import { ProductNotFoundError } from "@/use-cases/errors/product-not-found";
import { makeGetProductUseCase } from "@/use-cases/factories/make-get-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getProduct(request: FastifyRequest, reply: FastifyReply) {
  const getProductBodySchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = getProductBodySchema.parse(request.body);

  try {
    const getProductUseCase = makeGetProductUseCase();
    const { product } = await getProductUseCase.execute({ id });
    return reply.status(200).send(product);
  } catch (err) {
    if (err instanceof ProductNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}
