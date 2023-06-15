import { ProductRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";

type ListProductsRequest = void;

interface ListProductsResponse {
  products: Product[];
}

export class ListProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<ListProductsResponse> {
    const products = await this.productRepository.list();
    return { products };
  }
}
