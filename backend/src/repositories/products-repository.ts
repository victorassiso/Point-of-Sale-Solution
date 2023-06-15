import { Prisma, Product } from "@prisma/client";

export interface ProductRepository {
  findByName(email: string): Promise<Product | null>;
  create(data: Prisma.ProductCreateInput): Promise<Product>;
  update(data: Prisma.ProductCreateInput): Promise<Product>;
  list(): Promise<Product[]>;
}
