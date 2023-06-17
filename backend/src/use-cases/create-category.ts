import { CategoriesRepository } from "@/repositories/categories-repository";

interface CreateCategoryUseCaseRequest {
  name: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ name }: CreateCategoryUseCaseRequest) {
    const category = await this.categoriesRepository.create(name);
    return { category };
  }
}
