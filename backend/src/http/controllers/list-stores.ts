import { makeListStoresUseCase } from "@/use-cases/factories/make-list-stores-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listStores(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listStoresUseCase = makeListStoresUseCase();

    const stores = await listStoresUseCase.execute();
    return reply.status(200).send(stores);
  } catch (err) {
    throw err;
  }
}
