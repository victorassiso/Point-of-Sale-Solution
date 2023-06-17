import { PrismaCategoriesRepository } from "@/repositories/prisma/prisma-categories-repository";
import { DeleteCategoriesUseCase } from "../delete-categories";

export function makeDeleteCategoriesUseCase() {
  const categoriesRepository = new PrismaCategoriesRepository();
  const deleteCategoriesUseCase = new DeleteCategoriesUseCase(categoriesRepository);

  return deleteCategoriesUseCase;
}
