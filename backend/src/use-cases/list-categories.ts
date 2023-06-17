import { CategoriesRepository } from "@/repositories/categories-repository";
import { Category } from "@prisma/client";

interface ListCategoriesResponse {
  categories: Category[];
}

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute(): Promise<ListCategoriesResponse> {
    const categories = await this.categoriesRepository.list();
    return { categories };
  }
}
