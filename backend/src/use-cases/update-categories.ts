import { CategoriesRepository } from "@/repositories/categories-repository";
import { Category } from "@prisma/client";
import { CategoryNotFoundError } from "./errors/category-not-found";

interface UpdateCategoryUseCaseRequest {
  id: string;
  name?: string;
}

interface UpdateCategoryUseCaseResponse {
  category: Category;
}
export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({
    id,
    name,
  }: UpdateCategoryUseCaseRequest): Promise<UpdateCategoryUseCaseResponse> {
    const categoryWithSameId = await this.categoriesRepository.findById(id);

    if (!categoryWithSameId) {
      throw new CategoryNotFoundError();
    }

    const category = await this.categoriesRepository.update({
      id,
      name,
    });

    return { category };
  }
}
