import { Prisma, Product, ProductStatus } from "@prisma/client";

export interface ProductUpdateInput {
  id: string;
  name?: string;
  price?: number;
  status?: ProductStatus;
}

export interface ProductsRepository {
  findByName(name: string): Promise<Product | null>;
  findById(id: string): Promise<Product | null>;
  create(data: Prisma.ProductCreateInput): Promise<Product>;
  update(data: ProductUpdateInput): Promise<Product>;
  list(): Promise<Product[]>;
  delete(id: string): Promise<void>;
}
