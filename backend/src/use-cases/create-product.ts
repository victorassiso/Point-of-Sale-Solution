import { ProductRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";
import { ProductAlreadyExistsError } from "./errors/product-already-exists";

interface CreateProductUseCaseRequest {
  name: string;
  price: number;
}

interface CreateProductUseCaseResponse {
  product: Product;
}
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute({
    name,
    price,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const productWithSameName = await this.productRepository.findByName(name);

    if (productWithSameName) {
      throw new ProductAlreadyExistsError();
    }
    const product = await this.productRepository.create({
      name,
      price,
    });

    return { product };
  }
}
