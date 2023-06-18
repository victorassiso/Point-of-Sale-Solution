import { makeListProductsLogUseCase } from "@/use-cases/factories/make-list-products-log-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listProductsLog(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listProductsLogUseCase = makeListProductsLogUseCase();

    const productsLog = await listProductsLogUseCase.execute();
    return reply.status(200).send(productsLog);
  } catch (err) {
    throw err;
  }
}
