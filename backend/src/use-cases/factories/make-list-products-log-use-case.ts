import { PrismaProductsLogRepository } from "@/repositories/prisma/prisma-products-log-repository";
import { ListProductsLogUseCase } from "../list-products-log";

export function makeListProductsLogUseCase() {
  const productsLogRepository = new PrismaProductsLogRepository();
  const listProductsLogUseCase = new ListProductsLogUseCase(productsLogRepository);

  return listProductsLogUseCase;
}
