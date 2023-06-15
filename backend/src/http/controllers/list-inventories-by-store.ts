import { StoreNotFoundError } from "@/use-cases/errors/store-not-found";
import { makeListInventoriesByStoreUseCase } from "@/use-cases/factories/make-list-inventories-by-store-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listInventoriesByStore(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const ListInventoriesByStoreBodySchema = z.object({
    store_id: z.string().uuid(),
  });

  console.log(request.body);
  const { store_id } = ListInventoriesByStoreBodySchema.parse(request.body);

  try {
    const listInventoriesByStoreUseCase = makeListInventoriesByStoreUseCase();

    const inventories = await listInventoriesByStoreUseCase.execute({
      store_id,
    });
    return reply.status(200).send(inventories);
  } catch (err) {
    if (err instanceof StoreNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}
