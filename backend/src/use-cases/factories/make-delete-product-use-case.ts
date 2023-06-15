import { PrismaProductRepository } from "@/repositories/prisma/prisma-products-repository";
import { DeleteProductUseCase } from "../delete-product";

export function makeDeleteProductUseCase() {
  const productRepository = new PrismaProductRepository();
  const deleteProductUseCase = new DeleteProductUseCase(productRepository);

  return deleteProductUseCase;
}
