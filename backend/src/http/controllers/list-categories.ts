import { makeListCategoriesUseCase } from "@/use-cases/factories/make-list-categories-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listCategories(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listCategoriesUseCase = makeListCategoriesUseCase();
    const categories = await listCategoriesUseCase.execute();
    return reply.status(200).send(categories);
  } catch (err) {
    throw err;
  }
}
