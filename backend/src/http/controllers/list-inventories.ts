import { makeListInventoriesUseCase } from "@/use-cases/factories/make-list-inventories-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listInventories(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listInventoriesUseCase = makeListInventoriesUseCase();
    const inventories = await listInventoriesUseCase.execute();
    return reply.status(200).send(inventories);
  } catch (err) {
    throw err;
  }
}
