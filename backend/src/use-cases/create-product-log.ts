import { ProductsLogRepository } from "@/repositories/products-log-repository";
import { ProductLog, ProductStatus } from "@prisma/client";

interface CreateProductsLogUseCaseRequest {
  name: string
  price: number
  status: ProductStatus
  product_id: string
}

interface CreateProductsLogUseCaseResponse {
  productLog: ProductLog;
}
export class CreateProductsLogUseCase {
  constructor(private productsLogRepository: ProductsLogRepository) {}

  async execute({
    product_id,
    name,
    price,
    status,
  }: CreateProductsLogUseCaseRequest): Promise<CreateProductsLogUseCaseResponse> {
    const productLog = await this.productsLogRepository.create({
      product_id,
      name,
      price,
      status,
    });

    return { productLog };
  }
}
