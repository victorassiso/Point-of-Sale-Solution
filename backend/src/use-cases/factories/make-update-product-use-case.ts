import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { UpdateProductUseCase } from "../update-product";

export function makeUpdateProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const updateProductUseCase = new UpdateProductUseCase(productRepository);

  return updateProductUseCase;
}
