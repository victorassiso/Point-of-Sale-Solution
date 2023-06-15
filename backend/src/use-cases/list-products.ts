import { ProductsRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";

type ListProductsRequest = void;

interface ListProductsResponse {
  products: Product[];
}

export class ListProductsUseCase {
  constructor(private productRepository: ProductsRepository) {}

  async execute(): Promise<ListProductsResponse> {
    const products = await this.productRepository.list();
    return { products };
  }
}
