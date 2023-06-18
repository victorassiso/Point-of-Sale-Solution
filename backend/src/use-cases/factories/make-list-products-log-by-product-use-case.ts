import { PrismaProductsLogRepository } from "@/repositories/prisma/prisma-products-log-repository";
import { ListProductsLogByProductUseCase } from "../list-products-log-by-product";

export function makeListProductsLogByProductUseCase() {
  const productsLogRepository = new PrismaProductsLogRepository();
  const listProductsLogUseCase = new ListProductsLogByProductUseCase(productsLogRepository);

  return listProductsLogUseCase;
}
