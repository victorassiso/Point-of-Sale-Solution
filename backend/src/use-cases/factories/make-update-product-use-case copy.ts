import { PrismaProductRepository } from "@/repositories/prisma/prisma-products-repository";
import { UpdateProductUseCase } from "../update-product";

export function makeUpdateProductUseCase() {
  const productRepository = new PrismaProductRepository();
  const updateProductUseCase = new UpdateProductUseCase(productRepository);

  return updateProductUseCase;
}
