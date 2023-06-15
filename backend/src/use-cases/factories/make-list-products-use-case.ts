import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { ListProductsUseCase } from "../list-products";

export function makeListProductsUseCase() {
  const productRepository = new PrismaProductsRepository();
  const listProductsUseCase = new ListProductsUseCase(productRepository);

  return listProductsUseCase;
}
