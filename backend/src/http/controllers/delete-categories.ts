import { CategoryNotFoundError } from "@/use-cases/errors/category-not-found";
import { makeDeleteCategoriesUseCase } from "@/use-cases/factories/make-delete-categories-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteCategories(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const deleteCategoriesBodySchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = deleteCategoriesBodySchema.parse(request.body);

  try {
    const deleteCategoriesUseCase = makeDeleteCategoriesUseCase();

    await deleteCategoriesUseCase.execute({ id });
  } catch (err) {
    if (err instanceof CategoryNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }

  return reply.status(200).send();
}
