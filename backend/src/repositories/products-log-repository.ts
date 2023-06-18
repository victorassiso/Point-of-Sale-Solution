import { Prisma, ProductLog, ProductStatus } from "@prisma/client";

export interface ProductsLogCreateInput {
    name: string
    price: number
    status: ProductStatus
    product_id: string
}

export interface ProductsLogRepository {
  create(data: ProductsLogCreateInput): Promise<ProductLog>;
  listByProduct(product_id: string): Promise<ProductLog[]>;
  list(): Promise<ProductLog[]>;
}
