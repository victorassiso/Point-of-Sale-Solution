import {
  Product,
  ProductStatus,
  ProductsRepository,
} from "../repositories/products-repository";

interface CreateProductUseCaseRequest {
  name: string;
  price: number;
  status: ProductStatus;
}

interface CreateProductUseCaseResponse {
  product: Product;
}
export class CreateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    name,
    price,
    status,
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const product = await this.productsRepository.create({
      name,
      price,
      status,
    });
    return { product };
  }
}
