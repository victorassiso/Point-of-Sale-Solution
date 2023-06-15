import { ProductsRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";
import { ProductNotFound } from "./errors/product-not-found";

interface DeleteProductUseCaseRequest {
  id: string;
  name?: string;
  price?: number;
}

type DeleteProductUseCaseResponse = void;

export class DeleteProductUseCase {
  constructor(private productRepository: ProductsRepository) {}

  async execute({
    id,
  }: DeleteProductUseCaseRequest): Promise<DeleteProductUseCaseResponse> {
    const productWithSameId = await this.productRepository.findById(id);

    if (!productWithSameId) {
      throw new ProductNotFound();
    }

    this.productRepository.delete(id);
  }
}
