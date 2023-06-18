import { ProductsLogRepository } from "@/repositories/products-log-repository";
import { ProductLog } from "@prisma/client";

interface ListProductsLogResponse {
  productsLog: ProductLog[];
}

export class ListProductsLogUseCase {
  constructor(private productsLogRepository: ProductsLogRepository) {}

  async execute(): Promise<ListProductsLogResponse> {
    const productsLog = await this.productsLogRepository.list();
    return { productsLog };
  }
}
