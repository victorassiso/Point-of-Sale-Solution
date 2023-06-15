import { ProductsRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";

interface ListProductsResponse {
  products: Product[];
}

export class ListProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<ListProductsResponse> {
    const products = await this.productsRepository.list();
    return { products };
  }
}
