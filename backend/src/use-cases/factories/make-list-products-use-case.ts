import { PrismaProductRepository } from "@/repositories/prisma/prisma-products-repository";
import { ListProductsUseCase } from "../list-products";

export function makeListProductsUseCase() {
  const productRepository = new PrismaProductRepository();
  const listProductsUseCase = new ListProductsUseCase(productRepository);

  return listProductsUseCase;
}
