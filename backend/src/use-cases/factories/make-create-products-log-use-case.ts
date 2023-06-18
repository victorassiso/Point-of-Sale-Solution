import { PrismaProductsLogRepository } from "@/repositories/prisma/prisma-products-log-repository";
import { CreateProductsLogUseCase } from "../create-product-log";

export function makeCreateProductsLogUseCase() {
  const productsLogRepository = new PrismaProductsLogRepository();
  const createProductsLogUseCase = new CreateProductsLogUseCase(productsLogRepository);

  return createProductsLogUseCase;
}
