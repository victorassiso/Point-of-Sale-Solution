import { ProductsLogRepository } from "@/repositories/products-log-repository";
import { ProductLog } from "@prisma/client";

interface ListProductsLogRequest {
  product_id: string;
}

interface ListProductsLogResponse {
  productsLog: ProductLog[];
}

export class ListProductsLogUseCase {
  constructor(private productsLogRepository: ProductsLogRepository) {}

  async execute({ product_id }:ListProductsLogRequest): Promise<ListProductsLogResponse> {
    const productsLog = await this.productsLogRepository.listByProduct(product_id);
    return { productsLog };
  }
}
