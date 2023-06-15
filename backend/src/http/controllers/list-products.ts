import { makeListProductsUseCase } from "@/use-cases/factories/make-list-products-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listProducts(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listProductsUseCase = makeListProductsUseCase();

    const products = await listProductsUseCase.execute();
    return reply.status(200).send(products);
  } catch (err) {
    throw err;
  }
}
