import { ProductsRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";
import { ProductNotFoundError } from "./errors/product-not-found";

interface UpdateProductUseCaseRequest {
  id: string;
  name?: string;
  price?: number;
}

interface UpdateProductUseCaseResponse {
  product: Product;
}
export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    id,
    name,
    price,
  }: UpdateProductUseCaseRequest): Promise<UpdateProductUseCaseResponse> {
    const productWithSameId = await this.productsRepository.findById(id);

    if (!productWithSameId) {
      throw new ProductNotFoundError();
    }

    const product = await this.productsRepository.update({
      id,
      name,
      price,
    });

    return { product };
  }
}
