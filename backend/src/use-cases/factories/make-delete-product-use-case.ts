import { PrismaProductsRepository } from "@/repositories/prisma/prisma-products-repository";
import { DeleteProductUseCase } from "../delete-product";

export function makeDeleteProductUseCase() {
  const productRepository = new PrismaProductsRepository();
  const deleteProductUseCase = new DeleteProductUseCase(productRepository);

  return deleteProductUseCase;
}
