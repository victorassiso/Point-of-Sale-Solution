import { Category } from "@prisma/client";

export interface CategoriesRepository {
  create(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | null>;
}
