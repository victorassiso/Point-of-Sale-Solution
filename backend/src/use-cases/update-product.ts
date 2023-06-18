import { ProductsRepository } from "@/repositories/products-repository";
import { Product } from "@prisma/client";
import { ProductNotFoundError } from "./errors/product-not-found";
import { makeCreateProductsLogUseCase } from "./factories/make-create-products-log-use-case";

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

    // Create product log
    const createProductLogUseCase = makeCreateProductsLogUseCase();
    let status = product.status
    let product_id = product.id
    let nameUpdated = product.name
    let priceUpdated = product.price
    createProductLogUseCase.execute({
      name: nameUpdated,
      price: priceUpdated,
      product_id,
      status
    });

    return { product };
  }
}
