import { CategoriesRepository } from "@/repositories/categories-repository";
import { Category } from "@prisma/client";
import { CategoryNotFoundError } from "./errors/category-not-found";

interface DeleteCategoriesUseCaseRequest {
  id: string;
  name?: string;
}

type DeleteCategoriesUseCaseResponse = void;

export class DeleteCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({
    id,
  }: DeleteCategoriesUseCaseRequest): Promise<DeleteCategoriesUseCaseResponse> {
    const categoryWithSameId = await this.categoriesRepository.findById(id);

    if (!categoryWithSameId) {
      throw new CategoryNotFoundError();
    }

    this.categoriesRepository.delete(id);
  }
}
