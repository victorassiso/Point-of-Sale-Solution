import { PrismaCategoriesRepository } from "@/repositories/prisma/prisma-categories-repository";
import { UpdateCategoryUseCase } from "../update-categories";

export function makeUpdateCategoriesCase() {
  const categoriesRepository = new PrismaCategoriesRepository();
  const updateCategoriesUseCase = new UpdateCategoryUseCase(categoriesRepository);

  return updateCategoriesUseCase;
}
