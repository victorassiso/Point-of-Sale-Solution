import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { CreateProductUseCase } from "../create-product";

export function makeCreateProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const createProductUseCase = new CreateProductUseCase(productRepository);

  return createProductUseCase;
}
