import { PrismaProductRepository } from "@/repositories/prisma/prisma-products-repository";
import { CreateProductUseCase } from "../create-product";

export function makeCreateProductUseCase() {
  const productRepository = new PrismaProductRepository();
  const createProductUseCase = new CreateProductUseCase(productRepository);

  return createProductUseCase;
}
