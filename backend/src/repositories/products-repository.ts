import { Prisma, Product } from "@prisma/client";

export interface ProductUpdateInput {
  id: string;
  name?: string;
  price?: number;
}

export interface ProductRepository {
  findByName(name: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  create(data: Prisma.ProductCreateInput): Promise<Product>;
  update(data: ProductUpdateInput): Promise<Product>;
  list(): Promise<Product[]>;
  delete(id: string): void;
}
