import { ProductNotFoundError } from "@/use-cases/errors/product-not-found";
import { makeListProductsLogByProductUseCase } from "@/use-cases/factories/make-list-products-log-by-product-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listProductsLogByProduct(request: FastifyRequest, reply: FastifyReply) {
  const listProductsLogtBodySchema = z.object({
    product_id: z.string().uuid(),
  });

  const { product_id } = listProductsLogtBodySchema.parse(request.body);

  try {
    const listProductsLogUseCase = makeListProductsLogByProductUseCase();
    const { productsLog } = await listProductsLogUseCase.execute({ product_id });
    return reply.status(200).send(productsLog);
  } catch (err) {
    if (err instanceof ProductNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}
