import { CategoryAlreadyExistsError } from "@/use-cases/errors/category-already-exists";
import { makeCreateCategoryUseCase } from "@/use-cases/factories/make-create-category-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createCategory(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createCategoryBodySchema = z.object({
    name: z.string(),
  });

  const { name } = createCategoryBodySchema.parse(request.body);

  try {
    const createCategoryUseCase = makeCreateCategoryUseCase();

    const { category } = await createCategoryUseCase.execute({ name });
    return reply.status(201).send(category);
  } catch (err) {
    if (err instanceof CategoryAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }
    throw err;
  }
}
