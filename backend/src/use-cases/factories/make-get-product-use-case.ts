import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { GetProductUseCase } from "../get-product";

export function makeGetProductsUseCase() {
  const productRepository = new PrismaProductsRepository();
  const getProductUseCase = new GetProductUseCase(productRepository);

  return getProductUseCase;
}
