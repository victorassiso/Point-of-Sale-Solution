import { ProductsRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";

interface GetProdutRequest {
  id: string;
}

interface GetProductResponse {
  product: Product | null;
}

export class GetProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ id }: GetProdutRequest): Promise<GetProductResponse> {
    const product = await this.productsRepository.findById(id);
    return { product };
  }
}
