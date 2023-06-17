import { PrismaCategoriesRepository } from "@/repositories/prisma/prisma-categories-repository";
import { UpdateCategoryUseCase } from "../update-category";

export function makeUpdateCategoryCase() {
  const categoriesRepository = new PrismaCategoriesRepository();
  const updateCategoryUseCase = new UpdateCategoryUseCase(categoriesRepository);

  return updateCategoryUseCase;
}
