import { ProductsRepository } from "@/repositories/products-repository";
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
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    price,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const productWithSameName = await this.productsRepository.findByName(name);

    if (productWithSameName) {
      throw new ProductAlreadyExistsError();
    }
    const product = await this.productsRepository.create({
      name,
      price,
    });

    return { product };
  }
}
