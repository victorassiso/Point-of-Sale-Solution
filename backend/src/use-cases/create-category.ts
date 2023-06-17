import { CategoriesRepository } from "@/repositories/categories-repository";
import { CategoryAlreadyExistsError } from "./errors/category-already-exists";

interface CreateCategoryUseCaseRequest {
  name: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({ name }: CreateCategoryUseCaseRequest) {
    const categoryWithSameName = await this.categoriesRepository.findByName(name);
    if(categoryWithSameName){
      throw new CategoryAlreadyExistsError();
    }
    const category = await this.categoriesRepository.create(name);
    return { category };
  }
}
