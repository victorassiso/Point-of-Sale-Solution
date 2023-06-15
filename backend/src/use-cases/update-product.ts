import { ProductsRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";
import { ProductNotFound } from "./errors/product-not-found";

interface UpdateProductUseCaseRequest {
  id: string;
  name?: string;
  price?: number;
}

interface UpdateProductUseCaseResponse {
  product: Product;
}
export class UpdateProductUseCase {
  constructor(private productRepository: ProductsRepository) {}

  async execute({
    id,
    name,
    price,
  }: UpdateProductUseCaseRequest): Promise<UpdateProductUseCaseResponse> {
    const productWithSameId = await this.productRepository.findById(id);

    if (!productWithSameId) {
      throw new ProductNotFound();
    }

    const product = await this.productRepository.update({
      id,
      name,
      price,
    });

    return { product };
  }
}
