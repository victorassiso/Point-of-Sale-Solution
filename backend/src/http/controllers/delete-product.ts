import { ProductNotFound } from "@/use-cases/errors/product-not-found";
import { makeDeleteProductUseCase } from "@/use-cases/factories/make-delete-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteProduct(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const deleteProductBodySchema = z.object({
    id: z.string().uuid(),
  });
  console.log("DEBUG");
  const { id } = deleteProductBodySchema.parse(request.body);

  try {
    const deleteProductUseCase = makeDeleteProductUseCase();

    await deleteProductUseCase.execute({ id });
  } catch (err) {
    if (err instanceof ProductNotFound) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }

  return reply.status(200).send();
}
