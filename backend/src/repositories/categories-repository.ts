import { Category } from "@prisma/client";

export interface CategoriesUpdateInput {
  id: string;
  name?: string;
}

export interface CategoriesRepository {
  create(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | null>;
  findById(id: string): Promise<Category | null>;
  update(data: CategoriesUpdateInput): Promise<Category>;
  delete(id: string): Promise<void>;
}
